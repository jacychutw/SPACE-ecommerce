<template>
  <div class="loader">
    <div style="display: flex; align-self: center;">
      <hollow-dots-spinner
          :animation-duration="2000"
          :size="60"
          :dot-size="16"
          :dots-num="3"
          color="black"
      />
    </div>
  </div>
</template>

<script>
import { HollowDotsSpinner } from 'epic-spinners'

export default {
  components: { HollowDotsSpinner },
  name : "Spinner",
  // props: ["start"],
  // data() {
  //   return {
  //     mutableStart: this.start,
  //   }
  // },
  // watch: {
  //   start() {
  //     this.mutableStart = this.start;
  //   }
  // }
  // watch: {
  //   start: function(newVal, ) {
  //     if(this.mutableStart !== newVal) {
  //       this.mutableStart = true;
  //     } else {
  //       this.mutableStart = false;
  //     }
  //   }
  // }
}


    // confirmPassword: function(newVal, oldVal) {
    //   if(this.password !== newVal) {
    //     this.confirmError = true;
    //     console.log("unmatch", oldVal);
    //   } else {
    //     this.confirmError = false;
    //     console.log("match");
    //   }
    // }

</script>

<style>
.loader {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: rgba(230, 230, 230, 0.3);
}
</style>