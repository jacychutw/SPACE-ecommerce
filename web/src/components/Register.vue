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
            label="* user name"
            id="name"
          ></v-text-field>
          <v-text-field
            type="email"
            required
            label="* email"
            v-model="email"
          >
          </v-text-field>
          <v-text-field
            :append-icon="value1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            @click:append="() => (value1 = !value1)"
            :type="value1 ? 'password' : 'text'"
            required
            label="* password"
            v-model="password"
            autocomplete="on"
          ></v-text-field>
          <v-text-field
            :append-icon="value2 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            @click:append="() => (value2 = !value2)"
            :type="value2 ? 'password' : 'text'"
            required
            label="* confirm password"
            v-model="confirmPassword"
            :rules="confirmPasswordRules.concat(passwordConfirmRule)"
            autocomplete="on"
          >
          </v-text-field>
          <button class="register-btn mt-4" type="submit" :disabled="confirmError">Register</button>
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
      confirmPassword: "",
      confirmPasswordRules: [],
      confirmError: false,
      value1: String,
      value2: String,
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
        const errArr = err.message.split(' ');
        const cut = errArr.slice(1);
        this.error = cut.join(' ');
      }
    },
  },
  computed: {
    passwordConfirmRule() {
      return () =>
        this.password === this.confirmPassword || "Not match with password.";
    }
  },
  watch: {
    confirmPassword: function(oldVal, newVal) {
      if(this.password !== oldVal) {
        this.confirmError = true;
        console.log("unmatch", newVal);
      } else {
        this.confirmError = false;
        console.log("match");
      }
    }
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
