<template>
  <div class="mt-8 mr-6 ml-6" style="color: #526161">
    <h1>404 Not Found</h1>
    <p>
      Please check the URL.
      Try going
      <span @click="goHome" style="color: #915233">HERE</span>
    </p>
    <!-- <div style="display: flex; justify-content: center;"> -->
    <div>
      <img :src="`${publicPath}space.png`" class="space-img mt-16">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    goHome() {
      return this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.space-img {
  width: 100%;
  max-width: 800px;
}
</style>