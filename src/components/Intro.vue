<template>
  <div id="intro">
    <img src="../assets/logo.png">
    <h1>나는 디자이너다.</h1>
    <el-button type="primary" round @click="login">입장</el-button>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'Intro',
  data () {
    return {
    }
  },
  methods: {
    login () {
      const firebase = this.$store.state.firebase
      const auth = firebase.auth()
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.onAuthStateChanged(user => {
        if (user) {
          this.$store.commit('changeAuth', true)
          router.push('FoodMap')
        } else {
          auth.signInWithPopup(provider)
        }
      })
    }
  }
}
</script>

<style>
#intro {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
