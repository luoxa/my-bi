import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/content',
      name: 'content',
      component: () => import('./views/Content.vue')
    },
    {
      path: '/dashbord',
      name: 'dashbord',
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/datapre',
      name: 'datapre',
      component: () => import('./views/Datapre.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:"*",
      component:  () => import('./views/Content.vue')
    }

  ]
})
