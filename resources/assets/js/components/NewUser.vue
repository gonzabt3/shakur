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
                <b-form-group label="Contraseña:" label-for="password1">
                    <b-form-input id="password1"
                                v-model="usuario.password1"
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
                <mp-select 
                v-model="usuario.universidad"
                label="Universidad:" 
                name="universidad"
                url="api/universidades"
                />
                <mp-select 
                    v-model="usuario.carrera"
                    label="Carrera:" 
                    name="cerrera"
                    :url="urlCarrera"
                />
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
          nombre:null,
          apellido:null,
          email:null,
          universidad:null,
          carrera:null   
      },
      urlCarrera:''
    };
  },
  methods :{
      crearUsuario(){
            console.log(this.usuario);

            axios.post('api/usuarios',this.usuario)
                .then(({data}) => this.setSuccessMessage())
      },
      setSuccessMessage(){
      this.console("volvio");
    }
  },
  watch:{
     "usuario.universidad": function(value){
         this.urlCarrera="api/carrera/"+value
     }  
  }
  
};
</script>
<style scoped>

</style>
