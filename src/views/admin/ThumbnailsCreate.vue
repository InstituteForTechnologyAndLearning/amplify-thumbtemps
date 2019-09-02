<template>
  <div class="px-12 pt-6">
    <h1 class="mb-12">Adding/Editing</h1>

    <form @submit.prevent="create" class="flex flex-wrap -mx-12">
      <div class="w-full md:w-3/5 px-12">
        <div class="form-group">
          <label>Title</label>
          <zi-input
            class="w-full"
            v-model="form.title.value"
            @input="createSlug"
            placeholder="Title"
          />
        </div>

        <div class="form-group">
          <label>Slug</label>
          <zi-input class="w-full" v-model="form.slug.value" :disabled="true" />
        </div>

        <div class="flex justify-start -mx-12">
          <div class="form-group px-12">
            <label>Release Date</label>
            <datetime
              class="zi-input m-0 w-full"
              v-model="form.releaseDate.value"
              placeholder="Release Date"
            ></datetime>
          </div>
          <div class="form-group px-12">
            <label>Category</label>
            <zi-select class="w-full" v-model="form.thumbnailCategoryId.value">
              <zi-option
                v-for="category in $store.state.api.categories"
                :key="category.id"
                :value="category.id"
                :label="category.name"
              ></zi-option>
            </zi-select>
          </div>
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea
            class="zi-input w-full h-40 m-0"
            rows="5"
            v-model="form.description.value"
            placeholder="Description"
          ></textarea>
        </div>
      </div>

      <div class="form-group w-full md:w-2/5 px-12">
        <label>Download</label>
        <FilePicker
          class="mb-3"
          @add="addDownload"
          :types="['application/x-zip-compressed']"
          placeholder="Select or Drop Download"
        />
        <div class="form-group">
          <label>Download Type</label>
          <zi-input
            class="w-full"
            v-model="downloadForm.downloadType.value"
            placeholder="Download Type"
            :disabled="true"
          />
        </div>
        <div class="form-group">
          <label>File Size</label>
          <zi-input
            class="w-full"
            v-model="downloadForm.fileSize.value"
            placeholder="File Size"
            :disabled="true"
          />
        </div>
        <div class="form-group">
          <label>Owner</label>
          <zi-input
            class="w-full"
            v-model="downloadForm.owner.value"
            placeholder="Owner"
            :disabled="true"
          />
        </div>

        <div class="form-group">
          <label>Keywords</label>
          <multiselect
            v-model="keywords"
            tag-placeholder="Add this as new keyword"
            placeholder="Search or add a keyword"
            label="name"
            track-by="id"
            :options="keywordOptions"
            :multiple="true"
            :taggable="true"
            @tag="addKeyword"
          ></multiselect>
        </div>

        <div class="form-group">
          <button
            type="button"
            class="zi-btn ghost primary medium"
            @click="isManagingImages = true"
            ghost
          >Manage Images</button>
        </div>
      </div>
      <div class="w-full p-12">
        <zi-button type="primary" :loading="isSending" auto>Create</zi-button>
      </div>
    </form>
    <ImageManager
      v-show="isManagingImages"
      ref="imageManager"
      v-model="pendingImages"
      :auto-upload="false"
    />
  </div>
</template>

<script>
import ImageManager from "@/components/admin/ImageManager";
import FilePicker from "@/components/admin/FilePicker";
import FormService from "@/services/FormService";
import UtilityService from "@/services/UtilityService";
import { mapActions } from "vuex";

const formFields = [
  "title",
  "slug",
  "description",
  "releaseDate",
  "thumbnailDownloadId",
  "thumbnailCategoryId",
  "owner"
];

const downloadFormFields = ["source", "fileSize", "downloadType", "owner"];

const downloadTypes = [
  "PHOTOSHOP",
  "PHOTOSHOP_WITH_IMAGES",
  "GIMP",
  "GIMP_WITH_IMAGES",
  "ZIP"
];

const statuses = {
  edit: "EDIT",
  create: "CREATE"
};

export default {
  layout: "admin",
  middleware: ["admin"],

  async asyncData({ store }) {
    try {
      await store.cache.dispatch("api/listCategories");
      const keywordOptions = await store.cache.dispatch("api/listKeywords");
      return { keywordOptions };
    } catch (err) {
      store.dispatch("alert/danger", "Some data failed to load");
    }
  },

  components: {
    ImageManager,
    FilePicker
  },

  computed: {
    status() {
      return this.$route.params.slug ? statuses.edit : statuses.create;
    }
  },

  data: () => ({
    pendingDownload: null,
    isSending: false,
    keywords: [],
    form: FormService.createForm(formFields),
    downloadForm: FormService.createForm(downloadFormFields),
    downloadTypes: downloadTypes,
    pendingImages: [],
    isManagingImages: false
  }),

  methods: {
    ...mapActions("api", [
      "createThumbnail",
      "createKeyword",
      "createThumbnailKeyword",
      "storeAndCreateDownload"
    ]),

    addKeyword(newKeyword) {
      let keyword = {
        name: newKeyword
      };
      this.keywordOptions.push(keyword);
      this.keywords.push(keyword);
    },

    addDownload([file, ...others]) {
      console.log({ file });
      this.pendingDownload = file;
      this.downloadForm.fileSize.value = this.pendingDownload.size;
      this.downloadForm.downloadType.value = this.pendingDownload.type;
      this.downloadForm.owner.value = this.$store.state.user.current.username;
    },

    createSlug() {
      this.form.slug.value = UtilityService.slugify(this.form.title.value);
    },

    async create(e) {
      try {
        this.isSending = true;
        const thumbnailData = this.form.dispatch();
        const keywords = this.keywords;

        // save keywords
        const newKeywords = keywords.filter(k => !k.id);
        const savedKeywords = keywords.filter(k => k.id);
        let hasKeywordFailed = false;
        for (let i = 0; i < newKeywords.length; i++) {
          try {
            const keyword = await this.createKeyword(newKeywords[i]);
            savedKeywords.push(keyword);
          } catch (err) {
            hasKeywordFailed = true;
          }
        }

        if (hasKeywordFailed) {
          this.$Toast.danger("One or more keywords failed to create");
        }

        // save fonts

        // save download
        const download = await this.storeAndCreateDownload(
          this.getDownloadData()
        );

        // save thumbnail
        thumbnailData.thumbnailDownloadId = download.id;
        thumbnailData.owner = this.$store.state.user.current.username;
        const thumbnail = await this.createThumbnail(thumbnailData);

        // create thumbnail relationships
        let hasThumbnailKeywordFailed = false;
        for (let i = 0; i < savedKeywords.length; i++) {
          try {
            let data = {
              thumbnailKeywordThumbnailId: thumbnail.id,
              thumbnailKeywordKeywordId: savedKeywords[i].id
            };
            const thumbnailKeyword = await this.createThumbnailKeyword(data);
          } catch (err) {
            hasThumbnailKeywordFailed = true;
          }
        }

        if (hasThumbnailKeywordFailed) {
          this.$Toast.danger(
            "One or more keywords failed to attach to the thumbnail"
          );
        }

        this.form.clear();
        this.downloadForm.clear();
        this.isSending = false;
      } catch (err) {
        console.log({ err });
        this.isSending = false;
        this.$Toast.danger(err);
      }
    },

    getDownloadData() {
      return {
        downloadSource: this.pendingDownload,
        downloadData: this.downloadForm.dispatch()
      };
    }
  }
};
</script>
