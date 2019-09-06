<template>
     <b-modal @hide="cleanModal" ref="newApunte" id="newApunte" title="Nuevo apunte">
        <b-container>
            <b-form>
              
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

      },
      error:'',
      loading:false,
      disabledButton:false,
      textButton:'Agregar',
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
          this.textButton='Agregar'
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
          
        }else{
          this.loading=false;
          this.error = "Por favor, corrija los campos en rojo";      
        }
      })
    },
    cleanModal() {

    },
  },

};
</script>
<style scoped>
.sizeLoading{
        width: 30px;
}

</style>

