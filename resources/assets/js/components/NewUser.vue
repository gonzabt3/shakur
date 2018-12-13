<template>
    <b-modal id="newUser" title="Crear Usuario">
        <b-container>
            <b-form>
                <b-form-group  label="Nombre:" label-for="nombre">
                    <b-form-input id="nombre"
                                v-model="usuario.name"
                                required
                                placeholder="Ingresa tu nombre">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Apellido:" label-for="apellido">
                    <b-form-input id="apellido"
                                v-model="usuario.apellido"
                                required
                                placeholder="Ingresa tu apellido">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="E-mail:" label-for="email">
                    <b-form-input id="email"
                                v-model="usuario.email"
                                required
                                placeholder="Ingresa tu E-mail">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Contraseña:" label-for="password">
                    <b-form-input id="password"
                                v-model="usuario.password"
                                required
                                placeholder="Ingresa tu Contraseña">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Confirmar contraseña:" label-for="password2">
                    <b-form-input id="password2"
                                v-model="usuario.password2"
                                required
                                placeholder="Confirma tu Contraseña">
                    </b-form-input>
                </b-form-group>
                
                <!-- SELECT UNIVERSIDADES -->
                <b-form-group 
                label="Universidad" 
                label-for="universidad">
                <b-form-select
                    v-model="usuario.universidad" 
                    id="universidad" 
                    :options="optionsUniversidad" 
                    name="universidad" 
                    text-field="description" 
                    value-field="id"
                        />
                </b-form-group>

                <!-- SELECT CARRERAS -->
                <b-form-group 
                label="Carrera" 
                label-for="carrera">
                <b-form-select
                    v-model="usuario.carrera_id" 
                    id="carrera_id" 
                    :options="optionsCarrera" 
                    name="carrera" 
                    text-field="description" 
                    value-field="id"
                        />
                </b-form-group>
                <b-form-group>
                    <b-form-checkbox-group  id="checkCondiciones">
                        <b-form-checkbox required value="checkCondiciones">
                            Estoy de acuerdo con los <a>terminos y condiciones</a></b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
            </b-form>
        </b-container>
        <template slot="modal-footer">
      <button class="btn btn-success btn-block" type="submit"  @click="crearUsuario">Registrarse</button>
    </template>
    </b-modal>
</template>
<script>
import MpSelect from "../components/common/MpSelect";


export default {
  name: 'NewUser',
  components: { MpSelect },
  data() {
    return {
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
          password2:null   
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
        urlCarrera:''
    };
  },
  methods :{
        crearUsuario(){
            console.log(this.usuario);
            this.axios.post('api/usuario',this.usuario)
                .then(({data}) => this.setSuccessMessage())
        },
        setSuccessMessage(){
            this.console("volvio");
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
        }
  },
  mounted(){
      this.getValuesSelectUniversidad()
  },
  watch:{
     "usuario.universidad": function(value){
        this.urlCarrera="api/carreras/"+value
        this.getValuesSelectCarrera()
     }  
  }
  
};
</script>
<style scoped>

</style>
