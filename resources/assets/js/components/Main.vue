<template>
    <b-container  fluid class="no-padding">
        <topbar  
        @changeMateria="updateWalls"
        ></topbar>
        <!-- VISTA DE CELULAR -->
        <b-row v-if="celular">
            <b-col >
                <b-tabs pills card lazy class="white">
                  <b-tab title="Mi perfil">
                    <settings-wall></settings-wall>
                  </b-tab>
                  <b-tab class="scroll" title="Muro">
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
                  </b-tab>
                  <b-tab title="Eventos">
                    <events-wall class="form-group"
                    :id-materia="idMateria"
                    ref="eventWall"
                    ></events-wall>
                  </b-tab>
                  <b-tab
                    title="Archivos">
                    <doc-wall 
                      ref="docWall"
                      :id-materia="idMateria"></doc-wall>
                    </b-tab>
                </b-tabs>
            </b-col>
        </b-row>
        <!-- FIN VISTA DE CELULAR -->
        <b-row >
            <b-col cols="3" v-if="!celular" >
                <settings-wall></settings-wall>
            </b-col>
            <b-col sm="5" class="scroll" v-if="!celular" >
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
            <b-col v-if="!celular" >
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
    </b-container>
</template>

<script>

import PostUser from '../components/PostUser';
import EventsWall from '../components/EventsWall';
import DocWall from '../components/DocWall';
import SettingsWall from '../components/SettingsWall';
import PostNew from '../components/PostNew';
import Topbar from '../components/Topbar';


export default {
  name: 'Main',
  // components:{
  //   PostNew:()=> import("../components/PostNew"),
  //   SettingsWall:() => import('../components/SettingsWall'),
  //   DocWall:() => import('../components/DocWall'),
  //   EventsWall:() => import('../components/EventsWall'),
  //   PostUser:() => import('../components/PostUser'),
  //   Topbar:() => import('../components/Topbar'),
  // },
  components: { Topbar, PostUser, EventsWall, DocWall, SettingsWall, PostNew },
  data(){
      return{
          arrayPosts:[],
          idMateria:null, //se cambia en el metodo update  walls,
          celular:false
        }
  },
   created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
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
        },
    handleResize() {
        let ancho = window.innerWidth;
        // this.window.height = window.innerHeight;
  
        if(ancho<=576){              
                this.celular=true
            }
    },
    // ABRIR MODALS
    openModalPerfil(){
    }
  }
};
</script>

<style scoped>

.no-padding{
    padding-left: 0px;
    padding-right: 0px;
}

.scroll {
    overflow-y: scroll;
    /*  ARREGLAR ESTA NEGRDADA */
  height: 100vh;
}

</style>
