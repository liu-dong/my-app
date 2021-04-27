<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <div id="nav">
          <router-link to="/login">Login</router-link>
          |
          <router-link to="/vantDemo">Demo</router-link>
          |
          <router-link to="/about">About</router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Home'

}
</script>
<style>
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>