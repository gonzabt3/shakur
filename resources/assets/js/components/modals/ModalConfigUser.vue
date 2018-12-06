<template>
         <b-modal  ref="configUser" id="configUser" title="Configuracion usuario">
        <b-container>
            <b-form>
                <b-form-group label="Nombre:" label-for="nombre">
                    <b-form-input  id="nombre" v-model="data.nombre"
                                placeholder="Ingresa nombre del evento">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Temas:" label-for="temas">
                    <b-form-input id="temas" v-model="data.temas"
                                placeholder="Ingresa los temas del parcial">
                    </b-form-input>
                </b-form-group>
            </b-form>
        </b-container>
    </b-modal>
</template>
<script>
export default {
    data(){
    return {
      data: {
        nombre: '',
        temas: ''
      }
    };
    }
    
}
</script>
<style scoped>

</style>
