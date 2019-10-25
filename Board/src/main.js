import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import routes from './routes'

import VModal from 'vue-js-modal'

Vue.use(VueRouter);
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

Vue.prototype.$updatableTicket = null;

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
