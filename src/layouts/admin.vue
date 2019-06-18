<template>
  <div>
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/admin/Navigation";

export default {
  components: {
    Navigation
  }
};
</script>
