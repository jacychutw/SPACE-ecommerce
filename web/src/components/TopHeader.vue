<template>
  <div>
    <div class="login-cart mt-3">
      <span v-if="loggedIn" class="mr-3"
        >Hi! {{ username }}
        <!-- <v-icon v-if="checkEmpty()" @click="toShoppingCart" left style="color: #526161"> -->
        <v-icon @click="toShoppingCart" left style="color: #526161">
          mdi-cart-outline
        </v-icon>
        <!-- <v-icon v-else @click="toShoppingCart" left style="color: #526161">
          mdi-cart
        </v-icon> -->
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
      products: [],
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
    this.readData();
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
    async readData() {
      let user = firebase.auth().currentUser;
      //let username = user.displayName;
      if(user) {
        this.useremail = user.email;
        const dbGetUser = firebase
          .firestore()
          .collection("userdata")
          .where("email", "==", this.useremail);
        await dbGetUser.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let num = doc.data().price.replace(/^.*?(\d+).*/, "$1");
            let eachsum = num * doc.data().count;
            this.sumnumber += parseInt(eachsum);
            const newData = { ...doc.data(), eachsum: "NT$ " + eachsum };
            this.products.push(newData);
          });
        });
      }
      //this.checkEmpty();
    },
    // checkEmpty() {
    //   if (this.products.length == 0) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
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
