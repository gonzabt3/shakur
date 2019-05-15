<template>
     <b-modal @hide="cleanModal" ref="newDoc" id="newDoc" title="Nueva Documentacion">
        <b-container>
            <b-form>
                <b-form-group label="Nombre:" label-for="nombre">
                    <b-form-input 
                      id="nombre" 
                      v-model="data.nombre"
                      placeholder="Ingresa nombre"
                      name="nombre"
                      v-validate="'required'"
                      :class="{'is-invalid':errors.has('nombre')}">
                    </b-form-input>
                  <b-form-invalid-feedback>Campor requerdio</b-form-invalid-feedback>
                </b-form-group>
                <!-- <b-form-group label="Temas:" label-for="temas">
                    <b-form-input id="temas" v-model="data.temas"
                                placeholder="Ingresa los temas">
                    </b-form-input>
                </b-form-group> -->
                <b-form-group label="Archivo:" label-for="data.file">
                    <b-form-file 
                      v-model="data.file" 
                      :state="Boolean(data.file)" 
                      placeholder="Elije un archivo"
                      name="inputFile[]"
                      v-validate="'required'"
                      multiple
                      :class="{'is-invalid':errors.has('file')}">
                      ></b-form-file>


                  <b-form-invalid-feedback>Campor requerdio</b-form-invalid-feedback>
                </b-form-group>
            </b-form>
            <b-alert 
            :show="hasErrors" 
            variant="danger" 
            class="text-center">{{ error }}</b-alert>
        </b-container>
        <template slot="modal-footer">
      <button class="btn btn-success btn-block" @click="submit" type="submit" :disabled="disabledButton">
        <img v-show="iconLoading" class="sizeLoading" src="../loadingWhite.svg">
        {{textButton}}</button>
    </template>
    </b-modal>
</template>
<script>
export default {
  props:['idMateria'],
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      data: {
        nombre: '',
        // temas: '',
        file:null,
        idMateria:this.idMateria
      },
      error:'',
      loading:false,
      disabledButton:false,
      textButton:'Subir',
      iconLoading:false
    };
  },
  watch:{
    idMateria:function(val){
      return val;
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
     }  
  },
  computed: {
    hasErrors() {
        return this.error != "";
    }
  },
  methods: {
    submit() {
      this.loading=true;
      this.$validator.validateAll().then(result=>{
        if(result){
          let formData = new FormData();

          formData.append('nombre',this.data.nombre);
          formData.append('idMateria',this.idMateria);
          formData.append('files',this.data.file);

          _.each(this.data.file, (file, key) => {
                  formData.append(`files[${key}]`, file);
          });

          this.axios.post('api/file',formData)
        .then((response)=>{
          this.loading=false;
          this.cleanModal();
          this.$refs.newDoc.hide();
          this.$emit("responseGetDocs")  
        })
        }else{
          this.loading=false;
          this.error = "Por favor, corrija los campos en rojo";      
        }
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
.sizeLoading{
        width: 30px;
}

</style>

