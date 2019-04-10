<template>
      <b-container fluid>
        <b-row >
          <b-col>
            <h1 class="valentine">Shakur</h1>
            <h1 v-if="!celular" class="roboto">Tu lugar para</h1>
            <h1 v-if="!celular" class="roboto">{{palabra}}</h1>
          </b-col>
          <b-col >
          <b-card>
            <h1>Inicio</h1>
            <b-form >
                <b-form-group id="userLabel" label="Usuario:">
                  <b-form-input id="user"
                            name="user"
                            :class="{'is-invalid':errors.has('user')}"
                            v-validate="'required'"
                            v-model="form.email"
                            
                            placeholder="Ingresa Usuario">
                  </b-form-input>
                  <b-form-invalid-feedback>Campor requerdio</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group for="pass" label="Contraseña:">
                  <b-form-input id="pass"
                            name="pass"
                            :class="{'is-invalid':errors.has('pass')}"
                            v-validate="'required'"
                            v-model="form.password"
                            
                            :type="typePassword"
                            placeholder="Ingresa Contraseña">
                  </b-form-input>
                    <b-form-invalid-feedback>Campor requerdio</b-form-invalid-feedback>
                     <b-form-checkbox
                      id="checkboxPassword"
                      v-model="checkboxPassword"
                      name="checkboxPassword"
                    >
                    Mostrar Contraseña
                    </b-form-checkbox>
                </b-form-group>
                <b-row>
                  <b-col>
                    <b-row>
                      <b-col class="no-padding-right">
                        <b-button  block @click="onSubmit" variant="primary">Entrar</b-button>
                      </b-col>
                      <b-col>
                        <b-button block  v-b-modal.newUser variant="secondary">Registrarse</b-button>
                      </b-col>
                    </b-row>
                    <b-form-group>
                      <b-link href="#/" disabled>Olvide mi contraseña</b-link>
                    </b-form-group>
                  </b-col>
                </b-row>
          </b-form>
          <b-alert 
            :show="hasErrors" 
            variant="danger" 
            class="text-center">{{ error }}</b-alert>
          </b-card>
          </b-col>
        </b-row>
      <new-user @success="openModalSuccess"></new-user>
      <modal-comunication :title="modalComunication.title" :p1="modalComunication.p1" :p2="modalComunication.p2" :mail-user="modalComunication.mailNewUser" :flag-button="false" :close-out-side="true"></modal-comunication>
      </b-container>
</template>

<script>

import newUser from '../components/NewUser';
import ModalComunication from '../components/modals/ModalComunication';

export default {

  name: 'Inicio',
  components: { newUser,ModalComunication },
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember_me:true,
      },
      modalComunication:{
        mailNewUser:'',
        p1:'',
        p2:'',
        title:''
      },
      celular:false,
      checkboxPassword: false,
      palabra:'aprender',
      arrayPalabras:['estar.','estudiar.','conocer.','leer.','matear.','pensar.','crecer.'],
      error:''
    }
    
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed:{
    typePassword() {
        return this.checkboxPassword ? "text" : "password";
    },
    hasErrors() {
      return this.error != "";
    }
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
    onSubmit(evt) {
      this.$validator.validateAll().then(result => {
        if(result){
          evt.preventDefault();
          this.axios.post('api/auth/login/',this.form)
            .then((response) =>{
              console.log(response);
              sessionStorage.SessionName = "token"
              sessionStorage.setItem("token",response.data.access_token);
              this.$router.push("/main");
        })
        .catch(error => {
          if (error.response.status == 401) {
              this.error = "Usuario o contreseña incorrecta";
              }
          });
        }else{
          this.error = "Por favor, corrija los campos en rojo";
        }
      })
      
    },
    cambiarPalabra(){
          let array=this.arrayPalabras;
          var i=0
          this.palabra=setInterval(function(array){
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
.fondo{
    background-image:url('fadu.jpg');
    height: 100%;
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    }

  .valentine{
  font-family:valentine !important;
  /* font-size: 900%; */
  color:white;
  }

  @media screen and (min-width: 322px) {
    .valentine {
      font-size: 900%;
    }
  }

@media screen and (max-width: 320px) {
    .valentine {
      font-size: 600%;
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
