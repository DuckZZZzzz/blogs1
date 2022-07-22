
import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'
Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/add',
      name: 'Add',
      component: () => import('@/pages/Add.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: () => import('@/pages/Blogs.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/detail/:blogId',
      name: 'Detail',
      component: () => import('@/pages/Detail.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/edit/:blogId',
      name: 'Edit',
      component: () => import('@/pages/Edit.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/Index.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login.vue'),
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('@/pages/My.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/Register.vue'),
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: () => import('@/pages/User.vue'),
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

