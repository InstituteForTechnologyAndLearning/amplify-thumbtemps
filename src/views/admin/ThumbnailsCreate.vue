<template>
  <div class="px-12 pt-6">
    <h1>Adding/Editing</h1>
  </div>
</template>

<script>
import FormService from "@/services/FormService";

const formFields = [
  "title",
  "description",
  "releaseDate",
  "thumbnail",
  "category"
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
      await store.cache.dispatch("api/listImages");
    } catch (err) {
      store.dispatch("alert/danger", "Failed to load categories");
    }
  },

  components: {},

  computed: {
    status() {
      return this.$route.params.slug ? statuses.edit : statuses.create;
    }
  },

  data: () => ({
    isSending: false,
    form: FormService.createForm(formFields)
  })
};
</script>
