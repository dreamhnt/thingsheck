<template>
  <div id="app">
    <intro/>
  </div>
</template>

<script>
import Intro from './components/Intro'
export default {
  name: 'App',
  components: {Intro}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
}
</style>
