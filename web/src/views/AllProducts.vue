<template>
  <div class="all-products">
    <v-divider></v-divider>
    <div class="page-title mt-8">
      <h2>所有商品</h2>
    </div>
    <div class="page-subtitle mt-4 mb-4">
      <p>我們主要販售各樣的椅子，以及燈具。</p>
    </div>
    <div class="ml-8 mr-8 shineHover">
      <figure>
      <img
        @click="toChairs"
        class="all-products-img"
        src="../assets/chairs.png"
        alt="chairs"
      />
      </figure>
      <div class="mt-4"></div>
      <figure>
      <img
        @click="toLights"
        class="all-products-img mt-2"
        src="../assets/lights.png"
        alt="lights"
      />
      </figure>
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

/* Shine */
.shineHover figure {
  position: relative;
}
.shineHover figure::before {
  position: absolute;
  top: 0;
  left: -75%;
  z-index: 2;
  display: block;
  content: '';
  width: 50%;
  height: 100%;
  background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
}
.shineHover figure:hover::before {
  -webkit-animation: shine .9s;
  animation: shine .9s;
}
@-webkit-keyframes shine {
  100% {
    left: 125%;
  }
}
@keyframes shine {
  100% {
    left: 125%;
  }
}
</style>
