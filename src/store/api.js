import ApiService from '@/services/ApiService';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

export default {
  namespaced: true,
  state: {
    categories: [],
    category: null,
    downloads: [],
    download: null
  },
  getters: {},
  mutations: {
    set(state, { key, value }) {
      state[key] = value;
    }
  },
  actions: {
    /**
     *
     * Category Actions
     *
     */

    async listCategories({ dispatch }) {
      return dispatch('get', { key: 'categories', query: 'listCategorys' });
    },

    async getCategory({ dispatch }, id) {
      return dispatch('find', { key: 'category', query: 'getCategory', uid: { id } });
    },

    async createCategory({ dispatch }, input) {
      return dispatch('post', { key: 'category', mutation: 'createCategory', input });
    },

    async updateCategory({ dispatch }, input) {
      return dispatch('put', { key: 'category', mutation: 'updateCategory', input });
    },

    async deleteCategory({ dispatch }, input) {
      return dispatch('destroy', { key: 'category', mutation: 'deleteCategory', input });
    },

    /**
     *
     * Download Actions
     *
     */

    async listDownloads({ dispatch }) {
      return dispatch('get', { key: 'downloads', query: 'listDownloads' });
    },

    async getDownload({ dispatch }, id) {
      return dispatch('find', { key: 'download', query: 'getDownload', uid: { id } });
    },

    async createDownload({ dispatch }, input) {
      return dispatch('post', { key: 'download', mutation: 'createDownload', input });
    },

    async updateDownload({ dispatch }, input) {
      return dispatch('put', { key: 'download', mutation: 'updateDownload', input });
    },

    async deleteDownload({ dispatch }, input) {
      return dispatch('destroy', { key: 'download', mutation: 'deleteDownload', input });
    },

    /**
     *
     * Image Actions
     *
     */

    /**
     *
     * Keyword Actions
     *
     */

    /**
     *
     * Font Actions
     *
     */

    /**
     *
     * Thumbnail Actions
     *
     */

    /**
     *
     * Middleware Actions
     * The below actions integrate with the ApiService and handle the repetitive
     * drilldown and persisting of the returned data
     *
     */

    async get({ commit }, { key, query }) {
      const { data } = await ApiService.get(queries[query]);
      const value = data[query].items;
      commit('set', { key, value });
      return value;
    },

    async find({ commit }, { key, query, uid }) {
      const { data } = await ApiService.find(queries[query], uid);
      const value = data[query];
      commit('set', { key, value });
      return value;
    },

    async post({ commit }, { key, mutation, input }) {
      const { data } = await ApiService.post(mutations[mutation], { input });
      const value = data[mutation];
      commit('set', { key, value });
      return value;
    },

    async put({ commit }, { key, mutation, input }) {
      const { data } = await ApiService.put(mutations[mutation], { input });
      const value = data[mutation];
      commit('set', { key, value });
      return value;
    },

    async destroy({ commit }, { key, mutation, input }) {
      const { data } = await ApiService.destroy(mutations[mutation], { input });
      const value = data[mutation];
      commit('set', { key, value });
      return value;
    }
  }
};
