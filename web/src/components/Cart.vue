<template>
  <div>
    <div v-if="isSmaller" class="page-title mt-0 mb-8">
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

    <div class="mt-8 mb-2 mr-16" style="display: flex; justify-content: flex-end;">
      <div>結帳金額：NT$ {{ sumnumber }}</div>
      <!-- <div class="float-right mt-8">
        <span class="checkcart-button">下一步</span>
      </div> -->
    </div>

    <div v-if="checkBill()" class="mb-16 mr-16 ml-16" style="display: flex; justify-content: flex-end; color: rgb(177, 81, 81);">您的結帳金額超過 5 萬元(大量訂購)，欲購買請直接致電與我們聯繫！</div>

    <!-- <form action="https://ccore.newebpay.com/MPG/mpg_gateway" method="post"> -->
    <form @submit.prevent="submitForm">
    <!-- <form action="{{ tradeWithPage.PayGateWay }}" method="post"> -->
      <input type="hidden" name="MerchantID" value="MS125084583">
      <input type="hidden" name="RespondType" value="JSON">
      <input type="hidden" name="TradeInfo" value="#{tradeinfo}">
      <input type="hidden" name="TradeSha" value="#{sha}">
      <input type="hidden" name="TimeStamp" :value="timestamp">
      <input type="hidden" name="Version" value="1.5">
      <input type="hidden" name="MerchantOrderNo" :value="timestamp">
      <input type="hidden" name="Amt" :value="sumnumber">
      <input type="hidden" name="ItemDesc" value="SPACE-shopping">
      <input type="hidden" name="Email" :value="useremail">
      <!-- <div @click="submitForm" style="display: flex; justify-content: flex-end;"><button class="checkcart-button">下一步</button></div> -->
    </form>

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
import CheckDialog from "../components/CheckDialog";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
//import { Endcrypt } from "endcrypt";
import AES from '@/utils/aes.js';
import axios from 'axios';

export default {
  data() {
    return {
      PayGateWay: {},
      trade: {},
      tradeWithPage: {},
      spgateway: {
        // HashKey: process.env.HASHKEY,//'MS125084583',
        // HashIV: process.env.HASHIV,//'2RLIPflUtc5Doo0Km18CgGveoqhLSL4K',
        // MerchantID: process.env.MERCHANTID,//'CXlO34ad4svifoQP',
        HashIV: 'CXlO34ad4svifoQP',
        HashKey: '2RLIPflUtc5Doo0Km18CgGveoqhLSL4K',
        MerchantID: 'MS125084583',
      },
      publicPath: process.env.BASE_URL,
      products: [],
      sumnumber: 0,
      username: "",
      useremail: "",
      timestamp: "",
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
      windowWidth: window.innerWidth,
      toNextStep: true,
    };
  },
  components: {
    "check-dialog": CheckDialog,
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = document.documentElement.clientWidth
      console.log(this.isSmaller)
    })
  },
  computed: {
    isSmaller() {
       return this.windowWidth < 960;
    },
  },
  methods: {
    checkEmptyCart() {
      if (this.products.length == 0) {
        // this.toNextStep = false;
        // this.$emit("toStepTwo",false)
        return true;
      } else {
        // this.toNextStep = true;
        // this.$emit("toStepTwo",true)
        return false;
      }
    },
    checkBill() {
      if (this.sumnumber > 50000) {
        // this.toNextStep = false;
        // this.$emit("toStepTwo",false)
        return true;
      } else {
        // this.toNextStep = true;
        // this.$emit("toStepTwo",true)
        return false;
      }
    },
    checkToStep2() {
      if (this.products.length == 0 || this.sumnumber > 50000) {
        this.toNextStep = false;
        this.$emit("toStepTwo", false, this.sumnumber)
      } else {
        this.toNextStep = true;
        this.$emit("toStepTwo", true, this.sumnumber, this.username, this.useremail)
        return false;
      }
    },
    async readData() {
      let user = firebase.auth().currentUser;
      this.username = user.displayName;
      this.useremail = user.email;
      const dbGetUser = firebase
        .firestore()
        .collection("userdata")
        .where("email", "==", this.useremail);
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
      this.checkToStep2();
    },
    async deleteFromCart() {
      this.isDataLoaded = false;
      let user = firebase.auth().currentUser;
      this.username = user.displayName;
      let deleteId = this.deleteId;
      const dbGetUser = firebase
        .firestore()
        .collection("userdata")
        .where("user", "==", this.username)
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
      this.checkToStep2();
    },
    reRender() {
      setTimeout(() => {
        this.$router.go();
      }, 300);
    },
    submitForm() {

      let key = '2RLIPflUtc5Doo0Km18CgGveoqhLSL4K';
      let iv = 'CXlO34ad4svifoQP';

      this.trade = {
        MerchantID: this.spgateway.MerchantID,
        RespondType: 'JSON',
        TimeStamp: this.timestamp,
        Version: 1.5,
        MerchantOrderNo: this.timestamp,
        Amt: this.sumnumber,
        ItemDesc: 'SPACE-shopping',
        Email: this.useremail,
      }

      this.tradeWithPage = {
        MerchantID: this.spgateway.MerchantID,
        RespondType: 'JSON',
        TimeStamp: this.timestamp,
        Version: 1.5,
        MerchantOrderNo: this.timestamp,
        Amt: this.sumnumber,
        ItemDesc: 'SPACE-shopping',
        Email: this.useremail,
        PayGateWay: 'https://ccore.newebpay.com/MPG/mpg_gateway',
      }

      console.log(this.trade);
      let aesMStr = AES.encryptTradeInfo(key, iv, this.trade);
      let parameter = `HashKey=${this.spgateway.HashKey}&${aesMStr}&HashIV=${this.spgateway.HashIV}`;
      let shaOri = AES.encryptSha(parameter);
      let sha = shaOri.toUpperCase();

      console.log(aesMStr);
      console.log(sha);

      // const headers = {
      //   'Content-Type': 'XMLHttpRequest',
      //   'Access-Control-Allow-Origin': '*'
      // }
      // axios.defaults.withCredentials = true;
      // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      // axios.defaults.headers.post['Access-Control-Allow-Methods'] ='GET,POST,OPTIONS,DELETE,PUT'
      //axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      axios.post('https://secret-ocean-49799.herokuapp.com/https://ccore.newebpay.com/MPG/mpg_gateway', {
        tradeinfo: aesMStr,
        sha: sha,
      },
      //{headers: headers}
        ).then(response => {
        console.log('Data saved successfully');
        console.log(response);
        // this.response = response.data

        // this.success = 'Data saved successfully';
        // this.response = JSON.stringify(response, null, 2)
      }).catch(error => {
        console.log(error);

        // this.response = 'Error: ' + error.response.status
      })
      // this.name = '';
      // this.email = '';
      // this.firstSon = '';
    },
  },
  created() {
    this.readData();
    this.timestamp = Math.floor(Date.now()/ 1000);
    console.log("timestamp",this.timestamp)
  },
};
</script>

<style>
</style>