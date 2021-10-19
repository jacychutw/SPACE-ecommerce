<template>
  <div>
    <v-container class="white footer">
      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" flat>
            <p>Company</p>
            <p>關於我們</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" flat>
            <p>Customer Service</p>
            <p>付費管道</p>
            <p>寄送方式</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" flat>
            <p>Contact Us</p>
            <p>0939123456</p>
            <p>space@gmail.com</p>
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
        ⓒ {{ new Date().getFullYear() }} — SPACE-shop.com., LTD.All RIGHTS RESERVED.
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  text-align: center;
}
</style>