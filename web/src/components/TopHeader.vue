<template>
  <div>
    <div class="login-cart mt-3">
      <span v-if="loggedIn" class="mr-3"
        >Hi! {{ username }}
        <v-icon @click="toShoppingCart" left style="color: #526161">
          mdi-cart
        </v-icon>
        <v-icon @click="signOut" left style="color: #526161">
          mdi-logout
        </v-icon>
      </span>
      <span @click="toSignIn" v-else class="mr-4" style="cursor: pointer"
        ><v-icon right style="color: #526161"> mdi-account-circle</v-icon
        >會員登入</span
      >
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  data() {
    return {
      username: "",
      loggedIn: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.username = user.displayName;
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.username = user.displayName;
      }
    });
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        this.$router.replace({ name: "Welcome" });
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    toSignIn() {
      this.$router.push({ name: "Welcome" });
    },
    toShoppingCart() {
      this.$router.push({ name: "ShoppingCart" });
    },
  },
};
</script>

<style scoped>
.login-cart {
  display: flex;
  flex-direction: wrap;
  justify-content: flex-end;
  width: 100%;
  font-size: 14px;
  color: #526161;
}

.login-cart .v-icon.v-icon::after {
  background-color: transparent !important;
}
</style>
