import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import globalMixin from "./globalMixin"

createApp(App).mixin(globalMixin).use(store).use(router).mount('#app')