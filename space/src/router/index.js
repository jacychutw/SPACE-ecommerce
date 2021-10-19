import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AllProducts from "../views/AllProducts.vue";
import FeaturedProducts from "../views/FeaturedProducts.vue";
import AboutUs from "../views/AboutUs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/all-products",
    name: "AllProducts",
    component: AllProducts,
  },
  {
    path: "/featured-products",
    name: "FeaturedProducts",
    component: FeaturedProducts,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
