<template>
  <div>
    <div class="all-products">
      <v-divider></v-divider>
      <div class="page-title mt-8 mb-8">
        <h2>會員註冊</h2>
      </div>
      <div class="form-width">
        <form @submit.prevent="pressed">
          <v-text-field
            type="text"
            required
            placeholder="display name"
            id="name"
            solo
          ></v-text-field>
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
          <button class="register-btn" type="submit">Register</button>
        </form>
          <div v-if="error" class="inform-error mb-6">{{ error }}</div>
      </div>
      <!-- <div class="mt-8 mb-8">
        <img class="threedots-center" src="../assets/threedots.png" alt="threedots" />
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
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        const res = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(function (result) {
            return result.user.updateProfile({
              displayName: document.getElementById("name").value,
            });
          });
        this.error = null;
        this.$router.replace({ name: "ShoppingCart" });
        console.log(res);
        this.$router.go();
      } catch (err) {
        console.log(err);
        const errArr = err.message.split(' ');
        const cut = errArr.slice(1);
        this.error = cut.join(' ');
      }
    },
  },
};
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

.register-btn {
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
