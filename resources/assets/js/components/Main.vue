<template>
    <b-container  fluid class="no-padding">
        <topbar
        @openPost="openPost" 
        @changeMateria="updateWalls"
        @comunication="comunication"
        ></topbar>
        <!-- VISTA DE CELULAR -->
        <b-row v-if="celular">
            <b-col >
                <b-tabs pills card >
                  <b-tab title="Mi perfil" class="no-padding">
                    <settings-wall ref="settings"
                    :noCerrar="noCerrar"
                    ></settings-wall>
                  </b-tab>
                  <b-tab class="scroll no-padding" active title="Muro">
                    <post-new 
                    @responseGetPosts="getPosts"
                    :id-materia="idMateria"
                    ></post-new>
                    <post-user  
                    @showModalLikes="showModalLikes"
                    @showModalDenuncias="showModalDenuncias" 
                    @getPosts="getPosts"
                    v-for="item in arrayPosts"
                    :postData="item"
                    :key="item.id" 
                    ></post-user>
                    <b-link @click="getPosts(false)">Ver mas publicaciones</b-link>
                  </b-tab>
                  <b-tab title="Eventos" class="no-padding">
                    <events-wall class="form-group"
                    @showModalDenuncias="showModalDenuncias" 
                    :id-materia="idMateria"
                    ref="eventWall"
                    ></events-wall>
                  </b-tab>
                  <b-tab
                    title="Archivos"
                    class="no-padding">
                    <doc-wall 
                      @showModalDenuncias="showModalDenuncias" 
                      ref="docWall"
                      :id-materia="idMateria"></doc-wall>
                    </b-tab>
                </b-tabs>
            </b-col>
        </b-row>
        <!-- FIN VISTA DE CELULAR -->
        <b-row >
            <b-col cols="3" v-if="!celular" >
                <settings-wall ref="settings"
                :noCerrar="noCerrar"
                ></settings-wall>
                        <!-- <notification></notification> -->

            </b-col>
            <b-col sm="5" class="scroll" v-if="!celular" >
                <post-new 
                @responseGetPosts="getPosts"
                :id-materia="idMateria"
                ></post-new>
                <post-user 
                @showModalLikes="showModalLikes"
                @showModalDenuncias="showModalDenuncias" 
                @getPosts="getPosts"
                v-for="item in arrayPosts"
                :postData="item"
                :key="item.id" 
                ></post-user>
                <b-link @click="getPosts(false)">Ver mas publicaciones</b-link>
            </b-col>
            <b-col v-if="!celular" >
                <events-wall class="form-group"
                @showModalDenuncias="showModalDenuncias"
                :id-materia="idMateria"
                ref="eventWall"
                ></events-wall>
                <doc-wall
                @showModalDenuncias="showModalDenuncias" 
                ref="docWall"
                :id-materia="idMateria"
                ></doc-wall>
            </b-col>
        </b-row>
        <modal-comunication ref="comunicationModal" @openMiPerfil="openMiPerfil" :noCerrar="noCerrar" :mailUser="modalComunication.mailNewUser" :p1="modalComunication.p1" :p2="modalComunication.p2" :title="modalComunication.title" :flag-button="true" :close-out-side="false" ></modal-comunication>
        <modal-likes  :id="idPostLikeModal" :type="typeLikeModal"></modal-likes>
        <modal-denuncias :id="idItemDenuncia" :type="typeItemDenuncia"></modal-denuncias>
    </b-container>
</template>

<script>
import Notification from '../components/common/NotificationTest';
const PostUser = () => import('../components/PostUser');
import EventsWall from '../components/EventsWall';
import DocWall from '../components/DocWall';
const SettingsWall = () => import('../components/SettingsWall');
const PostNew = () => import('../components/PostNew');
const Topbar =  () => import('../components/Topbar');
const ModalComunication = () => import('../components/modals/ModalComunication');
const ModalLikes = () => import('../components/modals/ModalLikes');
const ModalDenuncias = () => import('../components/modals/ModalDenuncias');

