import { createApp } from 'vue'
import router from './router'
import axios from 'axios'
import store from './store'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.min.css'
import './tailwind.css'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.baseURL = 'http://localhost:80/api/'

store.dispatch('fetchAccessToken')
axios.defaults.headers.common.Authorization = `Bearer ${store.state.accessToken}`

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      store.dispatch('logout')
      router.push('/login')
    }
    return Promise.reject(error)
  }
);

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
