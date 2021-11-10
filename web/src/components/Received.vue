<template>
  <div>
    <div v-if="isSmaller" class="page-title mt-0 mb-8">
      <h2>訂單確認</h2>
    </div>
    <div class="well-received">感謝您的訂購！</div>
    <p class="days mt-16">商品將於 5 個工作日內寄出</p>
    <p class="nice-day mt-8 mb-16">Have a nice day!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = document.documentElement.clientWidth
    })
  },
  computed: {
    isSmaller() {
       return this.windowWidth < 960;
    },
  },
}
</script>

<style>
.well-received {
  background-color: #dce6e6;
  padding: 20px;
  text-align: center;
  width: 420px;
  margin: auto;
}

.days {
  color: #526161;
  font-size: 18px;
  text-align: center;
}

.nice-day {
  color: #8d9f92;
  font-size: 18px;
  text-align: center;
}
</style>