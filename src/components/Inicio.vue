<template>
      <b-container >
        <b-row >
          <b-col></b-col>
          <b-col >
          <b-card>
            <h1>Inicio</h1>
            <b-form @submit="onSubmit">
                <b-form-group id="userLabel" label="Usuario:">
                <b-form-input id="user"
                          v-model="form.user"
                          required
                          placeholder="Ingresa Usuario">
                </b-form-input>
                </b-form-group>
                <b-form-group fpr="pass" label="Contraeña:">
                <b-form-input id="pass"
                          v-model="form.pass"
                          required
                          placeholder="Ingresa Contraseña">
                </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Entrar</b-button>
                <b-button v-b-modal.newUser variant="secondary">Registrarse</b-button>
                <b-form-group>
                  <b-link href="#/" disabled>Olvide mi contraseña</b-link>
                </b-form-group>
          </b-form>
          </b-card>
          </b-col>
        </b-row>
      <new-user></new-user>
      </b-container>
</template>

<script>

import newUser from '@/components/NewUser';

export default {

  name: 'Inicio',
  components: { newUser },
  data() {
    return {
      form: {
        user: '',
        pass: '',
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style >
body{
    background-image:url('derecho.jpg');
    height: 100%;
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    }
</style>
