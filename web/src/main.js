import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Vf33p5fc0HzyljoA8pGcdYVgEvw6Vf4",
  authDomain: "ecommerce-e4d15.firebaseapp.com",
  projectId: "ecommerce-e4d15",
  storageBucket: "ecommerce-e4d15.appspot.com",
  messagingSenderId: "1078838774860",
  appId: "1:1078838774860:web:51145f5b63820c70dff8e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const projectAuth = firebase.auth();
// const projectFirestore = firebase.firestore();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export { projectAuth, projectFirestore, timestamp }

//這是一組的
// new Vue({
//   router,
//   store,
//   vuetify,
//   render: (h) => h(App),
// }).$mount("#app");
//這是一組的

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
