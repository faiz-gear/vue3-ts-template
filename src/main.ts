import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import registerApp from './global'
import { registerStore } from './store'
import 'normalize.css'
import './style/index.scss'
// import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)
registerApp(app)
app.use(createPinia())
registerStore()

app.use(router).mount('#app')
