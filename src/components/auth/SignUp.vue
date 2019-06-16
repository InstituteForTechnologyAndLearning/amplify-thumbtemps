<template>
  <div>
    <form v-if="!isConfirming" @submit.prevent="signUp">
      <div class="w-full mb-4 text-gray-600">
        <label for="username" class="block">Username</label>
        <zi-input placeholder="username" v-model="form.username.value" name="username"/>
      </div>
      <div class="w-full mb-4 text-gray-600">
        <label for="email" class="block">Email</label>
        <zi-input type="email" placeholder="email" v-model="form.email.value" name="email"/>
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
      <zi-button type="primary" :loading="isSending">Sign Up</zi-button>
    </form>
    <form v-if="isConfirming" @submit.prevent="confirmSignUp">
      <div class="w-full mb-4 text-gray-600">
        <label for="username" class="block">Username</label>
        <zi-input placeholder="username" v-model="form.username.value" name="username"/>
      </div>
      <div class="w-full mb-4 text-gray-600">
        <label for="code" class="block">Confirmation Code</label>
        <zi-input placeholder="code" v-model="form.code.value" name="code"/>
      </div>
      <zi-button type="primary" :loading="isSending">Confirm</zi-button>
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
        this.$Toast.danger(err);
      }
    },

    async confirmSignUp() {
      try {
        this.isSending = true;
        const user = await AuthService.confirmSignUp(this.form.dispatch());
        this.form.clear();

        this.$Toast.success(`Welcoem to ThumbTemps, ${user.username}`);
        this.$router.push("home");

        this.isSending = false;
        this.isConfirming = false;
      } catch (err) {
        this.$Toast.danger(err);
      }
    }
  }
};
</script>
