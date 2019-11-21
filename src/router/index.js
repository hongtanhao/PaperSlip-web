import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/modules/register'
import Login from '@/modules/login'
import Index from '@/pages/Index'
import TodoAssignment from '@/components/TodoAssignment'
import EditingAssignment from '@/components/EditingAssignment'
import SetQuestion from '@/components/SetQuestion'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'todoAssignment',
          name: 'todoAssignment',
          component: TodoAssignment
        },
        {
          path: 'editingAssignment',
          name: 'editingAssignment',
          component: EditingAssignment
        },
        {
          path: 'setQuestion',
          name: 'setQuestion',
          component: SetQuestion
        }
      ]
    }
  ]
})
