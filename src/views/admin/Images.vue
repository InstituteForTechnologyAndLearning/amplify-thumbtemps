<template>
  <div class="px-12 pt-6 max-w-3xl mx-auto">
    <h1 class="pb-3">Images</h1>

    <zi-table :data="$store.state.api.images" empty-text="No images :(">
      <zi-table-column label="Name">
        <template slot-scope="scope">
          <div v-if="editId !== scope.row.id">{{ scope.row.name }}</div>
          <div v-else>
            <zi-input class="w-full" v-model="form.name.value"/>
          </div>
        </template>
      </zi-table-column>
      <zi-table-column label=" " width="125">
        <template slot-scope="scope">
          <div v-if="editId !== scope.row.id" class="flex justify-end">
            <a @click="edit(scope.row, scope.$index)" class="inline-block mr-3">Edit</a>
            <a @click="remove(scope.row, scope.$index)" class="text-magenta inline-block">Delete</a>
          </div>
          <div v-else class="flex justify-end">
            <a @click="update" class="inline-block mr-3">Update</a>
            <a @click="cancel" class="text-label inline-block">Cancel</a>
          </div>
        </template>
      </zi-table-column>
    </zi-table>

    <form v-if="!editId" @submit.prevent="create" class="mt-3">
      <Uploader class="mb-3" @add="addImages" placeholder="Select or Drop Image(s)"/>
      <zi-input class="w-full mb-3" v-model="form.name.value" placeholder="Name..."/>
      <zi-input class="w-full mb-3" v-model="form.name.value" placeholder="Owner..."/>
      <zi-input class="w-full mb-3" v-model="form.name.value" placeholder="Source..." disabled/>
      <div class="flex justify-end">
        <zi-button type="primary" class="mr-3">Save Images</zi-button>
        <zi-button type="danger" ghost auto>Delete</zi-button>
      </div>
    </form>

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
import Uploader from "@/components/admin/Uploader";
import FormService from "@/services/FormService";
import { mapActions } from "vuex";

export default {
  layout: "admin",
  middleware: ["admin"],

  // async asyncData({ store }) {
  //   try {
  //     await store.cache.dispatch("api/listImages");
  //   } catch (err) {
  //     store.dispatch("alert/danger", "Failed to load categories");
  //   }
  // },

  components: {
    Uploader
  },

  data: () => ({
    editId: null,
    pendingDeletion: null,
    pendingAdd: [],
    form: FormService.createForm(["name"])
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
      this.pendingAdd = [...this.pendingAdd, files];
    },

    async create() {
      try {
        const image = await this.createImage(this.form.dispatch());
        this.form.clear();
        await this.listImages();
      } catch (err) {
        this.$Toast.danger(err);
      }
    },

    edit(image, index) {
      this.editId = image.id;
      this.form.clear();
      this.form.name.value = image.name;
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
    }
  }
};
</script>
