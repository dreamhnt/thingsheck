<template>
  <div id="intro">
    <img src="../assets/logo.png">
    <h1>나는 디자이너다.</h1>
    <el-button type="primary" round @click="login">입장</el-button>
  </div>
</template>

<script>
import router from '../router'
import firebase from 'firebase'

export default {
  name: 'Intro',
  data () {
    return {
    }
  },
  methods: {
    login () {
      const auth = firebase.auth()
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.onAuthStateChanged(user => {
        if (user) {
          this.$store.commit('changeAuth', true)
          router.push('FoodMap')
        } else {
        //   auth.signInWithPopup(provider).then(result => {
        //   // This gives you a Google Access Token. You can use it to access the Google API.
        //   var token = result.credential.accessToken;
        //   // The signed-in user info.
        //   var user = result.user;
        //   // ...
        // }).catch(function(error) {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   // The email of the user's account used.
        //   var email = error.email;
        //   // The firebase.auth.AuthCredential type that was used.
        //   var credential = error.credential;
        //   // ...
        // });
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
