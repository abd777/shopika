import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shopika from '@/views/Shopika'

import firebase from 'firebase'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      var currentUser = firebase.auth().currentUser
      if (currentUser) {
        next('/shopika')
      } else {
        next()
      }
    }
  }, {
    path: '/shopika',
    name: 'Shopika',
    component: Shopika,
    beforeEnter: (to, from, next) => {
      var currentUser = firebase.auth().currentUser
      if(currentUser) {
        next()
      } else {
        next('/')
      }
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router