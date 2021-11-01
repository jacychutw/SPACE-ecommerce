import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AllProducts from "../views/AllProducts.vue";
import Chairs from "../views/Chairs.vue";
import Lights from "../views/Lights.vue";
import AboutUs from "../views/AboutUs.vue";
import Payment from "../views/Payment.vue";
import Logistics from "../views/Logistics.vue";
// import ProductChair from "../components/ProductChair.vue";
// import ProductLight from "../components/ProductLight.vue";
import ProductPage from "../components/ProductPage.vue";
import Welcome from "../views/Welcome.vue";
import ShoppingCart from "../views/ShoppingCart.vue";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/shoppingcart",
    name: "ShoppingCart",
    component: ShoppingCart,
    meta: { reauiresAuth: true },
  },
  {
    path: "/all-products",
    name: "AllProducts",
    component: AllProducts,
  },
  {
    path: "/chairs",
    name: "Chairs",
    component: Chairs,
  },
  {
    path: "/chairs/:itemid",
    name: "Chair",
    component: ProductPage,
  },
  {
    path: "/lights",
    name: "Lights",
    component: Lights,
  },
  {
    path: "/lights/:itemid",
    name: "Light",
    component: ProductPage,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/logistics",
    name: "Logistics",
    component: Logistics,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  //到新的一頁 會自動滑到最上面
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.reauiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/welcome");
  } else {
    next();
  }
});

export default router;
