<template>
     <b-modal @hide="cleanModal" ref="newEvent" id="newEvent" title="Nuevo evento">
        <b-container>
            <b-form>
                <b-form-group label="Nombre:" label-for="nombre">
                    <b-form-input  
                      id="nombre" 
                      v-model="data.nombre"
                      placeholder="Ingresa nombre del evento"
                      name="nombre"
                      v-validate="'required'"
                      :class="{'is-invalid':errors.has('nombre')}"
                      >
                    </b-form-input>
                  <b-form-invalid-feedback>Campor requerdio</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Temas:" label-for="temas">
                    <b-form-input 
                      id="temas" 
                      v-model="data.temas"
                      placeholder="Ingresa los temas del parcial"
                      name="temas"
                      v-validate="'required'"
                      :class="{'is-invalid':errors.has('temas')}"
                      >
                    </b-form-input>
                    <b-form-invalid-feedback>Campor requerdio</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Seleccionar Fecha">
                    <datepicker  
                      input-class="form-control" 
                      v-model="data.fecha" 
                      :language="es" 
                      placeholder="Seleccionar fecha"
                      name="fecha"
                      v-validate="'required'"
                      :class="{'is-invalid':errors.has('fecha')}"
                      ></datepicker>
                    <b-form-invalid-feedback>Campor requerdio</b-form-invalid-feedback>
                </b-form-group>
            </b-form>
            <b-alert 
            :show="hasErrors" 
            variant="danger" 
            class="text-center">{{ error }}</b-alert>
        </b-container>
        <template slot="modal-footer">
      <button class="btn btn-success btn-block" @click="submit" type="submit">Crear</button>
    </template>
    </b-modal>
</template>
<script>
const Datepicker = () => import('vuejs-datepicker');

// import Datepicker from 'vuejs-datepicker';
import { en, es } from 'vuejs-datepicker/dist/locale';

export default {
  props:['idMateria'],
  components: { Datepicker },
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      data: {
        nombre: '',
        temas: '',
        fecha: '',
        materia_id:this.idMateria,
        user_id:1
      },
      error:'',
      // VARIABLES PARA EL PLUG DEL CALENDARIO
      en,
      es,
    };
  },
   computed: {
        hasErrors() {
            return this.error != "";
        }
    },
  methods: {
    submit() {
      this.$validator.validateAll().then(result => {
        if(result){
          this.data.materia_id=this.idMateria
          this.axios.post('api/evento',this.data)
          .then((response) =>{
            this.cleanModal();
            this.$refs.newEvent.hide();
            this.$emit("responseGetEventos")            
      })  
        }else{
          this.error = "Por favor, corrija los campos en rojo";      
        }
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

