<template>
  <div>
    <slot/>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";

export default {
  created() {
    AmplifyEventBus.$on("authState", info => {
      console.log({ info });  
      if (info === "signedIn") {
        this.$store.dispatch("user/load");
        this.$router.push("home");
      } else if (info === "signedOut") {
        this.$router.push("auth");
      }
      info === "signedIn" ? this.findUser() : (this.isAuthenticated = false);
    });
  }
};
</script>
