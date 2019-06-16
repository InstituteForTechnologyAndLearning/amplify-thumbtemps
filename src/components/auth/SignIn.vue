<template>
  <form @submit.prevent="signIn" class="w-full">
    <div class="w-full mb-6 text-gray-600">
      <label for="username" class="block">Username</label>
      <zi-input
        class="w-full"
        placeholder="username"
        v-model="form.username.value"
        name="username"
      />
    </div>
    <div class="w-full mb-6 text-gray-600">
      <div class="flex justify-between">
        <label for="password" class="block">Password</label>
        <router-link to="/forgot-password">Forget?</router-link>
      </div>
      <zi-input
        class="w-full"
        type="password"
        placeholder="password "
        v-model="form.password.value"
        name="password"
      />
    </div>
    <zi-button class="mr-6" type="primary" :loading="isSending" auto>Sign In</zi-button>
    <router-link to="signup">Need an account? Sign up</router-link>
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
        this.isSending = false;
        this.$Toast.danger(err.message);
      }
    }
  }
};
</script>
