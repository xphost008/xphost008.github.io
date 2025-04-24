import './assets/main.css'
import './assets/highlight.scss'
import 'highlight.js/styles/stackoverflow-dark.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { addTitleStyle, hljsVuePlugin } from './logic/highlight'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(hljsVuePlugin)
addTitleStyle(app)
app.mount('#app')
