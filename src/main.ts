import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import _ from "lodash"
import 'vfonts/Lato.css'

const app = createApp(App)
app.config.globalProperties.lodash = _
app.use(createPinia())
app.use(router)

app.mount('#app')
