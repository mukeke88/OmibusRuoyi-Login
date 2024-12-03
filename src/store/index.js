import { createStore } from "vuex";

const store = createStore({
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
  },
  actions: {
    async Login({ commit }, loginForm) {
      // Simulate an API call for login
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (loginForm.username === "admin" && loginForm.password === "admin123") {
            commit("setToken", "dummy-token");
            resolve();
          } else {
            reject(new Error("Invalid credentials"));
          }
        }, 1000);
      });
    },
  },
});

export default store;