import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTyperPlugin from 'vue-typer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false
Vue.use(VueTyperPlugin)
Vue.use(VueFullPage);

new Vue({
  created () {
      AOS.init()},
  vuetify,
  render: h => h(App)
}).$mount('#app')
