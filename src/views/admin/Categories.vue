<template>
  <div>
    <h1>Categories</h1>
    <div v-for="item in categories" :key="item.id">{{ item.name }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  layout: "admin",
  middleware: ["admin"],

  data: () => ({
    isLoading: false,
    categories: []
  }),

  async mounted() {
    try {
      this.categories = await this.listCategories();
    } catch (err) {
      this.$Toast.danger(`Failed to load categories`);
    }
  },

  methods: {
    ...mapActions("api", ["listCategories", "getCategory"])
  }
};
</script>
