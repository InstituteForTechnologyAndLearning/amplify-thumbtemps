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
        <small v-if="form.username.error" class="text-red-500">{{ form.username.error }}</small>
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
        <small v-if="form.email.error" class="text-red-500">{{ form.email.error }}</small>
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
        <small v-if="form.password.error" class="text-red-500">{{ form.password.error }}</small>
      </div>
      <zi-button class="mr-6" type="primary" :loading="isSending" auto>Sign Up</zi-button>
      <router-link to="login">Have an account? Login</router-link>
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
      if (!this.validate()) return;

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
    },

    validate() {
      let isUsernameValid = this.validateUsername();
      let isEmailValid = this.validateEmail();
      let isPasswordValid = this.validatePassword();
      return isUsernameValid && isEmailValid && isPasswordValid;
    },

    validateUsername() {
      let username = this.form.username.value;
      if (!username.length) {
        this.form.username.error = "Username is required";
        return false;
      }
      this.form.username.error = null;
      return true;
    },

    validateEmail() {
      if (!/\S+@\S+\.\S+/.test(this.form.email.value)) {
        this.form.email.error = "Email must be valid";
        return false;
      }
      this.form.email.error = null;
      return true;
    },

    validatePassword() {
      let password = this.form.password.value;
      let digitRegexp = new RegExp("(?=.*?[0-9])", "g");
      let upperRegexp = new RegExp("(?=.*?[A-Z])", "g");
      let lowerRegexp = new RegExp("(?=.*?[a-z])", "g");
      let specialRegexp = new RegExp("(?=.*?[#?!@$%^&*-])", "g");

      if (password.length < 6) {
        this.form.password.error = "Password must be at least 6 characters";
        return false;
        // } else if (!digitRegexp.test(password)) {
        // this.form.password.error = "Password must include 1 number";
        // return false;
      } else if (!specialRegexp.test(password)) {
        this.form.password.error = "Password must include 1 special character";
        return false;
      } else if (!upperRegexp.test(password)) {
        this.form.password.error =
          "Password must contain 1 uppercase character";
        return false;
      } else if (!lowerRegexp.test(password)) {
        this.form.password.error =
          "Password must contain 1 lowercase character";
        return false;
      } else {
        this.form.password.error = null;
        return true;
      }
    }
  }
};
</script>
