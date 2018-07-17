import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import App from '@/components/page/App'
import Column from '@/components/page/Column'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path: '/column/:id',
      name: 'Column',
      component: Column
    }
  ]
})
