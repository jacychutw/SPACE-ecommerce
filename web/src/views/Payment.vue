<template>
  <div class="all-products">
    <v-divider></v-divider>
    <div class="page-title mt-8">
      <h2>付費管道</h2>
    </div>
    <div class="payment-quote mt-4 mb-4">
      <p>
        SPACE 與 EXCAPE 金流合作，有提供信用卡、金融卡等多元管道給您繳費。<br /><br />
        若您訂購結帳金額超過新台幣五萬元，因消費金額較高請直接致電聯繫，將針對該筆訂單提供折扣。<br />
        另外，由於件數較多，運送方式與平台設定的略有不同，固不適用平台繳費方式。<br />
        請您親自致電給我們，會有專人為您服務。<br />
      </p>
    </div>
    <div class="ml-16 mr-16">
      <img class="payment-img" src="../assets/payment.png" alt="payment" />
    </div>
    <div class="mt-8 mb-8">
      <img class="threedots-center" src="../assets/threedots.png" alt="threedots" />
    </div>
  </div>
</template>

<style scoped>
.page-title {
  display: flex;
  justify-content: center;
  color: dimgray;
}

.payment-quote {
  margin: 20px;
  color: #526161;
  display: flex;
  justify-content: center;
}

.payment-quote p {
  margin: 20px;
  font-size: 18px;
}

.payment-img {
  display: block;
  margin: auto;
  width: 100%;
  max-width: 800px;
}

.threedots-center {
  display: block;
  width: 60px;
  margin: auto;
}
</style>
