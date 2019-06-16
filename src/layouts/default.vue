<template>
  <Bus>
    <Navigation/>
    <router-view></router-view>
  </Bus>
</template>

<script>
import Bus from "@/components/Bus";
import Navigation from "@/components/Navigation";

export default {
  components: {
    Bus,
    Navigation
  }
};
</script>
