import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndex:0,
    treeSelectId:null
  },
  mutations: {
    treeSelect(state,selectId){
        state.treeSelectId=selectId
    }
  },
  actions: {

  }
})
