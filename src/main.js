import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueClipboard from 'vue3-clipboard'



axios.defaults.baseURL = 'https://pokeapi.co/api/v2'
createApp(App).use(store).use(router).use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
}).mount('#app')