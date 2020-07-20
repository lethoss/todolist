import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import todoActions from '@/store/todoActions.js'
import messages from '@/store/messages.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  plugins: [createPersistedState()],
  mutations: {
  },
  getters: {
  },
  actions: {
  },
  modules: {
    todoActions, messages
  }
})
