<template>
  <div id="intro">
    <img src="../assets/logo.png">
    <h1>나는 디자이너다.</h1>
    <el-button type="primary" round @click="login">입장</el-button>
  </div>
</template>

<script>
import router from '../router'
const firebase = window.firebase
const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()

export default {
  name: 'Intro',
  data () {
    return {
      user: ''
    }
  },
  methods: {
    login () {
      auth.onAuthStateChanged(user => {
        if (user) {
          console.log(user)
          console.log(router)
          router.push('home')
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
