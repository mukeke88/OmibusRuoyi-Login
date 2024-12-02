<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input v-model="username" id="username" type="text" placeholder="Enter your username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input v-model="password" id="password" type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      handleLogin() {
        console.log("Login Attempt:", this.username, this.password);
        // Placeholder for login logic
        alert(`Login attempted with username: ${this.username}`);
      },
    },
  };
  </script>
  
  <style>
  .login {
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
  }
  </style>
  