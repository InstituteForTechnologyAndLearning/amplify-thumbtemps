<template>
  <div class="px-12 pt-6">
    <div v-if="status === statuses.add || status === statuses.edit">
      <h1>Adding/Editing</h1>
    </div>
    <div v-else>
      <div class="flex justify-between">
        <h1 class="pb-3">Thumbnails</h1>
        <router-link to="/admin/thumbnails/create">
          <zi-button type="primary">Create New</zi-button>
        </router-link>
      </div>

      <zi-table :data="$store.state.api.thumbnails" empty-text="No thumbnails :(">
        <zi-table-column label="Title">
          <template slot-scope="scope">
            <div class="flex items-center py-3">
              <img class="w-24 mr-6" :src="scope.row.source" />
              <div class="truncate">{{ scope.row.title }}</div>
            </div>
          </template>
        </zi-table-column>
        <zi-table-column label="Publisher" width="100">
          <template slot-scope="scope">
            <div class="truncate">{{ scope.row.publisher }}</div>
          </template>
        </zi-table-column>
        <zi-table-column label=" " width="125">
          <template slot-scope="scope">
            <div class="flex justify-end">
              <a @click="edit(scope.row, scope.$index)" class="inline-block mr-3">Edit</a>
              <a @click="remove(scope.row, scope.$index)" class="text-magenta inline-block">Delete</a>
            </div>
          </template>
        </zi-table-column>
      </zi-table>
    </div>
  </div>
</template>

<script>
import NewIcon from "@zeit-ui/vue-icons/packages/new";

const statuses = {
  view: "VIEWING",
  edit: "EDITING",
  add: "ADDING"
};

export default {
  layout: "admin",
  middleware: ["admin"],

  async asyncData({ store }) {
    try {
      await store.cache.dispatch("api/listThumbnails");
    } catch (err) {
      store.dispatch("alert/danger", "Failed to load thumbnails");
    }
  },

  components: {
    NewIcon
  },

  data: () => ({
    statuses: statuses,
    status: statuses.view
  })
};
</script>
