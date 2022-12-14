import { createApp } from 'vue';
import './style.css';
import './output.css';
import router from './router/index.js';
import App from './App.vue';

createApp(App).use(router).mount('#app');
