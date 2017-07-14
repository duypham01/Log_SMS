import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import dataTableLogSms from '@/components/dataTableLogSms'
import dataTableChargeHist from '@/components/dataTableChargeHist'
import dataTableTodo from '@/components/dataTableTodo'
import dataTableHistoryTodo from '@/components/dataTableHistoryTodo'
import dataTableHistoryAct from '@/components/dataTableHistoryAct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tra_cuu_mo_mt',
      name: 'dataTableLogSms',
      component: dataTableLogSms
    },
    {
      path: '/lich_su',
      name: 'dataTableChargeHist',
      component: dataTableChargeHist
    },
    {
      path: '/thong_tin',
      name: 'dataTableTodo',
      component: dataTableTodo
    },
    {
      path: '/lich_su_giao_dich',
      name: 'dataTableHistoryTodo',
      component: dataTableHistoryTodo
    },
    {
      path: '/lich_su_tac_dong',
      name: 'dataTableHistoryAct',
      component: dataTableHistoryAct
    }
  ]
})
