import { createStore } from "vuex";

export default createStore({
  state: {
    loggedIn: false,
  },
  mutations: {
    setLoggedIn(state) {
      state.loggedIn = true;
    }
  }
});
