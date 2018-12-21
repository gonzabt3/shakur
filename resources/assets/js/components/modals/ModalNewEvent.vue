<template>
     <b-modal @hide="cleanModal" ref="newEvent" id="newEvent" title="Nuevo evento">
        <b-container>
            <b-form>
                <b-form-group label="Nombre:" label-for="nombre">
                    <b-form-input  id="nombre" v-model="data.nombre"
                                placeholder="Ingresa nombre del evento">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Temas:" label-for="temas">
                    <b-form-input id="temas" v-model="data.temas"
                                placeholder="Ingresa los temas del parcial">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Seleccionar Fecha">
                    <datepicker  input-class="form-control" v-model="data.fecha" :language="es" placeholder="Seleccionar fecha"></datepicker>
                </b-form-group>
            </b-form>
        </b-container>
        <template slot="modal-footer">
      <button class="btn btn-success btn-block" @click="submit" type="submit">Crear</button>
    </template>
    </b-modal>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
import { en, es } from 'vuejs-datepicker/dist/locale';

export default {
  components: { Datepicker },
  data() {
    return {
      data: {
        nombre: '',
        temas: '',
        fecha: '',
        materia_id:5,
        user_id:1
      },
      en,
      es,
    };
  },
  methods: {
    submit() {
      // console.log(this.data);
      this.axios.post('api/evento',this.data)
      .then((response) =>{
        this.$emit("responseGetEventos")            
        this.cleanModal();
      })   
    },
    cleanModal() {
      this.data.nombre = '';
      this.data.temas = '';
      this.data.fecha = '';
    },
  },

};
</script>
<style scoped>

</style>

