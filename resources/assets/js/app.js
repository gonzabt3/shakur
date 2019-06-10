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



// socket io
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

// const SocketInstance = socketio('http://localhost:6001', {
//     query: {
//         token: window.localStorage.getItem('auth')
//     },
// });

import Vue from 'vue';
import App from './App';
import router from './router';

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: SocketInstance,
//   transport : ['websocket'] 

// }));


library.add(faPlusCircle, faStore, faEye, faEyeSlash,faUser,faArrowCircleDown,faTimes,faComment);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'));
Vue.use(VeeValidate);
Vue.use(Croppa);

Vue.use(new VueSocketIO({
  debug: true,
  connection: socketio('https://localhost:6001'), //options object is Optional
})
);


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
