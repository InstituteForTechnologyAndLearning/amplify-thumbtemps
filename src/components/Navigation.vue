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
    <div class="auth">
      <router-link to="/login">Login</router-link>
      <router-link to="/signup" class="btn-link">
        <zi-button auto type="success">Sign Up</zi-button>
      </router-link>
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
    }
  },
  methods: {
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
  padding: theme("padding.3") 0;
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
}
</style>
