import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    cryptoKey: "key123!123??",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    onLogout(state) {
      state.user = null;
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
    _userLikes : state => state.user?.likes || [],
    _userBookmarks : state => state.user?.bookmarks || [],
    _currentUserId: (state) => state?.user?.id,
    cryptoKey: (state) => state.cryptoKey,
  },
  plugins: [createPersistedState()],
});
