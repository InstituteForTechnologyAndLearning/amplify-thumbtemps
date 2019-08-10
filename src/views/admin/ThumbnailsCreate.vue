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

        <div class="form-group">
          <label>Description</label>
          <textarea
            class="zi-input w-full h-40 m-0"
            rows="5"
            v-model="form.description.value"
            placeholder="Description"
          ></textarea>
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
      </div>
      <div class="w-full p-12">
        <zi-button type="primary" :loading="isSending" auto>Create</zi-button>
      </div>
    </form>
  </div>
</template>

<script>
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
    } catch (err) {
      store.dispatch("alert/danger", "Failed to load categories");
    }
  },

  components: {
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
    form: FormService.createForm(formFields),
    downloadForm: FormService.createForm(downloadFormFields),
    downloadTypes: downloadTypes
  }),

  methods: {
    ...mapActions("api", ["createThumbnail", "storeAndCreateDownload"]),

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

        const download = await this.storeAndCreateDownload(
          this.getDownloadData()
        );

        const thumbnailData = this.form.dispatch();
        thumbnailData.thumbnailDownloadId = download.id;

        const thumbnail = await this.createThumbnail(thumbnailData);

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