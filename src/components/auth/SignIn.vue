<template>
  <form @submit.prevent="signIn" class="w-full">
    <div class="form-group">
      <label for="username" class="block">Username</label>
      <zi-input
        class="w-full"
        placeholder="username"
        v-model="form.username.value"
        name="username"
        tabindex="1"
      />
    </div>
    <div class="form-group">
      <div class="flex justify-between">
        <label for="password" class="block">Password</label>
        <router-link to="/forgot-password" tabindex="4">Forget?</router-link>
      </div>
      <zi-input
        class="w-full"
        type="password"
        placeholder="password "
        v-model="form.password.value"
        name="password"
        tabindex="2"
      />
    </div>
    <div class="mt-8 text-center">
      <zi-button class="mr-6 w-full" type="primary" :loading="isSending" tabindex="3" auto>Sign In</zi-button>
      <router-link to="signup" class="inline-block mt-6">Need an account? Sign up</router-link>
    </div>
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
        this.$router.push("/");
      } catch (err) {
        this.isSending = false;
        this.$Toast.danger(err.message);
      }
    }
  }
};
</script>
