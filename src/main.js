import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from "@/router";
import axios from 'axios'
Vue.prototype.$axios = axios

// Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
