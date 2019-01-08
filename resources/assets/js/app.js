// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// BOOTSTRAP
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faStore, faEye, faEyeSlash,faUser } from '@fortawesome/free-solid-svg-icons'; // nose porque pero hay que poner los iconos aca
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// AXIOS
import axios from 'axios'
import VueAxios from 'vue-axios'

import Vue from 'vue';
import App from './App';
import router from './router';


library.add(faPlusCircle, faStore, faEye, faEyeSlash,faUser);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueAxios, axios)

//pongo lodash
window._ = require('lodash');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // data: {},
});
