import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },

  mutations: {
    CART_PRODUCTS(state, payload) {
      state.products = payload;
    },
  },

  actions: {
    getProducts({ commit }, payload) {
      commit("CART_PRODUCTS", payload);
    },
  },

  modules: {},

  getters: {
    product: (state) => state.products,
  },
});
