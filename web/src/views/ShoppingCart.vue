<template>
  <div class="stepper">
    <v-divider></v-divider>

  <div class="mr-2 ml-2 mt-4">
  <v-stepper alt-labels v-model="e1" flat class="expand">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        <span style="color: #8a8e8f">購物車</span>
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        <span style="color: #8a8e8f">填寫資料</span>
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        <span style="color: #8a8e8f">訂單確認</span>
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <Cart @toStepTwo="whetherToStepTwo(arguments)"></Cart>
        <div class="next-step">
          <button id="first" @click="e1 = 2" class="checkcart-button mt-8 mb-8" :style="{ 'background-color': changeActiveColor }">下一步</button>
        </div>

      </v-stepper-content>

      <v-stepper-content step="2">
        <UserInfo ref="child" @readyToGo="toStep3" :sumnumber="sumnumber" :username="username" :useremail="useremail" />

        <div class="next-step">
          <button @click="e1 = 1" class="uncheckcart-button mb-8 mr-1">上一步</button>
          <!-- <button @click="e1 = 3" class="checkcart-button mb-8 ml-1">下一步</button> -->
          <button @click="checkUserInfo" class="checkcart-button mb-8 ml-1">下一步</button>
        </div>

      </v-stepper-content>

      <v-stepper-content step="3">
        <Received />

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </div>

  </div>
</template>

<script>
import Cart from "../components/Cart.vue";
import UserInfo from "../components/UserInfo.vue";
import Received from "../components/Received.vue";

export default {
  components: { Cart, UserInfo, Received },
  data () {
    return {
      e1: 1,
      changeActiveColor: "lightgray",
      username: "",
      useremail: "",
      sumnumber: 0,
    }
  },
  methods: {
    whetherToStepTwo(val) {
       var toNext = document.querySelector("#first");
      if(val[0]) {
        // val true 的話 代表可以進到下一步
        this.changeActiveColor = "#516161";
        toNext.removeAttribute("disabled", "");
        toNext.setAttribute("enabled", "");
        this.sumnumber = val[1];
        this.username = val[2];
        this.useremail = val[3];
      } else {
        this.changeActiveColor = "lightgray";
        toNext.removeAttribute("enabled", "");
        toNext.setAttribute("disabled", "");
      }
    },
    checkUserInfo() {
      this.$refs.child.emitEvent();
    },
    toStep3() {
      setTimeout(() => {this.e1 = 3}, 5000);
    }
  }
};
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

.threedots-center {
  display: block;
  width: 60px;
  margin: auto;
}

.v-stepper__header {
  box-shadow: none;
}

.next-step {
  display: flex;
  justify-content: center;
}

.checkcart-button {
  background-color: #526161;
  color: white;
  padding: 6px 20px;
  cursor: pointer;
}

.uncheckcart-button {
  border: 1px solid gray;
  padding: 6px 20px;
  cursor: pointer;
}

@media only screen and (min-width: 800px) {
  .expand {
    margin: 0 60px;
  }
}

@media only screen and (min-width: 1200px) {
  .expand {
    margin: 0 90px;
  }
}
</style>
