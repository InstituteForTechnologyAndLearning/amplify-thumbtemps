<template>
  <div class="flex relative z-10">
    <div
      v-for="(file, i) in files"
      :key="i"
      class="rounded overflow-hidden img-overlap cursor-pointer"
      :data-index="i + 1"
      :style="{ width: `calc(100% - ${100 * (files.length - 1)}px`, zIndex: files.length - i, left: 100 * i + 'px' }"
      @click.stop.prevent="moveToFirst(file, i)"
    >
      <img :src="file.preview">
      <button
        @click.stop.prevent="remove(file, i)"
        class="img-overlap-delete"
        type="danger"
        size="mini"
        auto
      >&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    files: Array
  },

  methods: {
    moveToFirst(file, index) {
      const files = [...this.files];
      files.splice(index, 1);
      const reordered = [file, ...files];
      this.$emit("change", reordered);
    },

    remove(file, index) {
      const files = [...this.files];
      files.splice(index, 1);
      this.$emit("change", files);
    }
  }
};
</script>

<style lang="scss" scoped>
.img-overlap {
  position: absolute;
  top: 0;
  left: 100px;

  .img-overlap-delete,
  &:after {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: theme("borderRadius.full");
    color: theme("colors.white");
    position: absolute;
    top: theme("padding.3");
  }

  .img-overlap-delete {
    background: theme("colors.magenta");
    pointer-events: none;
    opacity: 0;
    line-height: 1;
    transition: opacity 300ms ease;
    right: theme("padding.3");
  }

  &:first-of-type {
    position: relative;
  }

  &:after {
    content: attr(data-index);
    background: theme("colors.drak");
    right: calc(80px - theme("padding.3"));
  }

  &:first-of-type:after {
    left: theme("padding.3");
  }

  &:hover {
    .img-overlap-delete {
      pointer-events: auto;
      opacity: 1;
    }
  }
}
</style>
