<template>
  <div class="lg:flex">
    <div class="flex-grow px-12 pt-6">
      <div class="flex justify-between items-center">
        <h1 class="pb-3">Images</h1>
        <zi-button type="primary" @click="isAdding = true">Create New</zi-button>
      </div>

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

    <ImageManager
      v-show="editId || isAdding"
      ref="imageManager"
      :edit-id="editId"
      @update="onUpdate"
      @cancel="cancel"
    />

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
import ImageManager from "@/components/admin/ImageManager";
import { mapActions } from "vuex";

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
    ImageManager
  },

  data: () => ({
    isAdding: false,
    editId: null,
    pendingDeletion: null
  }),

  methods: {
    ...mapActions("api", ["listImages", "getImage", "deleteImage"]),

    onUpdate() {
      try {
        this.listImages();
        this.cancel();
      } catch (err) {
        this.$Toast.danger(err);
      }
    },

    edit(image, index) {
      this.editId = image.id;
      this.$refs.imageManager.editImage(image);
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
      this.isAdding = false;
      this.editId = null;
      this.pendingDeletion = null;
    }
  }
};
</script>
