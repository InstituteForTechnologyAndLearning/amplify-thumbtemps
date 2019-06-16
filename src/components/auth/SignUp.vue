<template>
  <div>
    <form v-if="!isConfirming" @submit.prevent="signUp" class="w-full">
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
        <label for="email" class="block">Email</label>
        <zi-input
          class="w-full"
          type="email"
          placeholder="email"
          v-model="form.email.value"
          name="email"
        />
      </div>
      <div class="w-full mb-6 text-gray-600">
        <label for="password" class="block">Password</label>
        <zi-input
          class="w-full"
          type="password"
          placeholder="password "
          v-model="form.password.value"
          name="password"
        />
      </div>
      <zi-button class="mr-6" type="primary" :loading="isSending" auto>Sign Up</zi-button>
      <router-link to="login">Have an account? Login!</router-link>
    </form>
    <form v-if="isConfirming" @submit.prevent="confirmSignUp" class="w-full">
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
        <label for="code" class="block">Confirmation Code</label>
        <zi-input class="w-full" placeholder="code" v-model="form.code.value" name="code"/>
      </div>
      <zi-button type="primary" :loading="isSending" auto>Confirm</zi-button>
    </form>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
import FormService from "@/services/FormService";

export default {
  data: () => ({
    isSending: false,
    isConfirming: false,
    form: FormService.createForm(["username", "email", "password", "code"])
  }),

  methods: {
    async signUp() {
      try {
        this.isSending = true;
        const userSignUp = await AuthService.signUp(this.form.dispatch());
        this.isConfirming = true;
        this.isSending = false;
      } catch (err) {
        this.isSending = false;
        this.$Toast.danger(err.message);
      }
    },

    async confirmSignUp() {
      try {
        this.isSending = true;
        const user = await AuthService.confirmSignUp(this.form.dispatch());
        this.form.clear();

        this.$Toast.success(`Welcome to ThumbTemps, ${user.username}`);
        this.$router.push("home");

        this.isSending = false;
        this.isConfirming = false;
      } catch (err) {
        this.isSending = false;
        this.$Toast.danger(err.message);
      }
    }
  }
};
</script>
