import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import logSms from '@/components/logSms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/logsms',
      name: 'logSms',
      component: logSms
    }
  ]
})
