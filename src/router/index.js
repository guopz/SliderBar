import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/layout/Home'
import SideBar from '@/layout/SideBar'
import main from '@/views/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '/user/:id',
        name: 'user',
        component: main
      }]
    },
    {
      path: '/SideBar',
      name: 'SideBar',
      component: SideBar
    }
  ]
})
