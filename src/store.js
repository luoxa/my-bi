import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndex:0,
    treeSelectList:{}
  },
  mutations: {
    treeSelect(state,payload){
        state.treeSelectList[payload.id]=payload
    }
  },
  actions: {

  }
})
