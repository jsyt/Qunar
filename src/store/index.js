import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    changeCityMt (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (error) {}
    }
  }
})
