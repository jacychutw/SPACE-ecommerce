<template>
  <div>
    <img class="home-img" src="../assets/home.png" alt="home" />

    <v-container class="white">
      <v-row>
        <v-col cols="12" sm="3">
          <div class="fixed-card" @click="checklight06">
            <v-card class="pa-2 home-link-img" outlined tile>
              <img
                class="card-img"
                src="../assets/elements/light06.jpg"
                alt="light"
              />
              <p class="card-title">白色立燈-永遠的焦點</p>
            </v-card>
            <div class="hide">Check Details</div>
          </div>
        </v-col>
        <v-col cols="12" sm="3">
          <div class="fixed-card" @click="checkchair05">
            <v-card class="pa-2 home-link-img" outlined tile>
              <img
                class="card-img"
                src="../assets/elements/chair05.jpg"
                alt="light"
              />
              <p class="card-title">包覆型躺椅-溫馨一隅</p>
            </v-card>
            <div class="hide">Check Details</div>
          </div>
        </v-col>
        <v-col cols="12" sm="3">
          <div class="fixed-card" @click="checklight01">
            <v-card class="pa-2 home-link-img" outlined tile>
              <img
                class="card-img"
                src="../assets/elements/light01.jpg"
                alt="light"
              />
              <p class="card-title">圓形燈串-美好的邂逅</p>
            </v-card>
            <div class="hide">Check Details</div>
          </div>
        </v-col>
        <v-col cols="12" sm="3">
          <div class="fixed-card" @click="checkchair08">
            <v-card class="pa-2 home-link-img" outlined tile>
              <img
                class="card-img"
                src="../assets/elements/chair08.jpg"
                alt="light"
              />
              <p class="card-title">圓弧躺椅-享受芬多精</p>
            </v-card>
            <div class="hide">Check Details</div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="quote">
      <img class="dots-img" src="../assets/threedots.png" alt="threedots" />
      <p>
        一個空間，因著人們在其中來回走動、駐足停留，賦予其無限可能性。好的傢俱與擺飾給予空間不同的生命力，無論是時尚風格、鄉村恬靜、北歐高雅等各類型，精巧妙地搭配，都可以無違和感地融入。
      </p>
      <img class="dots-img" src="../assets/threedots.png" alt="threedots" />
    </div>

    <div class="mt-8 mb-8">
      <img class="long-img" src="../assets/fivepics.png" alt="fivepics" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    checklight06() {
      this.$router.push({ name: "Light", params: { itemid: "light06" } });
    },
    checkchair05() {
      this.$router.push({ name: "Chair", params: { itemid: "chair05" } });
    },
    checklight01() {
      this.$router.push({ name: "Light", params: { itemid: "light01" } });
    },
    checkchair08() {
      this.$router.push({ name: "Chair", params: { itemid: "chair08" } });
    },
  },
};
</script>

<style>
.home-img {
  width: 100%;
}

.card-img {
  width: 100%;
}

.fixed-card:hover .home-link-img {
  filter: brightness(0.5);
}

.fixed-card {
  position: relative;
  text-align: center;
  color: white;
  cursor: pointer;
}

.fixed-card .hide {
  display: none;
  position: absolute;

  width: 96%;
  padding: 1%;
  bottom: 0%;
  background-color: #a08563;

  margin: 2%;
}

.fixed-card:hover > .hide {
  display: block;
}

.card-title {
  font-size: 12px;
}

.quote {
  margin: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #526161;
  border-top: 1px solid rgb(248, 238, 238);
  border-bottom: 1px solid rgb(248, 238, 238);
}

.quote p {
  width: 400px;
  margin: 20px 80px;
  font-size: 16px;
}

.dots-img {
  width: 96px;
  height: 24px;
}

.long-img {
  display: block;
  width: 80%;
  margin: auto;
}
</style>
