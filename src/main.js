import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import debounce from "@/helpers/debounce.js";

const app = createApp(App)

app.use(router);

app.directive('debounce', (el,binding) => debounce(el,binding));

app.mount('#app');
