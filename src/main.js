import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTyperPlugin from 'vue-typer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
import CursorFx from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
import ParticlesBg from "particles-bg-vue";
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(VueTyperPlugin);
Vue.use(VueFullPage);
Vue.use(CursorFx);
Vue.use(ParticlesBg);

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faSpeakerDeck, faKaggle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSpeakerDeck, faKaggle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  created () {
      AOS.init()},
  vuetify,
  render: h => h(App)
}).$mount('#app')
