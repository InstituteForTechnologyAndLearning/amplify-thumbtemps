<template>
  <div>
    <h1>Categories</h1>
    <div v-for="item in categories" :key="item.id">{{ item.name }}</div>
    <form @submit.prevent="create">
      <label class="font-semibold mr-3">Name:</label>
      <zi-input v-model="form.name.value"/>
      <zi-button type="primary" auto>Create</zi-button>
    </form>
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
      return { categories: await store.dispatch("api/listCategories") };
    } catch (err) {
      store.dispatch("alert/add", {
        type: "danger",
        text: "Failed to load categories"
      });
    }
  },

  props: {
    test: String
  },

  data: () => ({
    isLoading: false,
    form: FormService.createForm(["name"])
  }),

  methods: {
    ...mapActions("api", ["listCategories", "getCategory", "createCategory"]),

    async create() {
      try {
        const category = await this.createCategory(this.form.dispatch());
        this.form.clear();
        this.categories.push(category);
      } catch (err) {
        this.$Toast.danger(err);
      }
    }
  }
};
</script>
