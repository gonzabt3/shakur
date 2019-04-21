<template>
    <b-container fluid>
         <b-modal @hide="cleanModal"  ref="modalResetPassword" id="modalResetPassword" title="Olvidates tu conteseña?">
                <b-row >
                    <b-col>
                        <b-form-group v-if="!flagSuccess" label="Correo electronico:" label-for="emailPassword">
                            <b-form-input  
                            id="emailPassword" 
                            v-model="data.email"
                            placeholder="Ingresa tu correo electronico"
                            name="emailPassword">
                            </b-form-input>
                            <b-form-invalid-feedback>Campor requerdio</b-form-invalid-feedback>
                        </b-form-group>
                        <label v-if="flagSuccess">Le hemos enviado un email para que puede restablecer su contraseña</label>
                    </b-col>
                </b-row>
                <template slot="modal-footer">
                <button v-if="!flagSuccess" class="btn btn-success btn-block" @click="submit" type="submit">Recuperar contraseña</button>
                <button v-if="flagSuccess" class="btn btn-primary btn-block" @click="hideModal" >Volver</button>
            </template>
         </b-modal>
    </b-container>
</template>
<script>
export default {
    data() {
        return{
            flagSuccess:false,
            data:{
                email:''    
            }
        }
    },
    methods:{
        submit(){
            this.axios.post('api/password/create/',this.data)
            .then((response) =>{
                if(response.status==200){
                    this.flagSuccess=true
                }
            })
        },
        hideModal(){
            this.$refs.modalResetPassword.hide()
        },
        cleanModal(){
            this.data.email=''
            this.flagSuccess=false
        }
    }
    
}
</script>
<style scoped>

</style>
