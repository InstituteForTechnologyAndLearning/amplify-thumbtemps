<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p class="text-red-300">hello</p>
    <zi-button>Hello</zi-button>
    <span v-if="user">current: {{ user.username }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      user: state => state.user.current
    })
  }
};
</script>
