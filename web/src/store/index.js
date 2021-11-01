import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //products: [],
  },
  mutations: {
    // UPDATE_PRODUCTS: (state, payload) => {
    //   state.products = payload;
    // },
  },
  actions: {
    // async queryProjects({ commit }, params) {
    //   const response = await
    //   //取firbase 資料
    //   commit("UPDATE_PRODUCTS", response.data);
    // }
  },
  modules: {},
  // getters: {
  //   getProducts(state) {
  //     return state.products;
  //   },
  // },
});
