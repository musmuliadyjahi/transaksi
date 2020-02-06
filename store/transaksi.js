const transaksi = {
  namespaced: true,
  state: {
    listTransaksi: [
      {
        id: 1,
        name: 'Musmuliady Jahi',
        menu: 'Ayam Bakar',
        price: 10000
      },
      {
        id: 2,
        name: 'Edo',
        menu: 'Ikan Goreng',
        price: 12000
      },
      {
        id: 3,
        name: 'Akmal',
        menu: 'Gado-gado',
        price: 8000
      }
    ]
  },
  mutations: {
    ADD_ORDERAN: (state, payload) => {
      state.listTransaksi.push(payload)
    }
  },
  actions: {
    save_orderan({ commit, rootState }, payload) {
      rootState.isLoading = true
      setTimeout(() => {
        commit('ADD_ORDERAN', payload)
        rootState.isLoading = false
      }, 1000)
    }
  }
}

export default transaksi
