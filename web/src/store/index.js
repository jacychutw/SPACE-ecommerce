import Vue from "vue";
import Vuex from "vuex";
import spinner from "./modules/spinner.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    spinner: spinner,
  }
});
