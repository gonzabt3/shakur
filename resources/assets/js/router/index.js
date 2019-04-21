import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '../components/Inicio';
import Main from '../components/Main';
import ResetPassword from '../components/views/ResetPassword';


Vue.use(Router);

export default new Router({
  // SACA  EL # EN LA URL
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
    },
    {
      path:'/resetPassword',
      name:'ResetPassword',
      component:ResetPassword
    }
  ],
});
