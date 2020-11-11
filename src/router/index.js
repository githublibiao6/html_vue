import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/test/HelloWorld'
import Login from '@/views/test/Login'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
