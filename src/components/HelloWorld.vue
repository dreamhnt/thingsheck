<template>
  <div>
    <div
      id="map"
      style="width:100%;height:350px;"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    const container = document.getElementById('map')
    const options = {
      center: new window.daum.maps.LatLng(33.450701, 126.570667),
      level: 3
    }

    const map = new window.daum.maps.Map(container, options)
    console.log(map)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
