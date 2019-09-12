<template>
    <b-container>
    <b-modal @hide="cleanModal" id="newUser" ref="newUser" title="Crear Usuario">
            <b-form >
                <b-form-group  label="Nombre:" label-for="name"  >
                    <b-form-input id="name"
                                name="name"
                                v-model="usuario.name"
                                required
                                :class="{'is-invalid': errors.has('name')}"
                                placeholder="Ingresa tu nombre"
                                v-validate="'required'"
                                >
                    </b-form-input>
                    <b-form-invalid-feedback>Campor requerido</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Apellido:" label-for="apellido">
                    <b-form-input id="apellido"
                                name="apellido"
                                :class="{'is-invalid':errors.has('apellido')}"
                                v-model="usuario.apellido"
                                v-validate="'required'"
                                required
                                placeholder="Ingresa tu apellido">
                    </b-form-input>
                    <b-form-invalid-feedback>Campor requerido</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="E-mail:" label-for="email">
                    <b-form-input id="email"
                                name="email"
                                v-model="usuario.email"
                                :class="{'is-invalid':errors.has('email')}"
                                v-validate="'required|email'"
                                required
                                placeholder="Ingresa tu E-mail">
                    </b-form-input>
                    <b-form-invalid-feedback>Campor requerido</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Contraseña:" label-for="password">
                    <b-form-input id="password"
                                name="password"
                                ref="password"
                                :type="typePassword"
                                :class="{'is-invalid':errors.has('password')}"
                                v-validate="'required|min:8'"
                                v-model="usuario.password"
                                required
                                placeholder="Ingresa tu Contraseña">
                    </b-form-input>
                    <p>La contraseña debe debe tenes minimo 8 caracteres</p>
                    <b-form-invalid-feedback>Campor requerido</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Confirmar contraseña:" label-for="password_confirmation">
                    <b-form-input id="password_confirmation"
                                name="password_confirmation"
                                :type="typePassword"
                                :class="{'is-invalid':errors.has('password_confirmation')}"
                                v-validate="'required|confirmed:password'"
                                v-model="usuario.password_confirmation"
                                required
                                placeholder="Confirma tu Contraseña">
                    </b-form-input>
                        <b-form-invalid-feedback>Las contraseñas no coinciden</b-form-invalid-feedback>
                        <b-form-checkbox
                                id="checkboxPasswordNewUserNewUser"
                                v-model="checkboxPasswordNewUser"
                                name="checkboxPasswordNewUser"
                                >
                                Mostrar Contraseña
                                </b-form-checkbox>
                </b-form-group>
                
                <!-- SELECT UNIVERSIDADES -->
                <b-form-group 
                label="Universidad" 
                label-for="universidad">
                <b-form-select
                    v-model="usuario.universidad" 
                    :class="{'is-invalid':errors.has('universidad')}"
                    v-validate="'required'"
                    id="universidad" 
                    :options="optionsUniversidad" 
                    name="universidad" 
                    text-field="description" 
                    value-field="id"
                        />
                        <b-form-invalid-feedback>Campor requerido</b-form-invalid-feedback>
                        <faltante tipo="universidad" />
                    </b-form-group>
                <!-- SELECT CARRERAS -->
                <b-form-group 
                label="Carrera" 
                label-for="carrera">
                <b-form-select
                    :class="{'is-invalid':errors.has('carrera')}"
                    v-validate="'required'"
                    v-model="usuario.carrera_id" 
                    id="carrera_id" 
                    :options="optionsCarrera" 
                    name="carrera" 
                    text-field="description" 
                    value-field="id"
                        />
                <b-form-invalid-feedback>Campor requerido</b-form-invalid-feedback>
                <faltante tipo="carrera" />
                </b-form-group>
                <b-form-group>
                    <b-form-checkbox-group  >
                        <b-form-checkbox 
                                id="terminos_y_condiciones"
                                name="terminos_y_condiciones"
                                v-model="usuario.terminos_y_condiciones"><label>
                            Estoy de acuerdo con los <u @click="showModalTerminos" class="pointer">terminos y condiciones</u></label></b-form-checkbox>
                    </b-form-checkbox-group>
                    <b-form-invalid-feedback>Campor requerido</b-form-invalid-feedback>
                </b-form-group>
            </b-form>
            <!-- ALERTA DE ERRORES -->
            <b-alert 
            :show="hasErrors" 
            variant="danger" 
            class="text-center">{{ error }}</b-alert>
        <template slot="modal-footer">
      <button class="btn btn-success btn-block" type="submit" :disabled="disabledButton" @click="crearUsuario">
    <img v-show="iconLoading" class="sizeLoading" src="../components/loadingWhite.svg">

          {{textButton}}</button>
    </template>
    </b-modal>
    <modal-terminos/>
    </b-container>
</template>
<script>
const MpSelect = () => import('../components/common/MpSelect');
const ModalTerminos = () => import('../components/modals/MoldalTerminos.vue');
const Faltante = () => import('../components/common/Faltante.vue');
import {blackListWords} from "./diccionario.js";

