<template>
    <b-container>
        <b-modal 
        :no-close-on-backdrop="noCerrar"
        :no-close-on-esc="noCerrar"
        :hide-header-close="noCerrar"
        :hide-footer="true"
        ref="modalSuccesResetPass"
        id="modalSuccesResetPass"
        title="Reset de contraseña exitoso">
            <b-btn @click="gogoShakur" block variant="primary">Ir al inicio</b-btn>
        </b-modal>
    </b-container>
</template>
<script>
export default {
    data(){
        return{
            noCerrar:true
        }
    },
    methods:{
        gogoShakur() {
              this.$router.push("/");
        }
    }
}
</script>
<style scoped>

</style>
