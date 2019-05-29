import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '../components/Inicio';
import Main from '../components/Main';
import ResetPassword from '../components/views/ResetPassword';
import UserActivate from '../components/views/UserActivate.vue';
import NotFound from '../components/views/NotFound.vue';


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
      path: '/userActivate',
      name: 'UserActivate',
      component: UserActivate,
    },
    {
      path: '/notFound',
      name: 'NotFound',
      component: NotFound,
    },
    {
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
