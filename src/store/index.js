import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:''
  },
  mutations: {
    updateId(state,id){
      state.id = id
    }
  },
  actions: {
  },
  modules: {
  }
})
