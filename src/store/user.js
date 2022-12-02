export default {
  namespaced: true, // 코드가 많아질수록 중복도 생겨나기 마련, 이름을 통해서 구분하고 싶다면 namespaced
  // store.indx.js의 modules에 기재한 object의 key이름이 namespaced가 됨

  state: {
    id: "ang",
    name: "gimo",
  },

  getters: {
    id(state) {
      return state.id;
    },
    name(state) {
      return state.name;
    },
  },
  mutations: {},
  actions: {},
};
