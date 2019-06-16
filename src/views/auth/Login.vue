<template>
  <div class="w-full max-w-sm mx-auto mt-24">
    <h1 class="text-3xl mb-3 font-bold">Login</h1>
    <SignIn/>
  </div>
</template>

<script>
import SignIn from "@/components/auth/SignIn";

export default {
  components: {
    SignIn
  }
};
</script>

