import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  // 상태관리 라이브러리(전역적으로 사용되는 것들)
  state: {
    count: 0,
    mapCount: 0,
    list: [],
  },
  getters: {
    // computed와 유사, state를 한번 감싸서(?) 보내줌
    formatCnt(state) {
      return String(state.count).padStart(2, "0");
    },
    formatMapCnt(state) {
      return String(state.mapCount).padStart(2, "0");
    },

    list(state) {
      return state.list;
    },
  },
  mutations: {
    // state를 변경하는 용도
    // 동기방식으로 state를 처리해야 함
    // 비동기 처리가 가능은 하지만, 추적이 어려움 그러니 동기만 사용
    changeMapCnt(state, value) {
      state.mapCount += value;
    },

    setList(state, list) {
      state.list = list;
    },
  },
  actions: {
    // 비동기처리, mutations를 commit 할 수 있음
    changeMapCnt(context, value) {
      context.commit("changeMapCnt", value);
    },

    getList(context) {
      axios({
        url: "https://reqres.in/api/users",
        method: "GET",
        params: {
          page: 1,
        },
      }).then((response) => {
        setTimeout(() => {
          context.commit("setList", response.data.data);
        }, 2000);
      });
    },
  },
  modules: {},
});
