import ApiService from '@/services/ApiService';
import UtilityService from '@/services/UtilityService';
import { Storage } from 'aws-amplify';
import config from '@/aws-exports';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

export default {
  namespaced: true,
  state: {
    categories: [],
    category: null,
    downloads: [],
    download: null,
    images: [],
    image: null,
    thumbnails: [],
    thumbnail: null,
  },
  getters: {},
  mutations: {
    set(state, { key, value }) {
      state[key] = value;
    },
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

    async storeAndCreateDownload({ dispatch }, { downloadSource, downloadData }) {
      if (!downloadSource) return;
      const uuid = UtilityService.getUUID();
      const file = downloadSource;
      const filenameArray = [...file.name.split('.')];
      const extension = filenameArray.pop();
      const filename = UtilityService.slugify(filenameArray.join('-'));
      const { type: mimeType } = file;
      const key = `downloads/${filename}_${uuid}.${extension}`;
      const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;

      downloadData.source = url;

      await Storage.put(key, file, { contentType: mimeType });
      return await dispatch('createImage', imageData);
    },

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

    async storeAndCreateImages({ dispatch }, { imageSources, imageData }) {
      const images = [];

      for (let i = 0; i < imageSources.length; i++) {
        if (!imageSources[i]) continue;
        const uuid = UtilityService.getUUID();
        const filename = UtilityService.slugify(imageData.title);
        const file = imageSources[i].file;
        const extension = [...file.name.split('.')].pop();
        const { type: mimeType } = file;
        const key = `images/${filename}_${uuid}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;

        imageData.source = url;
        imageData.order = i;

        await Storage.put(key, file, { contentType: mimeType });
        images.push(await dispatch('createImage', imageData));
      }

      return images;
    },

    async listImages({ dispatch }) {
      return dispatch('get', { key: 'images', query: 'listImages' });
    },

    async getImage({ dispatch }, id) {
      return dispatch('find', { key: 'image', query: 'getImage', uid: { id } });
    },

    async createImage({ dispatch }, input) {
      return dispatch('post', { key: 'image', mutation: 'createImage', input });
    },

    async updateImage({ dispatch }, input) {
      return dispatch('put', { key: 'image', mutation: 'updateImage', input });
    },

    async deleteImage({ dispatch }, input) {
      return dispatch('destroy', { key: 'image', mutation: 'deleteImage', input });
    },

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
    },
  },
};
