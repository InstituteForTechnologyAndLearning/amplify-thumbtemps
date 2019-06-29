import ApiService from '@/services/ApiService';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

export default {
  namespaced: true,
  state: {
    categories: [],
    category: null,
  },
  getters: {},
  mutations: {
    set(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
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
    },
  },
};
