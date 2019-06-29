<template>
  <div class="w-full">
    <input
      id="file"
      name="file"
      :class="`file-drop ${fileIsHovered ? 'is-hovered' : ''}`"
      type="file"
      ref="thumbnail"
      :value="value"
      @change="addFile"
      multiple
    >
    <label
      for="file"
      @dragover.prevent
      @drop.prevent="handleDrop"
      @dragenter="fileIsHovered = true"
      @dragleave="fileIsHovered = false"
    >{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "Select or Drop File(s)"
    },
    value: String
  },

  data: () => ({
    fileIsHovered: false
  }),

  methods: {
    addFile(event) {
      const files = event.target.files;
      this.$emit("add", files);
    },

    handleDrop(event) {
      const files = event.dataTransfer.files;

      this.$emit("add", files);
      this.fileIsHovered = false;
    }
  }
};
</script>

<style lang="scss" scoped>
input[type="file"].file {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  + label {
    display: inline-block;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-radius: theme("borderRadius.lg");

    * {
      pointer-events: none;
      transition: none;
    }

    i {
      padding-right: theme("padding.3");
      font-size: 1rem;

      &:before {
        position: relative;
        top: 3px;
      }
    }
  }
}

input[type="file"].file-drop {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  + label {
    padding: theme("padding.6") theme("padding.3");
    width: 100%;
    color: theme("colors.gray-5");
    text-align: center;
    line-height: 1;
    font-weight: normal;
    border: 1px dashed theme("colors.gray-5");
    border-radius: theme("borderRadius.default");
    display: flex;
    align-content: center;
    justify-content: center;
    cursor: pointer;
    transition: color 300ms ease, border-color 300ms ease;

    * {
      pointer-events: none;
      transition: none;
    }

    i {
      padding-right: theme("padding.3");
      font-size: 1rem;

      &:before {
        position: relative;
        top: 3px;
      }
    }
  }

  &:focus + label,
  &:hover + label,
  &.is-hovered + label,
  + label:hover {
    color: theme("colors.blue");
    border-color: theme("colors.blue");
  }
}
</style>

