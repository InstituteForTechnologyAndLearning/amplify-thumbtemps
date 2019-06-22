<template>
  <header class="bg-drak">
    <div class="logo">
      <router-link to="/">ThumbTemps</router-link>
    </div>
    <nav>
      <router-link to="/thumbnails">Thumbnails</router-link>
      <router-link to="/resources">Resources</router-link>
      <router-link to="/license">License</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <div v-if="!$store.state.user.isAuthenticated" class="auth">
      <router-link to="/login">Login</router-link>
      <router-link to="/signup" class="btn-link">
        <zi-button auto type="success">Sign Up</zi-button>
      </router-link>
    </div>
    <div v-else class="auth flex justify-end items-center">
      <zi-popover class="flex items-center text-white" align="right" @command="authPopoverClick">
        <v-gravatar class="rounded-full overflow-hidden mr-3" :email="email" :size="32"/>
        <template slot="dropdown">
          <zi-popover-item title>{{ $store.state.user.current.username }}</zi-popover-item>
          <zi-popover-item line></zi-popover-item>
          <zi-popover-item to="/profile">Profile</zi-popover-item>
          <zi-popover-item to="/settings">Settings</zi-popover-item>
          <zi-popover-item v-if="isAdmin" to="/admin">Admin</zi-popover-item>
          <zi-popover-item command="logout">Logout</zi-popover-item>
        </template>
      </zi-popover>
    </div>
  </header>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  computed: {
    isAdmin() {
      let groups = this.$store.getters["user/groups"];
      return groups.indexOf("admin") > -1;
    },
    email() {
      return this.$store.getters["user/email"];
    }
  },
  methods: {
    authPopoverClick(command) {
      if (command === "logout") {
        this.logout();
      }
    },
    async logout() {
      try {
        const username = this.$store.state.user.current.username;
        await AuthService.signOut();
        this.$Toast.success(`See you next time, ${username}`);
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
  grid-template-areas: "logo nav auth";
  grid-template-columns: auto 1fr 200px;
  align-items: center;
  padding: theme("padding.3") theme("padding.6");
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 3px;
    background: linear-gradient(
      to right,
      theme("colors.blue"),
      theme("colors.green")
    );
    position: absolute;
    top: 0;
  }

  nav,
  .logo,
  .auth {
    padding: 0 theme("padding.6");
  }

  nav {
    display: flex;
    flex-wrap: wrap;
  }

  .auth {
    display: flex;
    align-items: center;
  }

  a:not(.btn-link) {
    color: theme("colors.gray-3");
    padding: theme("padding.3");
    text-decoration: none;
    transition: color 300ms ease;

    &:hover,
    &.router-link-active {
      color: theme("colors.white");
    }
  }

  a.btn-link {
    padding: 0 theme("padding.3");
  }

  .logo {
    font-style: italic;
    font-weight: bold;
    font-size: theme("fontSize.xl");

    a {
      padding: 0;
    }
  }
}
</style>
