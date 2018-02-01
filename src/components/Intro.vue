<template>
  <div id="intro">
    <img src="../assets/logo.png">
    <h1>나는 디자이너다.</h1>
    <el-button type="primary" round @click="login">입장</el-button>
    <el-dialog
      title="추가 정보 입력"
      :visible.sync="dialogVisible"
      width="30%">
      <el-input v-model.trim="nickname" placeholder="닉네임"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">취소</el-button>
        <el-button type="primary" @click="userInfoSave">확인</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import router from '../router'
import * as firebase from 'firebase'

export default {
  name: 'Intro',
  data () {
    return {
      dialogVisible: false,
      userInfo: null,
      nickname: ''
    }
  },
  methods: {
    login () {
      const auth = firebase.auth()
      const provider = new firebase.auth.GoogleAuthProvider()
      const user = auth.currentUser
      if (user) {
        this.finally()
      } else {
        auth.signInWithPopup(provider).then(result => {
          this.userInfo = result.user
          this.dialogVisible = true
        })
      }
    },
    finally () {
      this.$store.commit('changeAuth', true)
      this.$store.commit('setUserInfo', this.userInfo)
      router.push('nadi/foodMap')
    },
    userInfoSave () {
      if (this.nickname) {
        firebase.database().ref('users/' + this.userInfo.uid).set({
          nickname: this.nickname
        })
        this.dialogVisible = false
        this.finally()
      } else {
        this.$message.error('닉네임을 입력해주세요.')
      }
    },
    cancel () {
      this.userInfo.delete()
      this.dialogVisible = false
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
