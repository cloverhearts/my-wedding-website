import Vue from 'vue'
import VueMoment from 'vue-moment'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/firebase'

Vue.config.productionTip = false

Vue.use(VueMoment);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
