import { createStore } from "vuex";

export default createStore({
  state: {
    cliStatus: 0,
    path: [
      {
        status: 0,
        path: "/index",
        name: "Index",
      },
      {
        status: 1,
        path: "/first",
        name: "First",
      },
      {
        status: 2,
        path: "/second",
        name: "Second",
      },
      {
        status: 3,
        path: "/third",
        name: "Third",
      },
      {
        status: 4,
        path: "/fourth",
        name: "Fourth",
      },
      {
        status: 5,
        path: "/fifth",
        name: "Fifth",
      },
    ],
  },
  mutations: {
    inCli(state, payload) {
      state.cliStatus = payload;
    },
  },
  actions: {},
  modules: {},
});
