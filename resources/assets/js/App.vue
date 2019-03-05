<template>
  <div id="app">
    <link rel="shortcut icon" type="image/png" href="components/favIcon.png"/>
    <!-- <router-link to="/">Inicio</router-link>
    <router-link to="/main">Main</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style >
body{
    background-image:url('../../../public/images/fadu.jpg');
    height: 100%;
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    }
</style>
