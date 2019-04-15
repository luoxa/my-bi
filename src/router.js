import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      component: () => import('./views/Home.vue'),
      children:[
        {
          path: '',
          redirect:'contents'
        },
        {
          path:'contents',
          component:() => import('./views/Contents.vue'),
          children:[
            {
              path:'',
              component:() => import('./views/Content.vue')
            },
            {
              path:':id',
              component:() => import('./views/Content.vue')
            }
          ]
        },
        {
          path:'dashboard',
          component:() => import('./views/Dashboard.vue')
        },
        {
          path:'datapre',
          component:() => import('./views/Datapre.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path:"*",
      redirect:'/home'
    }
  ]
})