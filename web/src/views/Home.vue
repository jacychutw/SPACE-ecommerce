<template>
  <div>
    <img class="home-img" src="../assets/home.png" alt="home" />
      <p class="welcome-slogan mt-4">
        Welcome! Take A Seat.
      </p>
    <v-container class="white">
      <v-row>
        <!-- 特製組合 -->
        <v-col v-for="(item,i) in displayItems" :key="i" cols="6" sm="3">
          <div class="fixed-card" @click="checkItem(item.img)">
            <v-card class="pa-2 home-link-img" outlined tile>
              <img
                class="card-img"
                :src="`${publicPath}elements/${item.img}.jpg`"
                alt="random-item"
              />
              <p class="card-title">{{ item.title }}</p>
            </v-card>
            <div class="hide">Check Details</div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="quote">
      <img class="dots-img" src="../assets/threedots.png" alt="threedots" />
      <p>
        空間因人們在其中走動、停留，賦予其無限可能性。好的燈具及椅子為空間注入生命力，無論是時尚風格、鄉村恬靜、北歐高雅等，精巧妙地搭配，都可完美融入。
      </p>
      <img class="dots-img" src="../assets/threedots.png" alt="threedots" />
    </div>

    <div class="mt-8 mb-8">
      <img class="long-img" src="../assets/fivepics.png" alt="fivepics" />
    </div>
  </div>
</template>

<script>
import homeInfo from "../assets/home.json";

export default {
  name: "Home",
  data() {
    return {
      counter: 1,
      id: this.$route.params.itemid,
      alreadyLogin: false,
      openCheckDialog: false,
      checkIfChair: true,
      decreaseActiveColor: "lightgray",
      increaseActiveColor: "#526161",
      displayItems: [],
      publicPath: process.env.BASE_URL,
      homeData: homeInfo,
    };
  },
  created() {
    let allitems = ["chair01", "chair02", "chair03", "chair04", "chair05", "chair06", "chair07", "chair08", "chair09", "chair10", "chair11", "chair12",
                  "light01", "light02", "light03", "light04", "light05", "light06", "light07", "light08", "light09", "light10", "light11", "light12"];
    let newItems = [];
    for (let i = 0; i < 4; i++) {
      let idx = Math.floor(Math.random() * allitems.length);
      let titleID = allitems[idx];
      newItems.push({"img": allitems[idx], "title": this.homeData[titleID]});
      allitems.splice(idx, 1);
    }
    this.displayItems = newItems;
  },
  methods: {
    checkItem(itemName) {
      let reassemblyName = (itemName[0].toUpperCase() + itemName.slice(1)).split('', 5).join('');
      this.$router.push({ name: reassemblyName, params: { itemid: itemName } });
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
  margin: 20px 20px;
  font-size: 16px;
  text-align: left;
}

.dots-img {
  width: 96px;
  height: 24px;
  margin: 0 40px;
}

@media only screen and (max-width: 599px) {
  .dots-img {
    display: none;
  }
}

.long-img {
  display: block;
  width: 80%;
  margin: auto;
}

.welcome-slogan {
  text-align: center;
  padding: 20px 0;
  color: #526161;
}
</style>
