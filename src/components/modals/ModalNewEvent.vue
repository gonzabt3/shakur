<template>
     <b-modal id="newEvent" title="Nuevo evento">
        <b-container>
            <b-form>
                <b-form-group label="Nombre:" label-for="nombre">
                    <b-form-input id="nombre"
                                placeholder="Ingresa nombre del evento">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Temas:" label-for="temas">
                    <b-form-input id="temas"
                                placeholder="Ingresa los temas del parcial">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Seleccionar Fecha">
                    <datepicker class="form-control" :language="es" placeholder="Seleccionar fecha"></datepicker>
                </b-form-group>
            </b-form>
        </b-container>
        <template slot="modal-footer">
      <button class="btn btn-success btn-block" type="submit">Crear</button>
    </template>
    </b-modal>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
import {en, es} from 'vuejs-datepicker/dist/locale'

export default {
    components: {Datepicker},
    data(){
        return {
            en: en,
            es: es
        }
    }
}
</script>
<style  scoped>

</style>
