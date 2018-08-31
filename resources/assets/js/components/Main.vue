<template>
    <div >
        <topbar></topbar>
        <b-row >
            <b-col cols="3">
                <settings-wall></settings-wall>
            </b-col>
            <b-col cols="5">
                <post-new></post-new>
                <post-user v-bind:postData="objectPost"></post-user>
            </b-col>
            <b-col>
                <events-wall class="form-group"></events-wall>
                <doc-wall></doc-wall>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import Topbar from '../components/Topbar';
import PostUser from '../components/PostUser';
import EventsWall from '../components/EventsWall';
import DocWall from '../components/DocWall';
import SettingsWall from '../components/SettingsWall';
import PostNew from '../components/PostNew';

export default {
  name: 'Main',
  components: { Topbar, PostUser, EventsWall, DocWall, SettingsWall, PostNew },
  data(){
      return{
          objectPost:{ 
            name: 'Pepe San martin',
            comentario:'la concha del pato',
            fecha:'20 de agosto 2055',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jos%C3%A9_de_San_Mart%C3%ADn_%28retrato%2C_c.1828%29.jpg/457px-Jos%C3%A9_de_San_Mart%C3%ADn_%28retrato%2C_c.1828%29.jpg',
            likes:7 
            }
      }
  }
};
</script>

<style>

</style>
