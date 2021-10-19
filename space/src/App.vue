<template>
  <v-app>
    <div class="logo">
      <img class="logo-img" src="./assets/space.png" alt="" />
    </div>

    <div class="nav">
      <ul class="navbar-list">
        <li class="navbar-item">
          <router-link to="/all-products">所有商品</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/featured-products">精選商品</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/about">關於我們</router-link>
        </li>
      </ul>
    </div>
    <router-view />

    <v-divider></v-divider>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: { Footer },
};
</script>

<style>
* {
  font-family: "Microsoft JhengHei";
}

a {
  text-decoration: none;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 30px;
}

.logo-img {
  width: 140px;
}

.nav {
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 16px;
}

.navbar-list {
  display: flex;
  flex-direction: row;
  list-style-type: none;
}

.navbar-item {
  padding-left: 16px;
  padding-right: 16px;
}

.v-application a {
  color: #647d7d !important;
}

.v-application a:hover {
  color: #2d4747 !important;
}


</style>
