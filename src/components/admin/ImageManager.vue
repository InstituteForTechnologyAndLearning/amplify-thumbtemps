<template>
  <div class="px-12 pt-6 bg-gray min-h-screen fixed top-0 right-0" style="width: 420px;">
    <h2 class="truncate">{{ !editId ? 'Add New' : `Edit ${form.title.value}` }}</h2>
    <form @submit.prevent="createOrUpdate" class="mt-3">
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
        <zi-button
          type="primary"
          class="w-full mr-3"
          :loading="isSending"
        >{{ !editId ? 'Save' : 'Update' }} Image(s)</zi-button>
        <zi-button v-if="!editId" type="danger" @click.prevent="cancel" ghost auto>Delete</zi-button>
        <zi-button v-else type="primary" @click.prevent="cancel" ghost auto>Cancel</zi-button>
      </div>
    </form>
  </div>
</template>

<script>
import NewIcon from "@zeit-ui/vue-icons/packages/new";
import FilePicker from "@/components/admin/FilePicker";
import FilePreviewer from "@/components/admin/FilePreviewer";
import FormService from "@/services/FormService";
import { mapActions } from "vuex";

export default {
  components: {
    FilePicker,
    FilePreviewer
  },

  props: {
    editId: { type: String, default: null },
    autoUpload: { type: Boolean, default: true }
  },

  data: () => ({
    pending: [],
    isSending: false,
    form: FormService.createForm(["title", "publisher", "source"])
  }),

  methods: {
    ...mapActions("api", ["getImage", "storeAndCreateImages", "updateImage"]),

    addImages(files) {
      this.pending = [...this.pending, ...files];
    },

    setImages(files) {
      this.pending = files;
    },

    editImage(image) {
      this.form.clear();
      this.form.setValues(image);
    },

    async create() {
      try {
        this.isSending = true;

        const images = this.autoUpload
          ? await this.storeAndCreateImages(this.getImageData())
          : this.getImageData();

        this.form.clear();
        this.isSending = false;
        this.$emit("update", images);
      } catch (err) {
        console.log({ err });
        this.$Toast.danger(err);
      }
    },

    async createOrUpdate() {
      this.editId ? this.update() : this.create();
    },

    getImageData() {
      return {
        imageSources: this.pending,
        imageData: this.form.dispatch()
      };
    },

    async update() {
      try {
        const data = { id: this.editId, ...this.form.dispatch() };
        const image = await this.updateImage(data);
        this.$emit("update", image);
      } catch (err) {
        this.$Toast.danger(err);
      }
    },

    cancel() {
      this.form.clear();
      this.pending = [];
      this.isSending = false;
      this.$emit("cancel");
    }
  }
};
</script>
