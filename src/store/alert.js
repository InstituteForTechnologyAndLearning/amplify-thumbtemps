export default {
  namespaced: true,
  state: {
    current: null,
  },
  getters: {},
  mutations: {
    set(state, alert) {
      state.current = alert;
    },
    clear(state) {
      state.current = null;
    },
  },
  actions: {
    add({ commit }, { type = 'success', text }) {
      commit('set', { type, text });
    },
    danger({ commit }, text) {
      commit('set', { type: 'danger', text });
    },
    warning({ commit }, text) {
      commit('set', { type: 'warning', text });
    },
    success({ commit }, text) {
      commit('set', { type: 'success', text });
    },
    get({ commit, state }) {
      let alert = state.current;
      return alert;
    },
  },
};
