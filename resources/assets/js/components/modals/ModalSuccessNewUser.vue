<template>
    <b-modal :hide-footer="true"  ref="successModal" id="successModal" title="Genial!!">
        <b-container>
            <p>Gracias por registrarte en Shakur.</p>
            <p>Te enviaremos un mail de confirmacion a {{mailUser}} .</p>
        </b-container>
    </b-modal>
</template>
<script>
export default {
      props:['mailUser'],

}
</script>
<style scoped>

</style>
