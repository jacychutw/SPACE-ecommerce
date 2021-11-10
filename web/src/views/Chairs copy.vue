<template>
  <div class="all-products">
    <v-divider></v-divider>
    <div class="page-title mt-8">
      <h2>精選商品</h2>
    </div>

    <v-container class="white">
      <div class="mt-4 mb-4">
        <p>所有商品>椅子</p>
      </div>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checkchair01"
              class="card-img product-img"
              src="../assets/elements/chair01.jpg"
              alt="chair"
            />
            <p class="card-title">木頭手把座椅-冬天小時光</p>
            <p class="card-price">NT$ 3000/張</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checkchair02"
              class="card-img product-img"
              src="../assets/elements/chair02.jpg"
              alt="chair"
            />
            <p class="card-title">一體成型椅子-一抹抹茶香</p>
            <p class="card-price">NT$ 2000/張</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checkchair03"
              class="card-img product-img"
              src="../assets/elements/chair03.jpg"
              alt="chair"
            />
            <p class="card-title">木條藤編椅子-經典交織曲線</p>
            <p class="card-price">NT$ 3200/張</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checkchair04"
              class="card-img product-img"
              src="../assets/elements/chair04.jpg"
              alt="chair"
            />
            <p class="card-title">吊掛垂椅-陪你聽一首搖籃曲</p>
            <p class="card-price">NT$ 4000/張</p>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checkchair05"
              class="card-img product-img"
              src="../assets/elements/chair05.jpg"
              alt="chair"
            />
            <p class="card-title">包覆型躺椅-溫馨一隅</p>
            <p class="card-price">NT$ 4000/張</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checkchair06"
              class="card-img product-img"
              src="../assets/elements/chair06.jpg"
              alt="chair"
            />
            <p class="card-title">沙發板凳組-慵懶時光</p>
            <p class="card-price">NT$ 6000/組</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checkchair07"
              class="card-img product-img"
              src="../assets/elements/chair07.jpg"
              alt="chair"
            />
            <p class="card-title">工業造型椅-高效會議</p>
            <p class="card-price">NT$ 2000/張</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-2" outlined tile>
            <img
              @click="checkchair08"
              class="card-img product-img"
              src="../assets/elements/chair08.jpg"
              alt="chair"
            />
            <p class="card-title">圓弧躺椅-享受芬多精</p>
            <p class="card-price">NT$ 6000/張</p>
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
    checkchair01() {
      this.$router.push({ name: "Chair", params: { itemid: "chair01" } });
    },
    checkchair02() {
      this.$router.push({ name: "Chair", params: { itemid: "chair02" } });
    },
    checkchair03() {
      this.$router.push({ name: "Chair", params: { itemid: "chair03" } });
    },
    checkchair04() {
      this.$router.push({ name: "Chair", params: { itemid: "chair04" } });
    },
    checkchair05() {
      this.$router.push({ name: "Chair", params: { itemid: "chair05" } });
    },
    checkchair06() {
      this.$router.push({ name: "Chair", params: { itemid: "chair06" } });
    },
    checkchair07() {
      this.$router.push({ name: "Chair", params: { itemid: "chair07" } });
    },
    checkchair08() {
      this.$router.push({ name: "Chair", params: { itemid: "chair08" } });
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

.flashHover figure:hover img {
  opacity: 1;
  -webkit-animation: flash 1.5s;
  animation: flash 1.5s;
}
@-webkit-keyframes flash {
  0% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
}
@keyframes flash {
  0% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
}
</style>
