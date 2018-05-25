// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueRouter from 'vue-router';
import axios from 'axios';
import {store} from './store/store';
import VueScroller from 'vue-scroller';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueScroller);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