// import MpSelect from "../components/common/MpSelect";


export default {
  name: 'NewUser',
  components: { MpSelect ,ModalTerminos, Faltante },
    $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
        checkboxPasswordNewUser:false,
        badWordNameFlag:false,
        badWordApellidoFlag:false,
      universidades: [
        'Seleccionar', 'UBA', 'UTN', 'UNLa',
      ],
      usuario:{
          name:null,
          apellido:null,
          email:null,
          universidad:null,
          carrera_id:null,
          password:null,
          password_confirmation:null,
          terminos_y_condiciones:false
      },
      optionsUniversidad: [
                {
                    id: null,
                    description: "Seleccionar una opción",
                    disabled: true
                }
            ],
        optionsCarrera: [
        {
            id: null,
            description: "Seleccionar una opción",
            disabled: true
        }
        ],
        urlCarrera:'',
        error: "",
        loading:false,
        disabledButton:false,
        textButton:'Registrarse',
        iconLoading:false
    };
  },
    computed: {
        hasErrors() {
            return this.error != "";
        },
        typePassword() {
            return this.checkboxPasswordNewUser ? "text" : "password";
        }
    },
    methods :{
        scanMalasPalabras(string){
            let arrayPalbras = string.trim().split(" ");
            let resultado = arrayPalbras.filter(element => blackListWords.includes(element));
            return !resultado.length==0 
        },
      showModalTerminos(){
          this.$root.$emit('bv::show::modal','terminosModal')
      },
        crearUsuario(){
            if(this.badWordNameFlag==false && this.badWordApellidoFlag==false){
                if(this.usuario.terminos_y_condiciones[0]==true){
                    this.$validator.validateAll().then(result => {
                        if(result){
                        this.loading=true;
                        this.axios.post('api/auth/signup/',this.usuario)
                        .then((response) => {
                            this.$emit("success",this.usuario.email)     
                            this.$refs.newUser.hide();
                            this.loading=true
                            })
                        }else {
                            this.error = "Por favor, corrija los campos en rojo";
                        }
                    })
                }else{
                    this.error = "Debe aceptar los terminos y condiciones";
                }
            }else{
                this.error = "Hemos detectado lenguaje ofensivo en su nombre o apellido";
            }
        },
        setSuccessMessage(){
            // this.console("volvio");
        },
        // LLENAR SELECT universidades
        getValuesSelectUniversidad(){
            this.axios
                .get("api/universidades")
                .then((response) => {
                    let responseOptions = _.map(response.data, option => {
                        return {
                            id: option.id,
                            description: option.nombre
                        };
                    });
                    this.optionsUniversidad = _.union(this.optionsUniversidad, responseOptions);
                    this.error = "";
                })
                .catch(error => {
                    this.error =
                        "Ocurrió un error al llenar los valores de este selector";
                });   
        },
        getValuesSelectCarrera(){
            //villereada para limpiar el array 
            this.optionsCarrera=[]
            this.optionsCarrera.push({
            id: null,
            description: "Seleccionar una opción",
            disabled: true
            })
            this.usuario.carrera_id=null

             this.axios
                .get(this.urlCarrera)
                .then((response) => {
                    let responseOptions = _.map(response.data, option => {
                        return {
                            id: option.id,
                            description: option.nombre
                        };
                    });
                    this.optionsCarrera = _.union(this.optionsCarrera, responseOptions);
                    this.error = "";
                })
                .catch(error => {
                    this.error =
                        "Ocurrió un error al llenar los valores de este selector";
                });  
        },
        cleanModal(){
            this.usuario.name='',
            this.usuario.apellido="",
            this.usuario.email="",
            this.usuario.universidad=null,
            this.usuario.carrera_id=null,
            this.usuario.password="",
            this.usuario.password_confirmation=""
            this.error="" 
            this.$validator.reset();
        }
  },
  mounted(){
      this.getValuesSelectUniversidad()
  },
  watch:{
     "usuario.universidad": function(value){
        this.urlCarrera="api/carreras/"+value
        this.getValuesSelectCarrera()
     },
     loading: function(value){
         if(value){
             this.disabledButton=true;
             this.textButton=''
             this.iconLoading=true
         }else{
             this.disabledButton=false;
             this.textButton='Resgistrarse'
             this.iconLoading=false
         }
     },
    //  INPUTS SCAN MALAS PALABRAS
    "usuario.name":function(string){
        this.badWordNameFlag=this.scanMalasPalabras(string);
        if(this.badWordNameFlag==false){
                this.error=''
            }
    },
    "usuario.apellido":function(string){
        this.badWordApellidoFlag=this.scanMalasPalabras(string);
        if(this.badWordApellidoFlag==false){
                this.error=''
            }
    }
  }
  
};
</script>
<style scoped>
.sizeLoading{
        width: 30px;
}

.pointer{
    cursor: pointer;
}
</style>
