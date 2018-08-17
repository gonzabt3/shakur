<template>
     <b-modal @hide="cleanModal" ref="newDoc" id="newDoc" title="Nueva Documentacion">
        <b-container>
            <b-form>
                <b-form-group label="Nombre:" label-for="nombre">
                    <b-form-input  id="nombre" v-model="data.nombre"
                                placeholder="Ingresa nombre del documento">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Temas:" label-for="temas">
                    <b-form-input id="temas" v-model="data.temas"
                                placeholder="Ingresa los temas del parcial">
                    </b-form-input>
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
  data() {
    return {
      data: {
        nombre: '',
        temas: ''
      },
    };
  },
  methods: {
    submit() {
      console.log(this.data);
    },
    cleanModal() {
      this.data.nombre = '';
      this.data.temas = '';
    },
  },

};
</script>
<style scoped>

</style>

