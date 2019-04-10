<template>
    <b-container  id="app" fluid class="no-padding-main">
      <link rel="shortcut icon" type="image/png" href="components/favIcon.png"/>
      <!-- <router-link to="/">Inicio</router-link>
      <router-link to="/main">Main</router-link> -->
      <router-view></router-view>
      <notifications group="foo" />
    </b-container>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style >
body{
    background-image:url('../../../public/images/fadu.jpg');
  height: 100vh;
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    }

  .no-padding-main{
    padding-left: 0px;
    padding-right: 0px;
  }
</style>
