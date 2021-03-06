import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store'
import Intro from '@/components/Intro'
import FoodMap from '@/components/FoodMap'
import Layout from '@/components/Layout'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/nadi',
      component: Layout,
      name: 'nadi',
      children: [
        {
          path: 'foodmap',
          name: 'foodmap',
          component: FoodMap,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/',
      name: 'intro',
      components: {intro: Intro}
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.
    // 그렇지 않은 경우 로그인 페이지로 리디렉션하십시오.
    if (!Store.state.isAuth) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // 반드시 next()를 호출하십시오!
  }
})

export default router
