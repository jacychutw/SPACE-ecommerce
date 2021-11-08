<template>
  <div class="all-products">
    <v-divider></v-divider>
    <div class="page-title mt-8">
      <h2>精選商品</h2>
    </div>

    <v-container class="white">
      <div class="mt-4 mb-4">
        <p>所有商品>燈具</p>
      </div>
      <v-row>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checklight01"
              class="card-img product-img"
              src="../assets/elements/light01.jpg"
              alt=""
            />
            <p class="card-title">圓形燈串-美好的邂逅</p>
            <p class="card-price">NT$ 3000/串</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checklight02"
              class="card-img product-img"
              src="../assets/elements/light02.jpg"
              alt=""
            />
            <p class="card-title">大型三角吊燈-總裁的會客室</p>
            <p class="card-price">NT$ 8000/座</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checklight03"
              class="card-img product-img"
              src="../assets/elements/light03.jpg"
              alt=""
            />
            <p class="card-title">白色吊燈-一起吃個早午餐</p>
            <p class="card-price">NT$ 3600/座</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checklight04"
              class="card-img product-img"
              src="../assets/elements/light04.jpg"
              alt=""
            />
            <p class="card-title">圓形燈串-秘密基地</p>
            <p class="card-price">NT$ 2000/串</p>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checklight05"
              class="card-img product-img"
              src="../assets/elements/light05.jpg"
              alt=""
            />
            <p class="card-title">獨立圓形立燈-寧靜的力量</p>
            <p class="card-price">NT$ 3600/座</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checklight06"
              class="card-img product-img"
              src="../assets/elements/light06.jpg"
              alt=""
            />
            <p class="card-title">白色立燈-永遠的焦點</p>
            <p class="card-price">NT$ 4200/座</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checklight07"
              class="card-img product-img"
              src="../assets/elements/light07.jpg"
              alt=""
            />
            <p class="card-title">三圓吊燈-移動的行星</p>
            <p class="card-price">NT$ 6000/組</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checklight08"
              class="card-img product-img"
              src="../assets/elements/light08.jpg"
              alt=""
            />
            <p class="card-title">灰白色垂燈-大都會裡的指引</p>
            <p class="card-price">NT$ 4200/座</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="mt-8 mb-8">
      <img class="threedots-center" src="../assets/threedots.png" alt="threedots" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    checklight01() {
      this.$router.push({ name: "Light", params: { itemid: "light01" } });
    },
    checklight02() {
      this.$router.push({ name: "Light", params: { itemid: "light02" } });
    },
    checklight03() {
      this.$router.push({ name: "Light", params: { itemid: "light03" } });
    },
    checklight04() {
      this.$router.push({ name: "Light", params: { itemid: "light04" } });
    },
    checklight05() {
      this.$router.push({ name: "Light", params: { itemid: "light05" } });
    },
    checklight06() {
      this.$router.push({ name: "Light", params: { itemid: "light06" } });
    },
    checklight07() {
      this.$router.push({ name: "Light", params: { itemid: "light07" } });
    },
    checklight08() {
      this.$router.push({ name: "Light", params: { itemid: "light08" } });
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

.card-price {
  font-size: 10px;
  color: gray;
}

.product-img {
  cursor: pointer;
}
</style>
