<template>
  <div>
    <div class="all-products">
      <v-divider></v-divider>
      <div class="page-title mt-8 mb-8">
        <h2>會員登入</h2>
      </div>
      <div class="form-width">
        <form @submit.prevent="handleSubmit">
          <v-text-field
            type="email"
            required
            label="* email"
            placeholder="email"
            v-model="email"
          >
          </v-text-field>
          <v-text-field
            :append-icon="value1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            @click:append="() => (value1 = !value1)"
            :type="value1 ? 'password' : 'text'"
            required
            label="* password"
            placeholder="password"
            v-model="password"
            autocomplete="on"
          ></v-text-field>
          <button class="login-btn mt-4" type="submit">Login</button>
        </form>
          <div v-if="error" class="inform-error mb-6">{{ error }}</div>
      </div>
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
      value1: String,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.error = null;
        console.log(val);
        this.$router.replace({ name: "ShoppingCart" });
      } catch (err) {
        const errArr = err.message.split(' ');
        const cut = errArr.slice(1);
        this.error = cut.join(' ');
      }
    }
  },
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

.inform-error {
  color: rgb(177, 81, 81);
  background-color: white;
  text-align: left;
  font-size: 12px;
}
</style>
