<template>
<b-container fluid>
    <b-form>
                <b-form-group id="userLabel" label="Correo electronico:">
                  <b-form-input id="user"
                            @keyup.enter="onSubmit"
                            name="user"
                            :class="{'is-invalid':errors.has('user')}"
                            v-validate="'required'"
                            v-model="form.email"
                            
                            placeholder="Ingresa tu e-mail">
                  </b-form-input>
                  <b-form-invalid-feedback>Campo requerido</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group for="pass" label="Contraseña:">
                  <b-form-input id="pass"
                            @keyup.enter="onSubmit"
                            name="pass"
                            :class="{'is-invalid':errors.has('pass')}"
                            v-validate="'required'"
                            v-model="form.password"
                            :type="typePassword"
                            placeholder="Ingresa tu contraseña">
                  </b-form-input>
                    <b-form-invalid-feedback>Campo requerido</b-form-invalid-feedback>
                     <b-form-checkbox
                      id="checkboxPassword"
                      v-model="checkboxPassword"
                      name="checkboxPassword"
                    >
                    Mostrar Contraseña
                    </b-form-checkbox>
                </b-form-group>
                <b-row>
                  <b-col>
                    <b-row>
                      <b-col class="no-padding-right">
                        <b-button  block @click="onSubmit" variant="outline-info">Iniciar Sesion</b-button>
                      </b-col>
                      <b-col>
                        <b-button block  v-b-modal.newUser variant="info">Registrarse</b-button>
                      </b-col>
                    </b-row>
                    <b-form-group>
                      <b-link @click="openModalResetPassword">Olvide mi contraseña</b-link>
                    </b-form-group>
                  </b-col>
                </b-row>
              <!-- <multi-login/> -->
          </b-form>
          <b-alert 
            :show="hasErrors" 
            variant="danger" 
            class="text-center">{{ error }}</b-alert>
</b-container>
</template>
<script>
export default {
    $_veeValidate: {
        validator: "new"
    },
    data() {
        return {
            form: {
                email: '',
                password: '',
                remember_me:true,
            },
            checkboxPassword: false,
            error:''
        }
    },
    computed:{
        typePassword() {
            return this.checkboxPassword ? "text" : "password";
        },
        hasErrors() {
            return this.error != "";
        }
    },
    methods:{
        openModalResetPassword(){
            this.$root.$emit('bv::show::modal','modalResetPassword')
        },
        onSubmit(evt) {
      this.$validator.validateAll().then(result => {
        if(result){
          evt.preventDefault();
          this.axios.post('api/auth/login',this.form)
            .then((response) =>{
              // console.log(response);

              this.axios.defaults.headers.common['Accept'] = 'application/json'; 
              this.axios.defaults.headers.common['Content-Type'] = 'application/json'; 
              this.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; 

              sessionStorage.SessionName = "token"
              sessionStorage.setItem("token",response.data.access_token);

              this.axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem("token"); 
             
              this.$router.push("/main");
        })
        .catch(error => {
          if (error.response.status == 401 || error.response.status == 422) {
              this.error = "Usuario o contreseña incorrecta";
              }
          });
        }else{
          this.error = "Por favor, corrija los campos en rojo";
        }
      })
      
    },
    },
     
}
</script>
<style  scoped>

</style>