<template>
    <b-container fluid>
         <b-modal @hide="cleanModal"  ref="modalResetPassword" id="modalResetPassword" title="Olvidastes tu contraseña?">
                <b-row >
                    <b-col>
                        <b-form-group v-if="!flagSuccess" label="Correo electronico:" label-for="emailPassword">
                            <b-form-input  
                            id="emailPassword"
                            :class="{'is-invalid':errors.has('emailPassword')}"
                            v-validate="'required|email'" 
                            v-model="data.email"
                            placeholder="Ingresa tu correo electronico"
                            name="emailPassword">
                            </b-form-input>
                            <b-form-invalid-feedback>E-mail requerido</b-form-invalid-feedback>
                        </b-form-group>
                        <label v-if="flagSuccess">Le hemos enviado un email para que puede restablecer su contraseña</label>
                    </b-col>
                </b-row>
                <template slot="modal-footer">
                <button v-if="!flagSuccess" :disabled="disabledButton" class="btn btn-success btn-block" @click="submit" type="submit">
                    <img v-show="iconLoading" class="sizeLoading" src="../loadingWhite.svg">
                                {{textButton}}</button>
                <button v-if="flagSuccess" class="btn btn-primary btn-block" @click="hideModal" >Volver</button>
            </template>
            <b-alert 
            :show="hasErrors" 
            variant="danger" 
            class="text-center">{{ error }}</b-alert>
         </b-modal>
    </b-container>
</template>
<script>
export default {
$_veeValidate: {
    validator: "new"
  },
    data() {
        return{
            flagSuccess:false,
            textButton:'Recuperar contraseña',
            disabledButton:false,
            loading:false,
            iconLoading:false,
            error:'',
            data:{
                email:''    
            }
        }
    },
    watch:{
         loading: function(value){
         if(value){
             this.disabledButton=true;
             this.textButton=''
             this.iconLoading=true
         }else{
             this.disabledButton=false;
             this.textButton='Recuperar contraseña'
             this.iconLoading=false
         }
     } 
    },
    computed:{
    hasErrors() {
      return this.error != "";
    }
    },
    methods:{
        submit(){
            this.loading=true;
            this.$validator.validateAll().then(result => {
                if(result){
                    this.axios.post('api/password/create/',this.data)
                    .then((response) =>{
                        if(response.status==200){
                            this.loading=false;
                            this.flagSuccess=true
                        }
                    })
                    .catch(error => {
                        this.loading=false;
                        this.error=error.response.data.message
                    })
                }else{
                this.loading=false;
                this.error='Por favor corrija los campos en rojo'
                }
            })
        },
        hideModal(){
            this.$refs.modalResetPassword.hide()
        },
        cleanModal(){
            this.error=''
            this.data.email=''
            this.flagSuccess=false
        }
    }
    
}
</script>
<style scoped>
.sizeLoading{
        width: 30px;
}
</style>
