<template>
  <div>
    <img class="home-img" src="../assets/home.png" alt="" />

    <v-container class="white">
      <v-row>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img class="card-img" src="../assets/elements/light06.jpg" alt="" />
            <p class="card-title">白色立燈-永遠的焦點</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img class="card-img" src="../assets/elements/chair06.jpg" alt="" />
            <p class="card-title">沙發板凳組-慵懶時光</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img class="card-img" src="../assets/elements/light01.jpg" alt="" />
            <p class="card-title">圓形燈串-美好的邂逅</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="pa-2" outlined tile>
            <img class="card-img" src="../assets/elements/chair05.jpg" alt="" />
            <p class="card-title">包覆型躺椅-溫馨一隅</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="quote">
      <img class="dots-img" src="../assets/threedots.png" alt="" />
      <p>
        一個空間，因著人們在其中來回走動、駐足停留，賦予其無限可能性。好的傢俱與擺飾給予空間不同的生命力，無論是時尚風格、鄉村恬靜、北歐高雅等各類型，精巧妙地搭配，都可以無違和感地融入。
      </p>
      <img class="dots-img" src="../assets/threedots.png" alt="" />
    </div>

    <div class="mt-8 mb-8">
      <img class="long-img" src="../assets/fivepics.png" alt="" />
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.home-img {
  width: 100%;
}

.card-img {
  width: 100%;
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
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}

.quote p {
  width: 400px;
  margin: 20px 80px;
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
