import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/modules/register'
import Login from '@/modules/login'
import Index from '@/pages/Index'
import Question from '@/modules/question'
import Answer from '@/modules/answer'
import TodoAssignment from '@/components/TodoAssignment'
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
          path: 'list',
          name: 'list',
          component: TodoAssignment
        },
        {
          path: 'question',
          name: 'question',
          component: Question
        },
        {
          path: 'questionDetail',
          name: 'questionDetail',
          component: () => import('../modules/question/QuestionDetail.vue')
        },
        {
          path: 'answer',
          name: 'answer',
          component: Answer
        },
        {
          path: 'check',
          name: 'check',
          component: () => import('../modules/answer/QueryAnswerContent.vue')
        },
        {
          path: 'checkAnswer',
          name: 'checkAnswer',
          component: () => import('../modules/answer/CheckAnswerContent.vue')
        }
      ]
    }
  ]
})
