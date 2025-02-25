import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 
// Import fontawsome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

 
// Components
// Import component 
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'

// use globally
Vue.component('app-header',header)
Vue.component('app-footer',footer) 
Vue.use(BootstrapVue, IconsPlugin )
Vue.use(VueAxios, axios)
  
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
