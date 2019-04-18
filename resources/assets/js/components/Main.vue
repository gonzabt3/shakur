<template>
    <b-container  fluid class="no-padding">
        <topbar  
        @changeMateria="updateWalls"
        @comunication="comunication"
        ></topbar>
        <!-- VISTA DE CELULAR -->
        <b-row v-if="celular">
            <b-col >
                <b-tabs pills card  class="white">
                  <b-tab title="Mi perfil">
                    <settings-wall ref="settings"></settings-wall>
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
                <settings-wall ref="settings"></settings-wall>
            </b-col>
            <b-col sm="5" class="scroll" v-if="!celular" >
                <post-new 
                @responseGetPosts="getPosts"
                :id-materia="idMateria"
                ></post-new>
                <post-user 
                @showModalLikes="showModalLikes" 
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
        <modal-comunication ref="comunicationModal" @openMiPerfil="openMiPerfil" :p1="modalComunication.p1" :p2="modalComunication.p2" :title="modalComunication.title" :flag-button="true" :close-out-side="false" ></modal-comunication>
        <modal-likes  :id="idPostLikeModal" :type="typeLikeModal"></modal-likes>
    </b-container>
</template>

<script>

import PostUser from '../components/PostUser';
import EventsWall from '../components/EventsWall';
import DocWall from '../components/DocWall';
import SettingsWall from '../components/SettingsWall';
import PostNew from '../components/PostNew';
import Topbar from '../components/Topbar';
import ModalComunication from '../components/modals/ModalComunication'
import ModalLikes from '../components/modals/ModalLikes'

export default {
  name: 'Main',
  components: { Topbar, PostUser, EventsWall, DocWall, SettingsWall, PostNew ,ModalComunication, ModalLikes},
  data(){
      return{
          arrayPosts:[],
          idMateria:null, //se cambia en el metodo update  walls,
          celular:false,
          idPostLikeModal:'',
          typeLikeModal:'',
          modalComunication:{
            mailNewUser:'',
            p1:'',
            p2:'',
            title:''
          },   
        }
  },
   created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  beforeMount(){
    this.setHeader();
  }, 
  mounted(){
        this.getPosts();
  },
  methods:{
    showModalLikes(idPost,type){
     
      this.typeLikeModal=type
      this.idPostLikeModal=idPost
      // console.log(idPost)

      this.$root.$emit('bv::show::modal','modalLikes')
     },
    setHeader(){
        this.axios.defaults.headers.common['Accept'] = 'application/json'; 
        this.axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token'); 
    },
    //   TRAE TODAS LAS PUBLICACIONES
      getPosts(){
        //vacio el array para que recarle los post
        this.arrayPosts=[]
        // console.log(sessionStorage.getItem('token'));
        this.axios.get('api/publicacion/'+this.idMateria)
                    .then(({data}) => {
                      // console.log(data);
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
    comunication(){
      this.modalComunication.p1='Por favor selecciona las materias que estas cursando'
      this.modalComunication.p2='shakur.'
      this.modalComunication.title='Tu perfil'
      this.$root.$emit('bv::show::modal','comunicationModal')

    },
    openMiPerfil(){
        this.$refs.settings.showModal();
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
