import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/pages/Add'
import Blogs from '@/pages/Blogs'
import Detail from '@/pages/Detail'
import Edit from '@/pages/Edit'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import My from '@/pages/My'
import Register from '@/pages/Register'
import User from '@/pages/User'

import store from '../store'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/add',
      name: 'Add',
      component: Add,
      meta: {requireAuth: true}
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs,
      meta: {requireAuth: true}
    },
    {
      path: '/detail/:blogId',
      name: 'Detail',
      component: Detail,
      meta: {requireAuth: true}
    },
    {
      path: '/edit/:blogId',
      name: 'Edit',
      component: Edit,
      meta: {requireAuth: true}
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
      component: My,
      meta: {requireAuth: true}
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/uer/:userId',
      name: 'User',
      component: User,
      meta: {requireAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() 
  }
})

export default router