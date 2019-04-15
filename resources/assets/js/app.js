// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// BOOTSTRAP
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faStore, faEye, faEyeSlash,faUser,faArrowCircleDown,faTimes,faComment} from '@fortawesome/free-solid-svg-icons'; // nose porque pero hay que poner los iconos aca
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// AXIOS
import axios from 'axios'
import VueAxios from 'vue-axios'

//vue-notification
import Notifications from 'vue-notification'

//vee-validate
import VeeValidate from 'vee-validate'

//croppa
import Croppa from 'vue-croppa';


import Vue from 'vue';
import App from './App';
import router from './router';


library.add(faPlusCircle, faStore, faEye, faEyeSlash,faUser,faArrowCircleDown,faTimes,faComment);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'));
Vue.use(VeeValidate);
Vue.use(Croppa);


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
