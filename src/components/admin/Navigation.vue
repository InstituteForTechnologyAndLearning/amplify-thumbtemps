<template>
  <header class="w-full bg-drak text-white h-screen">
    <div class="logo">
      <router-link to="/admin">ThumbTemps</router-link>
    </div>
    <nav>
      <div class="flex flex-col">
        <router-link to="/admin">Home</router-link>
        <router-link to="/admin/thumbnails">Thumbnails</router-link>
      </div>
      <div class="px-3 py-6 flex items-center justify-between uppercase">
        <div class="flex items-center">
          <v-gravatar class="rounded-full overflow-hidden mr-3" :email="email" :size="32"/>
          {{ $store.state.user.current.username }}
        </div>
        <zi-button @click="logout" type="primary" auto>Logout</zi-button>
      </div>
    </nav>
  </header>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  computed: {
    email() {
      return this.$store.getters["user/email"];
    }
  },

  methods: {
    async logout() {
      try {
        const username = this.$store.state.user.current.username;
        await AuthService.signOut();
        this.$Toast.success(`See you next time, ${username}`);
        this.$router.push("/");
      } catch (error) {
        this.$Toast.danger(error);
      }
    }
  }
};
</script>


<style lang="scss" scoped>
header {
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 0 theme("padding.3");
}

.logo {
  font-style: italic;
  font-weight: bold;
  font-size: theme("fontSize.3xl");
  padding: theme("padding.3") theme("padding.3") theme("padding.6");
}

nav {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto;

  a:not(.btn-link) {
    color: theme("colors.gray-3");
    padding: theme("padding.1") theme("padding.3");
    text-decoration: none;
    transition: color 300ms ease;

    &:hover,
    &.router-link-active {
      color: theme("colors.white");
    }
  }
}
</style>
