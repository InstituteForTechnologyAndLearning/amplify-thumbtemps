<template>
  <div class="home">
    <div class="hero-background">
      <div class="hero-container">
        <section class="hero bg-drak p-12">
          <div>
            <h1 class="text-white text-5xl">The Division</h1>
          </div>
          <img src="../assets/images/thumb-100-the-division-1.jpg">
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      user: state => state.user.current
    })
  }
};
</script>

<style lang="scss" scoped>
.hero-background {
  background: theme("colors.drak");
}

.hero-container {
  width: 100%;
  max-width: 1920px;
  background: theme("colors.drak");
  position: relative;
  margin: 0 auto;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: radial-gradient(transparent 60%, theme("colors.drak") 80%);
    top: 0;
    left: 0;
    z-index: 30;
  }

  &:after {
    content: "";
    width: 100%;
    height: 50%;
    position: absolute;
    background: linear-gradient(to top, theme("colors.drak"), transparent);
    bottom: 0;
    left: 0;
    z-index: 30;
  }
}

.hero {
  height: calc(100vh - 66px);
  position: relative;
  overflow: hidden;

  > div {
    position: relative;
    z-index: 30;
  }

  // &:before {
  //   content: "";
  //   width: 100%;
  //   height: 100%;
  //   background: linear-gradient(
  //     to top right,
  //     theme("colors.drak") 30%,
  //     transparent 60%
  //   );
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   z-index: 20;
  // }

  // &:after {
  //   content: "";
  //   width: 100%;
  //   height: 100%;
  //   background: linear-gradient(
  //     to right,
  //     theme("colors.drak") 40%,
  //     transparent 60%
  //   );
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   z-index: 10;
  // }

  img {
    min-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
