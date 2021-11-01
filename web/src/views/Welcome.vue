<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <Login @login="enterCart" />
      <p class="mb-16" style="color: gray">
        No account yet?
        <span
          @click="showLogin = false"
          style="cursor: pointer; text-decoration: underline"
          >Register</span
        >
        instead
      </p>
    </div>
    <div v-else>
      <Register @signup="enterCart" />
      <p class="mb-16" style="color: gray">
        Already registered?
        <span
          @click="showLogin = true"
          style="cursor: pointer; text-decoration: underline"
          >Login</span
        >
        instead
      </p>
    </div>
  </div>
</template>

<script>
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
export default {
  data() {
    return {
      showLogin: true,
    };
  },
  components: { Register, Login },
  methods: {
    enterCart() {
      this.$router.push({ name: "ShoppingCart" });
    },
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}
</style>
