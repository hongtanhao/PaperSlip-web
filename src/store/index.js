import Vue from 'vue'
import Vuex from 'vuex'
import assignment from './assignmnent/'
import user from './user/'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    assignment,
    user
  }
})
