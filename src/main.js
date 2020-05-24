import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTyperPlugin from 'vue-typer'

Vue.config.productionTip = false
Vue.use(VueTyperPlugin)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
