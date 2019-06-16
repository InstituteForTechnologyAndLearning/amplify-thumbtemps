<template>
  <form @submit.prevent="signIn">
    <div class="w-full mb-4 text-gray-600">
      <label for="username" class="block">Username</label>
      <zi-input placeholder="username" v-model="form.username.value" name="username"/>
    </div>
    <div class="w-full mb-4">
      <label for="password" class="block">Password</label>
      <zi-input
        type="password"
        placeholder="password "
        v-model="form.password.value"
        name="password"
      />
    </div>
    <zi-button type="primary" :loading="isSending">Sign In</zi-button>
  </form>
</template>

<script>
import AuthService from "@/services/AuthService";
import FormService from "@/services/FormService";

export default {
  data: () => ({
    isSending: false,
    form: FormService.createForm(["username", "password"])
  }),

  methods: {
    async signIn() {
      try {
        this.isSending = true;
        const user = await AuthService.signIn(this.form.dispatch());

        if (user.status) {
          // additional action required
        }

        this.form.clear();
        this.isSending = false;
        this.$Toast.success(`Welcome back, ${user.username}`);
        this.$router.push("home");
      } catch (err) {
        this.$Toast.danger(err);
      }
    }
  }
};
</script>
