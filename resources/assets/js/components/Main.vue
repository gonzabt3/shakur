<template>
    <div >
        <topbar 
        @changeMateria="updateWalls"
        ></topbar>
        <b-row >
            <b-col cols="3">
                <settings-wall></settings-wall>
            </b-col>
            <b-col cols="5" class="scroll">
                <post-new 
                @responseGetPosts="getPosts"
                :id-materia="idMateria"
                ></post-new>
                <post-user  
                @getPosts="getPosts"
                v-for="item in arrayPosts"
                :postData="item"
                :key="item.id" 
                ></post-user>
            </b-col>
            <b-col>
                <events-wall class="form-group"
                :id-materia="idMateria"
                ref="eventWall"
                ></events-wall>
                <doc-wall 
                ref="docWall"
                :id-materia="idMateria"
                ></doc-wall>
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
          idMateria:null //se cambia en el metodo update  walls
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
        this.axios.defaults.headers.common['Accept'] = 'application/json'; 
        this.axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token'); 
        // console.log(sessionStorage.getItem('token'));
        this.axios.get('api/publicacion/'+this.idMateria)
                    .then(({data}) => {
                        this.arrayPosts=data;

                    });
      },
    //   METODO QUE UPDATEA LOS WALLS SEGUN LA MATERIA
      updateWalls(val){
        this.idMateria=val;
        this.getPosts();
        this.$refs.eventWall.getEventos(val);
        this.$refs.docWall.getDocs(val);
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
