<template>
  <div class="px-12 pt-6 max-w-3xl mx-auto">
    <h1 class="pb-3">Categories</h1>

    <zi-table :data="$store.state.api.categories" empty-text="No categories :(">
      <zi-table-column label="Name">
        <template slot-scope="scope">
          <div v-if="editId !== scope.row.id">{{ scope.row.name }}</div>
          <div v-else>
            <zi-input class="w-full" v-model="form.name.value" />
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

    <form v-if="!editId" @submit.prevent="create" class="flex mt-3">
      <zi-input class="w-full mr-3" v-model="form.name.value" placeholder="Name..." />
      <zi-button type="primary" auto>Create</zi-button>
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
import FormService from "@/services/FormService";
import { mapActions } from "vuex";

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

  data: () => ({
    editId: null,
    pendingDeletion: null,
    form: FormService.createForm(["name"])
  }),

  methods: {
    ...mapActions("api", [
      "listCategories",
      "getCategory",
      "createCategory",
      "updateCategory",
      "deleteCategory"
    ]),

    async create() {
      try {
        const category = await this.createCategory(this.form.dispatch());
        this.form.clear();
        this.categories.push(category);
      } catch (err) {
        this.$Toast.danger(err);
      }
    },

    edit(category, index) {
      this.editId = category.id;
      this.form.clear();
      this.form.name.value = category.name;
    },

    async update() {
      try {
        const data = { id: this.editId, ...this.form.dispatch() };
        const category = await this.updateCategory(data);
        this.cancel();
        await this.listCategories();
      } catch (err) {
        this.$Toast.danger(err);
      }
    },

    remove(category, index) {
      this.pendingDeletion = category;
    },

    async destroy() {
      try {
        const id = this.pendingDeletion.id;
        const category = await this.deleteCategory({ id });
        this.pendingDeletion = null;
        if (this.editId === id) this.cancel();
        await this.listCategories();
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
