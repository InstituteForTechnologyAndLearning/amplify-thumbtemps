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

  data: () => ({
    isLoading: false,
    categories: [],
    form: FormService.createForm(["name"])
  }),

  async mounted() {
    try {
      this.categories = await this.listCategories();
    } catch (err) {
      this.$Toast.danger(`Failed to load categories`);
    }
  },

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
