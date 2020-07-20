import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'

// const home = r => require.ensure([], () => r(require('../views/home')), 'home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: () => import('@/views/home')
        },
        {
          path: 'shop',
          component: () => import('@/views/shop')
        }
      ]
    }
  ]
})
