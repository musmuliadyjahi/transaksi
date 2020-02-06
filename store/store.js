import menu from './menu'
import clients from './clients'
import transaksi from './transaksi'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  modules: {
    menu,
    clients,
    transaksi
  }
})
