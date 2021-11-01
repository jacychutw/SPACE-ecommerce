<template>
  <div>
    <div class="all-products">
      <v-divider></v-divider>
      <div class="page-title mt-8 mb-8">
        <h2>會員登入</h2>
      </div>
      <div v-if="error" class="error">{{ error.message }}</div>
      <div class="form-width">
        <form @submit.prevent="handleSubmit">
          <v-text-field
            type="email"
            required
            placeholder="email"
            v-model="email"
            solo
          >
          </v-text-field>
          <v-text-field
            type="password"
            required
            placeholder="password"
            v-model="password"
            autocomplete="on"
            solo
          ></v-text-field>
          <button class="login-btn" type="submit">Login</button>
        </form>
      </div>

      <!-- <div class="mt-8 mb-8">
        <img class="threedots-center" src="../assets/threedots.png" alt="" />
      </div> -->
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  data() {
    return {
      displayName: "",
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        //error.value = null
        console.log(val);
        this.$router.replace({ name: "ShoppingCart" });
      } catch (err) {
        console.log(err);
        //error.value = 'Incorrect login credentials'
      }
    }
  }
}
</script>

<style>
.page-title {
  display: flex;
  justify-content: center;
  color: dimgray;
}

.threedots-center {
  display: block;
  width: 60px;
  margin: auto;
}

.form-width {
  max-width: 300px;
  margin: auto;
}

.login-btn {
  background-color: #526161;
  width: 300px;
  padding: 10px;
  color: white;
}
</style>
