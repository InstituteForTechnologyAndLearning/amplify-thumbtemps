import ApiService from '@/services/ApiService';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async listCategories({}) {
      const { data } = await ApiService.get(queries.listCategorys);
      return data.listCategorys.items;
    },

    async getCategory({}, id) {
      const { data } = await ApiService.find(queries.getCategory, { id });
      return data.getCategory;
    },

    async createCategory({}, input) {
      const { data } = await ApiService.post(mutations.createCategory, { input });
      return data.createCategory;
    }
  }
};
