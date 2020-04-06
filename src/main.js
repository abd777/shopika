import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyCz4j9BTKlCSEkVqhx7ZlxjQ2g5pEZorGU",
  authDomain: "yttutorials-19a28.firebaseapp.com",
  databaseURL: "https://yttutorials-19a28.firebaseio.com",
  projectId: "yttutorials-19a28",
  storageBucket: "yttutorials-19a28.appspot.com",
  messagingSenderId: "214665091880",
  appId: "1:214665091880:web:3fdc4e0eaee917eb770e1d"
};
var VueApp = new Vue({
  router,
  store,
  render: h => h(App)
})
Vue.prototype.$fb = firebase
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('logged in', user)
  } else {
    console.log('logged out')
  }
  VueApp.$mount('#app')
})