import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    key: "key123!123??",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    _isAuthenticated: (state) => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      // if(user !== null && user.hasOwnProperty("password")){
      //     delete user.password
      // }
      delete user?.password;
      return user;
    },
    key: (state) => state.key,
  },
});
