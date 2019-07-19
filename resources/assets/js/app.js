// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// BOOTSTRAP
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faStore, faEye, faEyeSlash,faUser,faArrowCircleDown,faTimes,faComment,faBell} from '@fortawesome/free-solid-svg-icons'; // nose porque pero hay que poner los iconos aca
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

//vue-toasted
import Toasted from 'vue-toasted';

// pusher
import pusher from 'pusher-js';

// vue-authenticate
import VueAuthenticate from 'vue-authenticate'

//vue-the-mask
import VueTheMask from 'vue-the-mask'

import Vue from 'vue';
import App from './App';
import router from './router';

library.add(faPlusCircle, faStore, faEye, faEyeSlash,faUser,faArrowCircleDown,faTimes,faComment,faBell);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'));
Vue.use(VeeValidate);
Vue.use(Croppa);
Vue.use(Toasted)
Vue.use(VueTheMask)
// Vue.use(pusher);
// Vue.use(Echo);
import Echo from 'laravel-echo';

Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:8000', // Your API domain
  
  providers: {
    github: {
      name: 'github',
      url: '/auth/github',
      authorizationEndpoint: 'https://github.com/login/oauth/authorize',
      // redirectUri: getRedirectUri(),
      // optionalUrlParams: ['scope'],
      // scope: ['user:email'],
      // scopeDelimiter: ' ',
      oauthType: '2.0',
      popupOptions: { width: 1020, height: 618 },
      redirectUri:'http:/localhost:8000/main'
    },
    google: {
      name: 'google',
      url: '/auth/google',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      // redirectUri: getRedirectUri(),
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display'],
      scope: ['profile', 'email'],
      client_id:"asdd",
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 452, height: 633 },
      redirectUri:window.location.origin

    },
  }
})

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
