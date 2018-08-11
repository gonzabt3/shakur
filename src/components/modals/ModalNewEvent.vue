<template>
     <b-modal id="newEvent" title="Nuevo evento">
        <b-container>
            <b-form>
                <b-form-group label="Nombre:" label-for="nombre">
                    <b-form-input id="nombre"
                                required
                                placeholder="Ingresa tu nombre">
                    </b-form-input>
                </b-form-group>
            </b-form>
        </b-container>
        <template slot="modal-footer">
      <button class="btn btn-success btn-block" type="submit">Crear</button>
    </template>
    </b-modal>
</template>
<script>

export default {
    
}
</script>
<style  scoped>

</style>
