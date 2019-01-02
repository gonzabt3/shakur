<template>
      <b-container>
        <b-row >
          <b-col>
            <h1 class="valentine">Shakur</h1>
            <h1 class="roboto">Tu lugar para</h1>
            <h1 class="roboto">{{palabra}}</h1>
          </b-col>
          <b-col >
          <b-card>
            <h1>Inicio</h1>
            <b-form @submit="onSubmit">
                <b-form-group id="userLabel" label="Usuario:">
                <b-form-input id="user"
                          v-model="form.email"
                          required
                          placeholder="Ingresa Usuario">
                </b-form-input>
                </b-form-group>
                <b-form-group fpr="pass" label="Contraeña:">
                <b-form-input id="pass"
                          v-model="form.pass"
                          required
                          :type="typePassword"
                          placeholder="Ingresa Contraseña">
                </b-form-input>
                </b-form-group>
                <b-form-checkbox
                  id="checkboxPassword"
                  v-model="checkboxPassword"
                  name="checkboxPassword"
                >
                Mostrar Contraseña
                </b-form-checkbox>
                <b-button type="submit" variant="primary">Entrar</b-button>
                <b-button v-b-modal.newUser variant="secondary">Registrarse</b-button>
                <b-form-group>
                  <b-link href="#/" disabled>Olvide mi contraseña</b-link>
                </b-form-group>
          </b-form>
          </b-card>
          </b-col>
        </b-row>
      <new-user></new-user>
      </b-container>
</template>

<script>

import newUser from '../components/NewUser';

export default {

  name: 'Inicio',
  components: { newUser },
  data() {
    return {
      form: {
        email: '',
        pass: '',
      },
      checkboxPassword: false,
      palabra:'aprender',
      arrayPalabras:['estar.','estudiar.','conocer.','leer.','matear.','pensar.','crecer.']
    }
    
  },
  computed:{
    typePassword() {
        return this.checkboxPassword ? "text" : "password";
    },
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.axios.post('api/login/',this.form)
      .then((response) =>{
      // console.log(response);
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
  font-size: 900%;
  color:white;
  }

  .roboto{
    font-family:'Roboto:900i', sans-serif;
    font-size: 400%;
    color:white;
  }
</style>
