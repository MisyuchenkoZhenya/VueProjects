import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import VueRouter from 'vue-router'
import {routes} from './routes'
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-65b99.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
})
