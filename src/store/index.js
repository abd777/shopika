import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login(state,p) {
      alert('its called')
      firebase.auth().signInWithEmailAndPassword(p.email,p.password)
      .then(res=>{
        console.log('user',res)
      }).catch(err=>{
        console.log('err in login',err)
      })
    }
  },
  modules: {
  }
})
Vue.prototype.$store = store
export default store