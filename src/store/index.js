import Vue from 'vue'
import Vuex from 'vuex'
import assignment from './assignmnent/'
import user from './user/'
import editor from './editor/'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    assignment,
    user,
    editor
  }
})
