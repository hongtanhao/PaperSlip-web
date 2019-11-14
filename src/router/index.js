import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import TodoAssignment from '@/components/TodoAssignment'
import EditingAssignment from '@/components/EditingAssignment'
import SetQuestion from '@/components/SetQuestion'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
