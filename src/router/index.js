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
import {mapActions} from 'vuex'
window.store = store


Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/add',
      name: 'Add',
      component: Add,
      meta: {requiresAuth: true}
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs,
      meta: {requiresAuth: true}
    },
    {
      path: '/detail/:blogId',
      name: 'Detail',
      component: Detail,
      meta: {requiresAuth: true}
    },
    {
      path: '/edit/:blogId',
      name: 'Edit',
      component: Edit,
      meta: {requiresAuth: true}
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
      meta: {requiresAuth: true}
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User,
      meta: {requiresAuth: true}
    }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const promise = store.dispatch('checkLogin')
    promise.then(isLogin=>{
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else { 
        next()
      }
    })
    .catch(res=>{
      if(res.msg === '请先登录') {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next() 
  }
})




export default router