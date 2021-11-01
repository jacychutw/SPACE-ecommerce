<template>
  <div class="all-products">
    <v-divider></v-divider>
    <div class="page-title mt-8">
      <h2>關於我們</h2>
    </div>
    <div class="about-quote mt-4 mb-4">
      <p>
        SPACE 成立於2021年，專門製作高級典雅家飾的品牌。<br /><br />

        我們希望以優雅及永恆不退流行的商品，為人們空間創造可能性。<br />
        設計多款椅子與燈具。在後疫情時代可以舒適地打造完美的空間。以最舒服的方式擁抱自己的身分。<br /><br />

        我們長期與固定廠商合作，致力於設計製造出耐用且獨樹一格的產品。
      </p>
    </div>
    <div class="ml-16 mr-16">
      <img class="about-img" src="../assets/about.png" alt="" />
    </div>
    <div class="mt-8 mb-8">
      <img class="threedots-center" src="../assets/threedots.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.page-title {
  display: flex;
  justify-content: center;
  color: dimgray;
}

.about-quote {
  margin: 20px;
  color: #526161;
  display: flex;
  justify-content: center;
}

.about-quote p {
  margin: 20px;
  font-size: 18px;
}

.about-img {
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