export default {
  name: 'Main',
  components: { Topbar, PostUser, EventsWall, DocWall, SettingsWall, PostNew ,ModalComunication, ModalLikes ,Notification,ModalDenuncias},
  data(){
      return{
          arrayPosts:[],
          idMateria:null, //se cambia en el metodo update  walls,
          idPaginado:0,//last id para el paginado
          celular:false,
          idPostLikeModal:'',
          typeLikeModal:'',
          idItemDenuncia:'',
          typeItemDenuncia:'',
          modalComunication:{
            mailNewUser:'',
            p1:'',
            p2:'',
            title:''
          },
          noCerrar:false,
           isConnected: false,
           socketMessage: '' 
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
        // this.getPosts();
  },
  methods:{
    showModalLikes(idPost,type){
     
      this.typeLikeModal=type
      this.idPostLikeModal=idPost
      // console.log(idPost)

      this.$root.$emit('bv::show::modal','modalLikes')
     },
     showModalDenuncias(idItem,type){
        this.typeItemDenuncia=type
        this.idItemDenuncia=idItem
        this.$root.$emit('bv::show::modal','modalDenuncias')
     },
    setHeader(){
        this.axios.defaults.headers.common['Accept'] = 'application/json'; 
        this.axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token'); 
    },
    //   TRAE TODAS LAS PUBLICACIONES
      getPosts(flagNewPost=false){
        // flagNewPOST false es que importa el paginado
        // flagNewPOST true no importa el paginado

        // tambien viene el flag en true cuando se borrar un post
        //el flag en true es cuando hay uno nuevo post,si es falso es que se le esta dando click al "var mas publicaciones"
        //reseteo el idPaginado para traer todos los post comunmente
        if(flagNewPost){
          this.idPaginado=0;
        }

        //vacio el array para que recarle los post
        if(this.idPaginado==0){
          this.arrayPosts=[]
        }
        
        let url='api/publicacion/'+this.idMateria+'/'+this.idPaginado;

        this.axios.get(url)
                    .then(({data}) => {
                      if(data.length>0){
                        this.arrayPosts=_.union(this.arrayPosts,data);
                        this.idPaginado=data[data.length-1].id
                      }
                    });
      },
    //   METODO QUE UPDATEA LOS WALLS SEGUN LA MATERIA
      updateWalls(val){
            this.idMateria=val;
            this.getPosts(true);
            this.$refs.eventWall.getEventos(val);
            this.$refs.docWall.getDocs(val);
        },
    handleResize() {
        let ancho = window.innerWidth;
        // this.window.height = window.innerHeight;

        //vista celular de  un iphone 6 para arriba
        if(ancho<=576){              
                this.celular=true
            }else{
              this.celular=false
          }
    },
    comunication(noCerrar=false){
      this.modalComunication.p1='Por favor selecciona las materias que estas cursando'
      this.modalComunication.p2='shakur.'
      this.modalComunication.mailNewUser=''
      this.modalComunication.title='Tu perfil'
      this.noCerrar=noCerrar
      this.$root.$emit('bv::show::modal','comunicationModal')
    },
    openMiPerfil(noCerrar=false){
      this.noCerrar=noCerrar;
      this.$refs.settings.showModal();
    },
    openPost(idPost){
      this.arrayPosts=[]
       this.axios.get("api/publicacion/"+idPost)
        .then(({data}) => {
          this.arrayPosts.push(data)
        })
    }
  },
   sockets: {
    connect() {
      // Fired when the socket connects.
                  console.log('socket connected')

      this.isConnected = true;
    },

    disconnect() {
      console.log("no conected");
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data
    }
  },
};
</script>

<style >

.no-padding{
    padding-left: 0px;
    padding-right: 0px;
}

.scroll {
    overflow-y: scroll;
    /*  ARREGLAR ESTA NEGRDADA */
  height: 100vh;
}

/* .white-background {
    background-color: #fff;
} */
.card-header{
    background-color: #ffffff !important;
}


/* HARDCODEO EL PADING DE LOS TABS PARA AJUSTAR EN LAS PANTALLAS MENORES A IPHONE 5 */
@media screen and (max-width: 320px) {
    .nav-link {
    padding-left: 10px !important; 
    padding-right: 10px !important;
  }
  }

/* LE SACO LO ANTERIOR EN LA PANTALLAS MAYORES A LAS DE EL IPHONE 5 */
  @media screen and (min-width: 321px) {
    .nav-link {
    
  }
  }


</style>
