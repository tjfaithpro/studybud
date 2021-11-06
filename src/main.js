import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons  } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import  VueEditor from 'vue2-quill-editor'

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

Vue.use(BootstrapVue, IconsPlugin, BootstrapVueIcons  )
Vue.use(VueAxios, axios)
Vue.use(VueEditor)

  
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted(){
    AOS.init()
  },
}).$mount('#app')
 