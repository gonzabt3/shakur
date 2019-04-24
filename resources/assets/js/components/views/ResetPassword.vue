<template>
<div>
    <topbar></topbar>
        <b-container fluid>
            <b-row align-h="center">
                <b-col   md="5" >
                    <b-card class="shadow">
                    <label>Ingresa tu nueva contraseña</label>
                    <b-form >
                        <b-form-group  label="Contrseña:" label-for="password"  >
                            <b-form-input id="password"
                                        name="password"
                                        ref="password"
                                        v-model="data.password"
                                        :type="typePassword"
                                        required
                                        placeholder="Ingresa la nueva contraseña"
                                        :class="{'is-invalid':errors.has('password')}"
                                        v-validate="'required'"
                                        >
                            </b-form-input>
                            <b-form-invalid-feedback>Campor requerdio</b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group  label="Confirmar contrseña:" label-for="password_confirmation"  >
                            <b-form-input id="password_confirmation"
                                        name="password_confirmation"
                                        :type="typePassword"
                                        v-model="data.password_confirmation"
                                        required
                                        :class="{'is-invalid':errors.has('password_confirmation')}"
                                        v-validate="'required|confirmed:password'"
                                        placeholder="Confirma la nueva contraseña"
                                        >
                            </b-form-input>
                            <b-form-invalid-feedback>Las contraseñas no coinciden</b-form-invalid-feedback>
                            <b-form-checkbox
                                id="checkboxPassword"
                                v-model="checkboxPassword"
                                name="checkboxPassword"
                                >
                                Mostrar Contraseña
                                </b-form-checkbox>
                        </b-form-group>
                            <b-alert 
                            :show="hasErrors" 
                            variant="danger" 
                            class="text-center">{{ error }}</b-alert>
                        <b-btn @click="submit" block variant="primary">Restablecer</b-btn>
                    </b-form>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
</div>
</template>
<script>
import Topbar from '../Topbar';

export default {
    name:'ResetPassword',
    components: { Topbar},
    $_veeValidate: {
        validator: "new"
    },
    data(){
        return{
            error:'',
            checkboxPassword: false,
            data:{
                password:'',
                password_confirmation:'',
                token:'',
                email:''
            }
        }
    },
    computed:{
    typePassword() {
        return this.checkboxPassword ? "text" : "password";
    },
    hasErrors() {
      return this.error != "";
    },
    // mounted() {
    //     this.data.token = this.$route.params.token;
    // },
  },
    methods:{
        submit(){
            console.log(this.usuario);
            this.$validator.validateAll().then(result => {
                if(result){
                    console.log("Asd");
               
                }else {
                    this.error = "Por favor, corrija los campos en rojo";
                }
            })        
        }
    }
    
}
</script>
<style scoped>

</style>
