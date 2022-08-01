import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    accessToken: null,
    carts: []
  },
  getters: {
  },
  mutations: {
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken
    },
    logout: (state) => {
      state.accessToken = null
    },
    addCart: (state, cart) => {
      state.carts.push(cart)
    }
  },
  actions: {
    setAccessToken ({ commit }, token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      localStorage.setItem('accessToken', token)
      commit('updateAccessToken', token)
    },
    fetchAccessToken ({ commit }) {
      commit('updateAccessToken', localStorage.getItem('accessToken'))
    },
    logout ({ commit }) {
      axios.defaults.headers.common.Authorization = ''
      console.log('salio?')
      localStorage.removeItem('accessToken')
      commit('logout')
    },
    addCart ({ commit }, cart) {
      commit('addCart', cart)
    }
  },
  modules: {
  }
})
