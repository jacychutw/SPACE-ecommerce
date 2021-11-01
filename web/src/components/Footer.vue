<template>
  <div>
    <v-container class="white footer">
      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" flat>
            <p class="footer-title">Company</p>
            <p class="footer-content canclick" @click="linktoAbout">關於我們</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" flat>
            <p class="footer-title">Customer Service</p>
            <p class="footer-content canclick" @click="linktoPayment">
              付費管道
            </p>
            <p class="footer-content canclick" @click="linktoLogistics">
              寄送方式
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" flat>
            <p class="footer-title">Contact Us</p>
            <p class="footer-content">0939123456</p>
            <p class="footer-content">space@gmail.com</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
        style="background-color: #526161; color: white; font-size: 10px"
      >
        ⓒ {{ new Date().getFullYear() }} — SPACE-shop.com., LTD.All RIGHTS
        RESERVED.
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    linktoAbout() {
      this.$router.push({ name: "AboutUs" });
    },
    linktoPayment() {
      this.$router.push({ name: "Payment" });
    },
    linktoLogistics() {
      this.$router.push({ name: "Logistics" });
    },
  },
};
</script>

<style>
.footer {
  text-align: center;
}

.footer-title {
  text-transform: uppercase;
  color: #526161;
  padding: 20px;
}

.footer-content {
  color: gray;
  padding: 6px;
}

.canclick {
  cursor: pointer;
}
</style>
