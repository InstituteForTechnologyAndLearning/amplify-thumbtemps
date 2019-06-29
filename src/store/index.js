import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import alert from './alert';
import api from './api';
import createCache from 'vuex-cache';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createCache()],
  modules: {
    user,
    alert,
    api,
  },
});
