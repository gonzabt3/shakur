<template>
        <b-modal @hide="cleanModal" ref="reportError" id="reportError" title="Reportar error">
        <b-container>
            <b-form>
                <b-form-group label="Descripción del error:" label-for="descripcion">
                    <b-form-input 
                      id="descripcion" 
                      v-model="data.descripcion"
                      placeholder="Ingresa una descripción"
                      name="descripcion"
                      v-validate="'required'"
                      :class="{'is-invalid':errors.has('descripcion')}">
                    </b-form-input>
                  <b-form-invalid-feedback>Campor requerido</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Adjunta una captura:" label-for="data.file">
                    <b-form-file 
                      v-model="data.file" 
                      placeholder="Elije un archivo"
                      name="inputFile[]"
                      multiple
                      ></b-form-file>
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
        descripcion: '',
        file:null,
        materia_id:this.idMateria
      },
      error:'',
      loading:false,
      disabledButton:false,
      textButton:'Reportar',
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
          this.textButton='Reportar'
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

          formData.append('descripcion',this.data.descripcion);
          formData.append('materia_id',this.idMateria);
          formData.append('files',this.data.file);

          _.each(this.data.file, (file, key) => {
                  formData.append(`files[${key}]`, file);
          });

          this.axios.post('api/reportsErrors',formData)
        .then((response)=>{
          this.loading=false;
          this.cleanModal();
          this.$refs.reportError.hide();
        })
        }else{
          this.loading=false;
          this.error = "Por favor, corrija los campos en rojo";      
        }
      })
    },
    cleanModal() {
      this.data.descripcion = '';
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