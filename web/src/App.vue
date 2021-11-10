<template>
  <v-app>
    <TopHeader />

    <div class="logo">
      <img @click="toHome" class="logo-img" src="./assets/space.svg" alt="space" />
    </div>

    <div class="nav">
      <ul class="navbar-list">
        <li class="navbar-item">
          <router-link to="/all-products">所有商品</router-link>
        </li>
        <li class="navbar-item">
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="transparent"
                v-bind="attrs"
                v-on="on"
                small
                depressed
                :ripple="false"
              >
                精選商品
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <router-link to="/chairs">椅子</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link to="/lights">燈具</router-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

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
import TopHeader from "./components/TopHeader.vue";

export default {
  name: "App",

  data: () => ({
  }),
  components: { Footer, TopHeader },
  methods: {
    toHome() {
      this.$router.push({ name: "Home" });
    }
  }
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
  cursor: pointer;
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

.v-application ul,
.v-application ol {
  padding-left: 0px;
}

.v-application a {
  color: #647d7d !important;
}

.v-application a:hover {
  color: #2d4747 !important;
}

.v-btn__content {
  color: #647d7d !important;
  font-size: 16px;
  margin-bottom: 5px;
}

.v-application p {
  margin-bottom: 0px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
