import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    isLogged: false,
    isAdmin: false,
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    CART_PRODUCTS(state, payload) {
      state.cart = payload;
    },
    SET_USERS(state, payload) {
      state.user = payload;
    },
    DELETE_PRODUCT(state, payload) {
      state.cart.splice(payload, 1);
    },
    USER_AUTH(state) {
      state.isLogged = !state.isLogged;
    },
    ADMIN_AUTH(state) {
      state.isAdmin = !state.isAdmin;
    },
  },
  actions: {
    setProducts({ commit }, payload) {
      commit("SET_PRODUCTS", payload);
    },
    setCart({ commit }, payload) {
      commit("CART_PRODUCTS", payload);
    },
    setUser({ commit }, payload) {
      commit("SET_USERS", payload);
    },
    deleteProduct({ commit }, payload) {
      commit("DELETE_PRODUCT", payload);
    },
    setAdminAuth({ commit }) {
      commit("ADMIN_AUTH");
    },
    setUserAuth({ commit }) {
      commit("USER_AUTH");
    },
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    user: (state) => state.user,
    total: (state) => state.cart.reduce((acc, el) => (acc += el.price), 0),
  },
});
