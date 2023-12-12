import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import './style.scss'
import 'lib-flexible'

createApp(App).use(router).mount('#app')
