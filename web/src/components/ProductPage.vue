<template>
  <div class="all-products">
    <v-divider></v-divider>
    <div class="page-title mt-8">
      <h2>精選商品</h2>
    </div>

    <v-container class="white">
      <div class="mt-4 mb-4">
        <p v-if="checkIfChair">所有商品>椅子>{{ title }}</p>
        <p v-else>所有商品>燈具>{{ title }}</p>
      </div>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="pa-2" outlined tile>
            <img class="card-img" :src="productimg" :alt="productimg" />
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <h4 class="product-title">{{ title }}</h4>
          <p class="product-price mt-5">{{ price }}</p>
          <div style="background-color: #e3e6e6; padding: 10px">
            數量
            <span class="float-right">
              <v-icon
                left
                @click="decreaseCounter(1)"
                :style="{ color: decreaseActiveColor }"
              >
                mdi-minus-circle</v-icon
              >
              {{ counter }}
              <v-icon
                right
                @click="increaseCounter(9)"
                :style="{ color: increaseActiveColor }"
              >
                mdi-plus-circle</v-icon
              >
            </span>
          </div>
          <div class="two-buttons">
            <span @click="addToCart" class="buy-button">加入購物車</span>
            <span @click="directToCart" class="buy-button">立即購買</span>
          </div>
          <div v-if="numberMoreThanNine()" style="color: #915233">
            若需要大量訂購，請直接來電聯繫。
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>[商品描述]</p>
          <p class="mb-3">
            {{ info }}
          </p>
          <span
            @click="toCheckPage"
            class="check-others"
            style="color: dimgray; text-decoration: underline"
            >Check Others</span
          >
        </v-col>
      </v-row>
    </v-container>

    <div class="mt-8 mb-8">
      <img class="threedots-center" src="../assets/threedots.png" alt="threedots" />
    </div>

    <!-- ====== check-dialog ====== -->
    <check-dialog :openDialog="openCheckDialog">
      <template slot="content">
        <span v-if="alreadyLogin" style="text-align: center"
          >已成功加入購物車！</span
        >
        <span v-else style="text-align: center">請先登入會員再進行操作！</span>
      </template>
      <template slot="action">
        <v-btn
          depressed
          style="
            padding: 24px 20px 20px 20px;
            background-color: rgb(227, 230, 230);
          "
          @click="openCheckDialog = false; reRenderCheckCart()"
        >
          確定
        </v-btn>
      </template>
    </check-dialog>
    <!-- ====== end of check-dialog ====== -->
  </div>
</template>

<script>
import Info from "../assets/info.json";
import CheckDialog from "./CheckDialog";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      counter: 1,
      id: this.$route.params.itemid,
      alreadyLogin: false,
      openCheckDialog: false,
      checkIfChair: true,
      decreaseActiveColor: "lightgray",
      increaseActiveColor: "#526161",
    };
  },
  components: {
    "check-dialog": CheckDialog,
  },
  computed: {
    title() {
      let item = Info[this.id];
      //const { item01 } = Info;
      return item["title"];
    },
    price() {
      let item = Info[this.id];
      return item["price"];
    },
    info() {
      let item = Info[this.id];
      return item["description"];
    },
    productimg() {
      return require("../assets/elements/" + this.id + ".jpg");
    },
  },
  mounted() {
    // 判斷是椅子還是燈具
    if (this.id[0] == "c") {
      this.checkIfChair = true;
    } else {
      this.checkIfChair = false;
    }
  },
  methods: {
    toCheckPage() {
      if (this.id[0] == "c") {
        this.$router.push({ name: "Chairs" });
      } else {
        this.$router.push({ name: "Lights" });
      }
    },
    increaseCounter(increaseLimit) {
      if (this.counter < increaseLimit) this.counter++;
      if (this.counter == increaseLimit) {
        this.increaseActiveColor = "lightgray";
      } else {
        this.increaseActiveColor = "#526161";
        this.decreaseActiveColor = "#526161";
      }
    },
    decreaseCounter(decreaseLimit) {
      if (this.counter > decreaseLimit) this.counter--;
      if (this.counter == decreaseLimit) {
        this.decreaseActiveColor = "lightgray";
      } else {
        this.increaseActiveColor = "#526161";
        this.decreaseActiveColor = "#526161";
      }
    },
    addToCart() {
      //確認有無登入
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          //已經登入
          const displayName = user.displayName;
          const userEmail = user.email;
          this.alreadyLogin = true;
          this.openCheckDialog = true;
          firebase
            .firestore()
            .collection("userdata")
            .where("email", "==", userEmail)
            .where("title", "==", this.title)
            .get()
            .then((querySnapshot) => {
              if (querySnapshot.empty) {
                const item = {
                  user: displayName,
                  email: userEmail,
                  img: this.id,
                  title: this.title,
                  count: this.counter,
                  price: this.price,
                };
                return firebase.firestore().collection("userdata").add(item);
              } else if (querySnapshot.size === 1) {
                querySnapshot.forEach((doc) => {
                  firebase
                    .firestore()
                    .collection("userdata")
                    .doc(doc.id)
                    .update({
                      count: firebase.firestore.FieldValue.increment(
                        this.counter
                      ),
                    });
                });
              }
            });
          this.clearSelect();
        } else {
          //還沒登入
          this.alreadyLogin = false;
          this.openCheckDialog = true;
        }
      });
    },
    clearSelect() {
      setTimeout(() => {
        this.counter = 1;
        this.decreaseActiveColor = "lightgray";
      }, 500);
    },
    directToCart() {
      //確認有無登入
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          //已經登入
          const displayName = user.displayName;
          const userEmail = user.email;
          this.alreadyLogin = true;
          //this.openCheckDialog = true;
          firebase
            .firestore()
            .collection("userdata")
            .where("email", "==", userEmail)
            .where("title", "==", this.title)
            .get()
            .then((querySnapshot) => {
              if (querySnapshot.empty) {
                const item = {
                  user: displayName,
                  email: userEmail,
                  img: this.id,
                  title: this.title,
                  count: this.counter,
                  price: this.price,
                };
                return firebase.firestore().collection("userdata").add(item);
              } else if (querySnapshot.size === 1) {
                querySnapshot.forEach((doc) => {
                  firebase
                    .firestore()
                    .collection("userdata")
                    .doc(doc.id)
                    .update({
                      count: firebase.firestore.FieldValue.increment(
                        this.counter
                      ),
                    });
                });
              }
            });
          this.reRender();
        } else {
          //還沒登入
          this.alreadyLogin = false;
          this.openCheckDialog = true;
        }
      });
    },
    reRender() {
      setTimeout(() => {
        this.$router.push({ name: "ShoppingCart" });
      }, 300);
    },
    reRenderCheckCart() {
      setTimeout(() => {
        this.$router.go();
      }, 300);
    },
    numberMoreThanNine() {
      if (this.counter > 8) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.page-title {
  display: flex;
  justify-content: center;
  color: dimgray;
}

.threedots-center {
  display: block;
  width: 60px;
  margin: auto;
}

.product-title {
  font-size: 20px;
  color: #526161;
}

.product-price {
  font-size: 14px;
  margin-bottom: 20px;
}

.two-buttons {
  display: inline-block;
  margin: 20px 0px;
}

.buy-button {
  background-color: #526161;
  color: white;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.check-others {
  cursor: pointer;
}
</style>
