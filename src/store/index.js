import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBp52FFUvyfP41muNzudReFrFgubrS9f9Q',
  authDomain: 'dreamhnt.firebaseapp.com',
  databaseURL: 'https://dreamhnt.firebaseio.com',
  projectId: 'dreamhnt',
  storageBucket: 'dreamhnt.appspot.com',
  messagingSenderId: '208204891871'
}
firebase.initializeApp(config)

const state = {
  isAuth: false,
  userInfo: null
}

const mutations = {
  changeAuth (state, val) {
    state.isAuth = val
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {

}

const getters = {
  isAuth: state => state.isAuth,
  firebase: state => state.fireabase,
  userInfo: state => state.userInfo
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
