<template>
    <b-modal id="newUser" title="Crear Usuario">
        <b-container>
            <b-form>
                <b-form-group label="Nombre:" label-for="nombre">
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
                <b-form-group label="Universidad:" label-for="universidad">
                    <b-form-select id="universidad"
                                v-model="usuario.universidad"
                                required
                                :options="universidades"
                                >
                    </b-form-select>
                </b-form-group>
                <b-form-group label="Carrera:" label-for="carrera">
                    <b-form-select id="carrera"
                        v-model="usuario.carrera"
                        required
                        >
                    </b-form-select>
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


export default {
  name: 'NewUser',
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
      }
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
  }
  
};
</script>
<style scoped>

</style>
