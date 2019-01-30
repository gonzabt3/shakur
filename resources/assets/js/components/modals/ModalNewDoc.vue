<template>
     <b-modal @hide="cleanModal" ref="newDoc" id="newDoc" title="Nueva Documentacion">
        <b-container>
            <b-form>
                <b-form-group label="Nombre:" label-for="nombre">
                    <b-form-input id="nombre" v-model="data.nombre"
                                placeholder="Ingresa nombre">
                    </b-form-input>
                </b-form-group>
                <!-- <b-form-group label="Temas:" label-for="temas">
                    <b-form-input id="temas" v-model="data.temas"
                                placeholder="Ingresa los temas">
                    </b-form-input>
                </b-form-group> -->
                <b-form-group label="Archivo:" label-for="data.file">
                    <b-form-file v-model="data.file" :state="Boolean(data.file)" placeholder="Elije un archivo"></b-form-file>
                </b-form-group>
            </b-form>
        </b-container>
        <template slot="modal-footer">
      <button class="btn btn-success btn-block" @click="submit" type="submit">Subir</button>
    </template>
    </b-modal>
</template>
<script>
export default {
  props:['idMateria'],
  data() {
    return {
      data: {
        nombre: '',
        // temas: '',
        file:null,
        idMateria:this.idMateria
      },
    };
  },
  watch:{
    idMateria:function(val){
      return val;
    }
  },
  methods: {
    submit() {
      
      let formData = new FormData();

      formData.append('nombre',this.data.nombre);
      formData.append('idMateria',this.idMateria);
      formData.append('file',this.data.file);

      this.axios.post('api/file',formData)
        .then((response)=>{
          this.cleanModal();
          this.$refs.newDoc.hide();
          this.$emit("responseGetDocs")  
        })

    },
    cleanModal() {
      this.data.nombre = '';
      // this.data.temas = '';
      this.data.file = null;
    },
  },

};
</script>
<style scoped>

</style>

