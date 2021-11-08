<template>
  <div class="all-products">
    <v-divider></v-divider>
    <div class="page-title mt-8 mb-8">
      <h2>購物車</h2>
    </div>
    <v-data-table
      v-if="isDataLoaded"
      class="mr-12 ml-12"
      :headers="shoppingHeaders"
      :items="products"
      hide-default-footer
      disable-pagination
      @input="(event) => inputAnnotation(event, props.item.img)"
    >
      <template v-slot:item.img="{ item }">
        <img
          class="pt-1"
          width="45"
          :src="`${publicPath}elements/${item.img}.jpg`"
        />
      </template>
      <template v-slot:item.eachsum="{ item }">
        {{ item.eachsum }}
      </template>
      <template v-slot:item.delete="{ item }">
        <v-icon
          color="#8DA69D"
          @click="
            deleteId = item.img;
            deleteTitle = item.title;
            openCheckDialog = true;
          "
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

    <div v-if="checkEmptyCart()" class="ml-16" style="color: #526161">
      您的購物車是空的，去逛逛吧！
    </div>

    <div class="float-right mt-8 mb-16 mr-16">
      <div>結帳金額：NT$ {{ sumnumber }}</div>

      <div class="float-right mt-8">
        <span class="checkcart-button">下一步</span>
      </div>
    </div>

    <!-- <form action="https://ccore.newebpay.com/MPG/mpg_gateway" method="post">
      <input type="text" name="MerchantID" value="MS125084583">
      <input type="text" name="RespondType" value="JSON">
      <input type="text" name="TradeInfo" value="eced1059f89ebd28a158f85f1ccedebac50df1239bb0f49ade0e3e5dec94a85bf986226fbf0733afb1dc6dfc5be67d23c15bd7b78f3280ea72e525f43cbe17dd3938c73a8abfddb898ae4b7c3dba18043396658a7a27208b1e29043bbe3aa46888bc16068080aa270db3a3d6911de498e585ad437710b9fcf5c00f3a9083b11e9b780a85d2d736c60b0ca3f332ca6e19828c480b5733c85a5a1056ec0884a7ce">
      <input type="text" name="TradeSha" value="3F868340EEEF5BEF92EDAAD7E3E840995C90A145E55F799AD9F11737F72BB467">
      <input type="text" name="TimeStamp" value="1635735933">
      <input type="text" name="Version" value="1.5">
      <input type="text" name="MerchantOrderNo" value="1635735933">
      <input type="text" name="Amt" value="1000">
      <input type="text" name="Email" value="jacy0303@gmail.com">
      <input type="text" name="ItemDesc" value="TEST">
      <button>SEND</button>
    </form> -->

    <!-- ====== delete-dialog ====== -->
    <check-dialog :openDialog="openCheckDialog">
      <template slot="content">
        <span style="text-align: center"
          >確定移除商品: {{ deleteTitle }}？</span
        >
      </template>
      <template slot="action">
        <v-btn
          depressed
          style="
            padding: 24px 20px 20px 20px;
            background-color: rgb(227, 230, 230);
          "
          @click="openCheckDialog = false"
        >
          取消
        </v-btn>
        <v-btn
          depressed
          style="
            padding: 24px 20px 20px 20px;
            background-color: rgb(227, 230, 230);
          "
          @click="deleteFromCart"
        >
          確定
        </v-btn>
      </template>
    </check-dialog>
    <!-- ====== end of delete-dialog ====== -->
  </div>
</template>

<script>
//import { mapGetters } from "vuex";
import CheckDialog from "../components/CheckDialog";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      products: [],
      sumnumber: 0,
      isDataLoaded: false,
      deleteId: null,
      deleteTitle: null,
      openCheckDialog: false,
      shoppingHeaders: [
        {
          text: "圖示",
          align: "center",
          sortable: false,
          value: "img",
        },
        {
          text: "商品名稱",
          align: "center",
          sortable: false,
          value: "title",
        },
        {
          text: "單價",
          align: "center",
          sortable: false,
          value: "price",
        },
        {
          text: "數量",
          align: "center",
          sortable: false,
          value: "count",
        },
        {
          text: "價格",
          align: "center",
          sortable: false,
          value: "eachsum",
        },
        {
          text: "刪除",
          align: "center",
          sortable: false,
          value: "delete",
        },
      ],
    };
  },
  components: {
    "check-dialog": CheckDialog,
  },
  methods: {
    checkEmptyCart() {
      if (this.products.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    async readData() {
      let user = firebase.auth().currentUser;
      //let username = user.displayName;
      let useremail = user.email;
      const dbGetUser = firebase
        .firestore()
        .collection("userdata")
        .where("email", "==", useremail);
      await dbGetUser.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let num = doc.data().price.replace(/^.*?(\d+).*/, "$1");
          //console.log(num);
          let eachsum = num * doc.data().count;
          this.sumnumber += parseInt(eachsum);
          //console.log(eachsum);
          const newData = { ...doc.data(), eachsum: "NT$ " + eachsum };
          this.products.push(newData);
        });
      });
      this.isDataLoaded = true;
    },
    async deleteFromCart() {
      this.isDataLoaded = false;
      let user = firebase.auth().currentUser;
      let username = user.displayName;
      let deleteId = this.deleteId;
      const dbGetUser = firebase
        .firestore()
        .collection("userdata")
        .where("user", "==", username)
        .where("img", "==", deleteId)
        .get();
      await dbGetUser.then((doc) => {
        doc.forEach((element) => {
          element.ref.delete();
          console.log("deleted");
        });
        return (this.isDataLoaded = true);
      });
      if (this.isDataLoaded) {
        this.reRender();
        this.openCheckDialog = false;
      }
    },
    reRender() {
      setTimeout(() => {
        this.$router.go();
      }, 300);
    },
  },
  created() {
    this.readData();
  },
};
</script>

<style scoped>
.page-title {
  display: flex;
  justify-content: center;
  color: dimgray;
}

.page-subtitle {
  display: flex;
  justify-content: center;
}

.threedots-center {
  display: block;
  width: 60px;
  margin: auto;
}

.checkcart-button {
  background-color: #526161;
  color: white;
  padding: 10px;
  cursor: pointer;
}
</style>
