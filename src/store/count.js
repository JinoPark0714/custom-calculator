import { createStore } from "vuex";

export default createStore({
  state : {
    count : 0
  },
  mutations: {
    // 상태 변경 함수
    increment (state) {
      state.count++
    }
  },
  actions: {
    // 비동기 처리 함수
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  getters: {
    // 게터 함수
    doubleCount (state) {
      return state.count * 2
    }
  }
});