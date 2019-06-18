import { Auth } from 'aws-amplify';

export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    current: null
  },
  getters: {
    groups(state) {
      if (!state.current) return [];
      return state.current.signInUserSession.accessToken.payload['cognito:groups'] || [];
    }
  },
  mutations: {
    set(state, user) {
      state.isAuthenticated = !!user;
      state.current = user;
    }
  },
  actions: {
    async load({ commit }) {
      try {
        const user = await Auth.currentAuthenticatedUser();
        commit('set', user);
        return user;
      } catch (error) {
        commit('set', null);
      }
    },

    async logout({ commit }) {
      commit('set', null);
    }
  }
};
