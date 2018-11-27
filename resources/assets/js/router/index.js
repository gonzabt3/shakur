import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '../components/Inicio';
import Main from '../components/Main';

Vue.use(Router);

export default new Router({
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
  ],
});