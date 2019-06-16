<template>
  <div class="flex">
    <div class="w-1/2">
      <SignUp/>
    </div>
    <div class="w-1/2">
      <SignIn/>
    </div>
  </div>
</template>

<script>
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";

export default {
  components: {
    SignIn,
    SignUp
  }
};
</script>
