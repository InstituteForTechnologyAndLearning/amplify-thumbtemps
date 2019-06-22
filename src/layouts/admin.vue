<template>
  <div class="admin">
    <div>
      <Navigation/>
    </div>
    <div>
      <router-view></router-view>
    </div>
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

<style lang="scss" scoped>
.admin {
  display: grid;
  grid-template-areas: "nav content";
  grid-template-columns: 300px 1fr;
}
</style>

