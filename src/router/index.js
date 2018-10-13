import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import KeywordsManage from '@/components/KeywordsManage'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/manage/keywords',
      name: 'keywordsManage',
      component: KeywordsManage
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
