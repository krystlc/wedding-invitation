import Vue from 'vue'
import Router from 'vue-router'
import Match from './views/Match'
import Details from './views/Details'
import Songs from './views/Songs'
import Activities from './views/Activities'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'match',
      component: Match
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '*',
      redirect: '/match'
    }
  ]
})
