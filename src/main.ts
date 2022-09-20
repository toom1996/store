import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@/api/mock/index'
import router from '@/router/router'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
