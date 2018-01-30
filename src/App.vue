<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
import Layout from './components/Layout'

export default {
  name: 'App',
  components: {Layout}
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
