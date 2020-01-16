import Vue from "vue";
import Vuex from "vuex";
import api from "@/services/api";

Vue.use(Vuex);

const authModule = {
  strict: process.env.NODE_ENV !== "production",
  namespaced: true,
  state: {
    username: "",
    isLoggedIn: false
  },
  getters: {
    username: state => state.username,
    isLoggedIn: state => state.isLoggedIn
  },
  mutations: {
    set(state, payload) {
      state.username = payload.user.username;
      state.isLoggedIn = true;
    },
    clear(state) {
      state.username = "";
      state.isLoggedIn = false;
    }
  },
  actions: {
    /**
     * ログイン
     */
    login(context, payload) {
      return api
        .post("/auth/jwt/create/", {
          username: payload.username,
          password: payload.password
        })
        .then(response => {
          localStorage.setItem("access", response.data.access);
          return context.dispatch("reload").then(user => user);
        });
    },
    /**
     * ログアウト
     */
    logout(context) {
      localStorage.removeItem("access");
      context.commit("clear");
    },
    reload(context) {
      return api.get("/auth/users/me/").then(response => {
        const user = response.data;
        context.commit("set", { user: user });
        return user;
      });
    }
  }
};
