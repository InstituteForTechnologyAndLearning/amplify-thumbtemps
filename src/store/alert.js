export default {
  namespaced: true,
  state: {
    current: null
  },
  getters: {},
  mutations: {
    set(state, alert) {
      state.current = alert;
    },
    clear(state) {
      state.current = null;
    }
  },
  actions: {
    add({ commit }, { type = 'success', text }) {
      commit('set', { type, text });
    },
    get({ commit, state }) {
      let alert = state.current;
      commit('clear');
      return alert;
    }
  }
};
