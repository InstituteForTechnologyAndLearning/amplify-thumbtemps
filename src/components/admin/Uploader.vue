<template>
  <div class="w-full">
    <input
      id="file"
      name="file"
      :class="`file-drop ${fileIsHovered ? 'is-hovered' : ''}`"
      type="file"
      ref="thumbnail"
      :value="value"
      @change="handleAdd"
      multiple
    >
    <label
      for="file"
      @dragover.prevent
      @drop.prevent="handleDrop"
      @dragenter="fileIsHovered = true"
      @dragleave="fileIsHovered = false"
    >{{ placeholder }}</label>
    <zi-note v-if="invalidFiles.length" type="error" class="mt-3">
      <dl v-for="invalid in invalidFiles" :key="invalid.file.name" class="text-label">
        <dt>{{ invalid.file.name }}</dt>
        <dd v-for="error in invalid.errors" :key="error" class="pl-6 border-l">{{ error }}</dd>
      </dl>
    </zi-note>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "Select or Drop File(s)"
    },
    types: {
      type: Array,
      default: () => ["image/jpeg", "image/jpg", "image/png"]
    },
    maxSize: {
      type: Number,
      default: 60000
    },
    value: String
  },

  computed: {
    isImageType() {
      var imageValidations = this.types.filter(t => t.includes("image"));
      return imageValidations.length === this.types.length;
    }
  },

  data: () => ({
    fileIsHovered: false,
    invalidFiles: []
  }),

  methods: {
    async handleAdd(event) {
      await this.addFiles(event.target.files);
    },

    async handleDrop(event) {
      await this.addFiles(event.dataTransfer.files);
    },

    async addFiles(fileList) {
      const filesArray = this.normalizeFiles(fileList);
      const { valid, invalid } = this.validateFiles(filesArray);
      const files = this.isImageType ? await this.buildFiles(valid) : valid;
      console.log({ files });
      if (invalid.length) {
        this.$Toast.danger(
          `${invalid.length} of ${filesArray.length} file(s) were invalid`
        );
      }

      this.$emit("add", files);
    },

    normalizeFiles(files) {
      return Array.from(files);
    },

    validateFiles(files) {
      let validFiles = [];
      let invalidFiles = [];

      files.forEach(file => {
        let fileMb = this.getMegabytes(file);
        let isValidType = this.types.includes(file.type);
        let isValidSize = this.maxSize >= fileMb;

        isValidType && isValidSize
          ? validFiles.push(file)
          : invalidFiles.push({
              file,
              errors: [
                !isValidType
                  ? `File type ${file.type} is not of type ${this.types.join(
                      ", "
                    )}`
                  : null,
                !isValidSize
                  ? `File size ${fileMb}MB exceeds limit of ${this.maxSize}MB`
                  : null
              ].filter(Boolean)
            });
      });

      this.invalidFiles = invalidFiles;

      return {
        valid: validFiles,
        invalid: invalidFiles
      };
    },

    async buildFiles(files) {
      let built = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const preview = await this.getFilePreview(file);
        built.push({ file, preview });
      }

      return built;
    },

    getFilePreview(file) {
      return new Promise(resolve => {
        const reader = new FileReader();

        reader.onload = event => {
          const preview = event.target.result;
          resolve(preview);
        };

        reader.readAsDataURL(file);
      });
    },

    getMegabytes(file) {
      return file.size / 1000000;
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

