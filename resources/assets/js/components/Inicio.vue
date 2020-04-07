<template>
      <b-container fluid>
        <b-row v-if="!celular" class="margin-20">
          <b-col>
            <h1 class="valentine  colorCeleste text-center ">Shakur</h1>
            <h1 v-if="!celular" class="colorCeleste roboto text-center">Tu lugar para</h1>
            <h1 v-if="!celular" class="colorCeleste roboto text-center">{{palabra}}</h1>
            <b-link v-if="!celular" href="https://www.youtube.com/watch?v=ttBAlc0ey8I"><h2 class="text-center"><b-badge  variant="primary">¿Que es Shakur?</b-badge></h2></b-link>
          </b-col>
          <b-col v-if="celular" class="text-center">
              <b-link href="https://www.youtube.com/watch?v=ttBAlc0ey8I"><h2><b-badge  variant="primary">¿Que es Shakur?</b-badge></h2></b-link>
          </b-col>
          <b-col >
          <b-card>
            <h1>Inicio</h1>
            <login/>
          </b-card>
          </b-col>
        </b-row>
        <inicio-celular v-if="celular" ></inicio-celular>
        <modal-reset-password></modal-reset-password>
      <new-user @success="openModalSuccess"></new-user>
      <modal-comunication :title="modalComunication.title" :p1="modalComunication.p1" :p2="modalComunication.p2" :mail-user="modalComunication.mailNewUser" :flag-button="false" :close-out-side="true"></modal-comunication>
      </b-container>
</template>

<script>
const InicioCelular = () => import('./InicioCelular');
const Login = () => import('../components/common/Login');
const newUser = () => import('../components/NewUser');
const ModalResetPassword = () => import('../components/modals/ModalResetPassword');
const ModalComunication = () => import('../components/modals/ModalComunication');
const MultiLogin = () => import('../components/common/MultiLogin');

// import newUser from '../components/NewUser';
// import ModalResetPassword from '../components/modals/ModalResetPassword';
// import ModalComunication from '../components/modals/ModalComunication';

export default {
  name: 'Inicio',
  components: {Login,InicioCelular, newUser,ModalComunication,ModalResetPassword,MultiLogin},
  data() {
    return {
      modalComunication:{
        mailNewUser:'',
        p1:'',
        p2:'',
        title:''
      },
      celular:false,
      palabra:'aprender',
      arrayPalabras:['estar.','estudiar.','conocer.','leer.','matear.','pensar.','crecer.'],
    }
    
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  //LOGIN
  methods: {
    openModalSuccess(mail){
      this.modalComunication.mailNewUser=mail
      this.modalComunication.p1='Gracias por registrarte en Shakur'
      this.modalComunication.p2='Te enviaremos un mail de confirmacion a'
      this.modalComunication.title='Genial'
      this.$root.$emit('bv::show::modal','comunicationModal')
    },
    cambiarPalabra(){
          let array=this.arrayPalabras;
          var i=0
          setInterval(function(array){
              if(i>array.length-1){
                i=0
              }
              this.palabra=array[i]
              // console.log(i);
              i+=1              
          }.bind(this),1500,array);
        },
    handleResize() {
        let ancho = window.innerWidth;
        // this.window.height = window.innerHeight;
  
        if(ancho<=576){              
                this.celular=true
            }
    }
  },
  beforeMount(){
    this.cambiarPalabra();
  }
};
</script>

<style scoped>

/* @font-face {
  font-family: 'valentine';
  src:  url('myfont.woff2') format('woff2'),
        url('myfont.woff') format('woff');
} */
@import url('https://fonts.googleapis.com/css?family=Pacifico');


  .valentine{
  font-family:valentine,Pacifico !important;
  /* font-size: 900%; */
  /* color:white; */
  }

.colorCeleste{
    color:#00a2b9 !important;

}
  .margin-20{
    margin-top: 20px;
  }

  /* PANTALASS GRANDES COMPU */
  @media screen and (min-width: 401px) {
    .valentine {
      font-size: 900%;
    }
  }

/* PANTALLAS MEDIANAS IPHONE X */
@media screen and (min-width: 321px) and (max-width: 400px) {
    .valentine {
      font-size: 650%;
    } 
   }

  /* PANTALLAS MUY CHICAS  IPHONE 5S */
  @media screen and (max-width: 320px) {
    .valentine {
      font-size: 500%;
    } 
   }

  .roboto{
    font-family:'Roboto:900i', sans-serif;
    font-size: 400%;
    color:white;
  }

  .no-padding-right{
    padding-right: 0px;
  }
</style>
