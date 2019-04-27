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
      //el probblema son los child de los path
      path:'/resetPassword/:token/:email',
      name:'ResetPassword',
      component:ResetPassword,
      props:true,
      meta: { 
        auth:false 
      } 
    }
  ],
});
