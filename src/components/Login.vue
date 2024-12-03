<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input v-model="loginForm.username" id="username" type="text" placeholder="Enter your username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="loginForm.password" id="password" type="password" placeholder="Enter your password" />
      </div>
      <button type="submit" :disabled="loading">
        <span v-if="!loading">Login</span>
        <span v-else>Logging in...</span>
      </button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        captcha: "",
      },
      loading: false,
      errorMessage: "",
      captchaEnabled: true,
      captchaImage: "",
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.errorMessage = "";

      try {
        // Simulating a store dispatch
        await this.$store.dispatch("Login", this.loginForm);

        // On success, redirect
        const redirect = this.$route.query.redirect || "/";
        this.$router.push({ path: redirect }).catch(() => {});
      } catch (error) {
        // On error, show error message and refresh captcha if enabled
        this.errorMessage = "Login failed. Please try again.";
        if (this.captchaEnabled) {
          this.getCaptcha();
        }
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
  },
};
</script>

<style>
.login {
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
