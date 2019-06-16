<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        ></path>
      </svg>
      <span class="font-semibold text-xl tracking-tight">ThumbTemps</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
      </div>
      <div>
        <router-link
          v-if="!$store.state.user.isAuthenticated"
          to="/auth"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >Login/Register</router-link>
        <button
          v-if="$store.state.user.isAuthenticated"
          @click="logout"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  methods: {
    async logout() {
      try {
        await AuthService.signOut();
      } catch (error) {
        this.$Toast.danger(error);
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.nav-link {
  display: block;
  color: theme("colors.teal.200");
  margin-top: theme("margin.4");
  margin: theme("margin.4") theme("margin.4") 0 0;
  &:hover {
    color: theme("colors.white");
  }
  @screen lg {
    display: inline-block;
    margin-top: 0;
  }
}
</style>
