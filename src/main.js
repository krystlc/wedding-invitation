import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import './style/app.styl'
Vue.use(Vuetify)

import VueFirestore from 'vue-firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFirestore)
firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABSE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID
})

export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// eslint-disable-next-line
console.error('nam, stop checking my code')