<template>
  <div class="all-products">
    <v-divider></v-divider>
    <div class="page-title mt-8">
      <h2>所有商品</h2>
    </div>
    <div class="page-subtitle mt-4 mb-4">
      <p>我們主要販售各樣的椅子，以及燈具。</p>
    </div>
    <div class="ml-8 mr-8">
      <img
        @click="toChairs"
        class="all-products-img"
        src="../assets/chairs.png"
        alt=""
      />
      <div class="mt-4"></div>
      <img
        @click="toLights"
        class="all-products-img mt-2"
        src="../assets/lights.png"
        alt=""
      />
    </div>
    <div class="mt-8 mb-8">
      <img class="threedots-center" src="../assets/threedots.png" alt="threedots" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    toChairs() {
      this.$router.push({ name: "Chairs" });
    },
    toLights() {
      this.$router.push({ name: "Lights" });
    },
  }
}
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

.all-products-img {
  display: block;
  margin: auto;
  width: 100%;
  cursor: pointer;
  max-width: 1000px;
}

.threedots-center {
  display: block;
  width: 60px;
  margin: auto;
}
</style>
