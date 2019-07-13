<template>
  <div class="lg:flex">
    <div class="flex-grow px-12 pt-6">
      <h1 class="pb-3">Images</h1>

      <zi-table :data="$store.state.api.images" empty-text="No images :(">
        <zi-table-column label="Title">
          <template slot-scope="scope">
            <div class="flex items-center py-3">
              <img class="w-24 mr-6" :src="scope.row.source" />
              <div class="truncate">{{ scope.row.title }}</div>
            </div>
          </template>
        </zi-table-column>
        <zi-table-column label="Publisher" width="100">
          <template slot-scope="scope">
            <div class="truncate">{{ scope.row.publisher }}</div>
          </template>
        </zi-table-column>
        <zi-table-column label=" " width="125">
          <template slot-scope="scope">
            <div class="flex justify-end">
              <a @click="edit(scope.row, scope.$index)" class="inline-block mr-3">Edit</a>
              <a @click="remove(scope.row, scope.$index)" class="text-magenta inline-block">Delete</a>
            </div>
          </template>
        </zi-table-column>
      </zi-table>
    </div>

    <div class="px-12 pt-6 bg-gray min-h-screen" style="width: 420px;">
      <h2 class="truncate">{{ !editId ? 'Add New' : `Edit ${form.title.value}` }}</h2>
      <form @submit.prevent="create" class="mt-3">
        <FilePicker
          v-if="!editId"
          class="mb-3"
          @add="addImages"
          placeholder="Select or Drop Image(s)"
        />
        <FilePreviewer v-if="!editId" class="mb-3" :files="pending" @change="setImages" />
        <zi-input class="w-full mb-3" v-model="form.title.value" placeholder="Title..." />
        <zi-input class="w-full mb-3" v-model="form.publisher.value" placeholder="Publisher..." />
        <zi-input
          v-if="editId"
          class="w-full mb-3"
          v-model="form.source.value"
          placeholder="Source..."
          disabled
        />
        <div class="flex justify-end">
          <zi-button type="primary" class="w-full mr-3" :loading="isSending">Save Images</zi-button>
          <zi-button v-if="!editId" type="danger" @click.prevent="cancel" ghost auto>Delete</zi-button>
          <zi-button v-else type="primary" @click.prevent="cancel" ghost auto>Cancel</zi-button>
        </div>
      </form>
    </div>

    <zi-dialog
      v-model="pendingDeletion"
      title="Confirm Deletion"
      done="Delete"
      :beforeDone="destroy"
    >
      <p
        v-if="pendingDeletion"
      >Please confirm you want to permanantly delete category {{ pendingDeletion.name }}</p>
    </zi-dialog>
  </div>
</template>

<script>
import { Storage } from "aws-amplify";
import NewIcon from "@zeit-ui/vue-icons/packages/new";
import FilePicker from "@/components/admin/FilePicker";
import FilePreviewer from "@/components/admin/FilePreviewer";
import FormService from "@/services/FormService";
import UtilityService from "@/services/UtilityService";
import { mapActions } from "vuex";
import config from "@/aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config;

export default {
  layout: "admin",
  middleware: ["admin"],

  async asyncData({ store }) {
    try {
      await store.cache.dispatch("api/listImages");
    } catch (err) {
      store.dispatch("alert/danger", "Failed to load categories");
    }
  },

  components: {
    NewIcon,
    FilePicker,
    FilePreviewer
  },

  data: () => ({
    editId: null,
    pendingDeletion: null,
    pending: [],
    isSending: false,
    form: FormService.createForm(["title", "publisher", "source"])
  }),

  methods: {
    ...mapActions("api", [
      "listImages",
      "getImage",
      "createImage",
      "updateImage",
      "deleteImage"
    ]),

    addImages(files) {
      this.pending = [...this.pending, ...files];
    },

    setImages(files) {
      this.pending = files;
    },

    async saveImages() {
      const images = [];

      for (let i = 0; i < this.pending.length; i++) {
        if (!this.pending[i]) continue;
        const uuid = UtilityService.getUUID();
        const filename = UtilityService.slugify(this.form.title.value);
        const file = this.pending[i].file;
        const extension = [...file.name.split(".")].pop();
        const { type: mimeType } = file;
        const key = `images/${filename}_${uuid}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
        const imgData = this.form.dispatch();
        imgData.source = url;
        imgData.order = i;

        await Storage.put(key, file, { contentType: mimeType });
        images.push(await this.createImage(imgData));
      }

      return images;
    },

    async create() {
      try {
        this.isSending = true;
        const images = await this.saveImages();
        this.form.clear();
        this.isSending = false;
        await this.listImages();
      } catch (err) {
        this.$Toast.danger(err);
      }
    },

    edit(image, index) {
      this.editId = image.id;
      this.form.clear();
      this.form.setValues(image);
    },

    async update() {
      try {
        const data = { id: this.editId, ...this.form.dispatch() };
        const image = await this.updateImage(data);
        this.cancel();
        await this.listImages();
      } catch (err) {
        this.$Toast.danger(err);
      }
    },

    remove(image, index) {
      this.pendingDeletion = image;
    },

    async destroy() {
      try {
        const id = this.pendingDeletion.id;
        const image = await this.deleteImage({ id });
        this.pendingDeletion = null;
        if (this.editId === id) this.cancel();
        await this.listImages();
      } catch (err) {
        this.$Toast.danger(err);
      }
    },

    cancel() {
      this.form.clear();
      this.editId = null;
      this.pendingDeletion = null;
      this.pending = [];
      this.isSending = false;
    }
  }
};
</script>
