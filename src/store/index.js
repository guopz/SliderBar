import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  count: '0'
};

let mutations = {
  increment (state, obj) {
    state.count = obj.index
  }
};

export default new Vuex.Store({
  state,
  mutations
})
