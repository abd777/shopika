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
      var _ = this._vm
      _.$swal.showLoading()
      _.$fb.auth().signInWithEmailAndPassword(p.email,p.password)
      .then(res=>{
        console.log('user',res)
        _.$swal.close()
      }).catch(err=>{
        console.log('err in login',err)
        _.$swal({
          text:err.message,
          icon:'error'
        })
      })
    }
  },
  modules: {
  }
})
Vue.prototype.$store = store
export default store