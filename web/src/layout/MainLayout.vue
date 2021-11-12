<template>
  <v-app>
    <TopHeader />

    <div class="logo">
      <img @click="toHome" class="logo-img" src="../assets/space.svg" alt="space" />
    </div>

    <div class="nav">
      <ul class="navbar-list">
        <li class="navbar-item" style="padding-top: 2px;">
          <router-link to="/all-products">所有商品</router-link>
        </li>
        <li class="navbar-item special-items">
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="transparent"
                v-bind="attrs"
                v-on="on"
                small
                depressed
                :ripple="false"
                style="padding-top: 5px;"
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
        <li class="navbar-item" style="padding-top: 2px;">
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
import Footer from "../components/Footer.vue";
import TopHeader from "../components/TopHeader.vue";

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

<style scoped>
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
</style>
