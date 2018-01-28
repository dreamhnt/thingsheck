import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
