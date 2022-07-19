import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/pages/Add'
import Blogs from '@/pages/Blogs'
import Detail from '@/pages/Detail'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import My from '@/pages/My'
import Register from '@/pages/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }

  ]
})
