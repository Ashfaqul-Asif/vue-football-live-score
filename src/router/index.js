import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import eplTable from '@/components/eplTable.vue'
import totalLeagues from '@/components/totalLeagues'
import laliga from '@/views/laliga'
import laliga2 from '@/views/laliga2'
import bundesliga from '@/views/bundesliga'
import Bundesliga2 from '@/views/Bundesliga2'



Vue.use(VueRouter)

const routes = [
 {
   path:'/',
   component:Home
 },
 
  {
    path:'/epltable',
    component:eplTable

  },
   {
    path:'/leagues',
    component:totalLeagues
  },
  {
    path:'/laliga',
    component:laliga
  },
  {
    path:'/Bundesliga',
    component:bundesliga
  },
  {
    path:'/Bundesliga2',
    component:Bundesliga2
  },
  {
    path:'/laliga2',
    component:laliga2
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
