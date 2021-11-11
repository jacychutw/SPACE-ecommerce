<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  font-family: "Microsoft JhengHei";
}

a {
  text-decoration: none;
}

.v-application ul,
.v-application ol {
  padding-left: 0px;
}

.v-application a {
  color: #647d7d !important;
}

.v-application a:hover {
  color: #2d4747 !important;
}

.v-btn__content {
  color: #647d7d !important;
  font-size: 16px;
  margin-bottom: 5px;
}

.v-application p {
  margin-bottom: 0px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
