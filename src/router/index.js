import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import App from '@/components/page/App'
import Blog from '@/components/page/Blog'
import Support from '@/components/page/Support'
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
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/support',
      name: 'Support',
      component: Support
    },
    {
      path: '/column/:id',
      name: 'Column',
      component: Column
    }
  ]
})
