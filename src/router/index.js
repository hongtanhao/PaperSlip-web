import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import TodoAssignment from '@/components/TodoAssignment'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [{
        path: 'todoAssignment',
        name: 'todoAssignment',
        component: TodoAssignment
      }]
    }
  ]
})
