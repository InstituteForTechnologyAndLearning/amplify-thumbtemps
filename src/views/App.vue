<template>
  <div id="app">
    <loading ref="loading"/>
    <div
      key="loadiing"
      v-if="loadingInitialData"
      class="w-screen h-screen bg-dark flex items-center justify-center"
    >Loading ...</div>
    <div key="application" v-else>
      <component v-if="layout" :is="layout"></component>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import Loading from "../components/loading";

// Load layout components dynamically.
const requireContext = require.context("../layouts", false, /.*\.vue$/);
const layouts = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.vue$)/g, ""), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component;
    return components;
  }, {});

export default {
  components: {
    Loading
  },

  data: () => ({
    layout: null,
    defaultLayout: "default",
    loadingInitialData: true
  }),

  async created() {
    this.loadingInitialData = false;
  },

  mounted() {
    this.$loading = this.$refs.loading;
    this.$store.dispatch("user/load");
  },

  methods: {
    setLayout(layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout;
      }

      this.layout = layouts[layout];
    },
    async getUser() {
      const user = await Auth.currentAuthenticatedUser();
    }
  }
};
</script>