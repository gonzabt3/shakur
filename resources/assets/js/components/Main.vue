<template>
    <div >
        <topbar></topbar>
        <b-row >
            <b-col cols="3">
                <settings-wall></settings-wall>
            </b-col>
            <b-col cols="5" class="scroll">
                <post-new 
                @responseGetPosts="getPosts"
                ></post-new>
                <!-- tira error por un bug de la verga del eslint -->
                <post-user  
                v-for="item in arrayPosts"
                :postData="item" 
                ></post-user>
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
          arrayPosts:[],
      }
  },
  mounted(){
        this.getPosts();
  },
  methods:{
    //   TRAE TODAS LAS PUBLICACIONES
      getPosts(){
        //vacio el array para que recarle los post
        this.arrayPosts=[]
        this.axios.get('api/publicacion')
                    .then(({data}) => {
                        data.forEach(post => {
                            let postAux={
                                idPost:post.id,
                                name: 'Pepe San martin',
                                comentario:'la concha del pato',
                                fecha:'20 de agosto 2055',
                                imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jos%C3%A9_de_San_Mart%C3%ADn_%28retrato%2C_c.1828%29.jpg/457px-Jos%C3%A9_de_San_Mart%C3%ADn_%28retrato%2C_c.1828%29.jpg',
                                likes:7 
                            }
                            postAux.comentario=post.texto,
                            postAux.fecha=post.created_at
                            this.arrayPosts.push(postAux);
                        });
                    });
      }
  }
};
</script>

<style scoped>

.scroll {
    overflow-y: scroll;
    /*  ARREGLAR ESTA NEGRDADA */
    height: 500px;
}

</style>
