<template>
  <div class="flex relative z-10">
    <div
      v-for="(preview, i) in previews"
      :key="i"
      class="rounded overflow-hidden img-overlap"
      :data-index="i + 1"
      :style="{ zIndex: previews.length - i }"
    >
      <img :src="preview">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    previews: Array
  }
};
</script>

<style lang="scss" scoped>
.img-overlap {
  width: calc(100% - 100px);
  position: absolute;
  top: 0;
  left: 100px;

  &:first-of-type {
    position: static;
  }

  &:after {
    content: attr(data-index);
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: theme("borderRadius.full");
    background: theme("colors.drak");
    color: theme("colors.white");
    position: absolute;
    top: theme("padding.3");
    right: calc(80px - theme("padding.3"));
  }

  &:first-of-type:after {
    left: theme("padding.3");
  }
}
</style>
