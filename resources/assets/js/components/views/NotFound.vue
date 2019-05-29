<template>
    <b-container>    
         <b-container fluid>
            <b-row align-h="center">
                <b-col md="5">
                    <b-card class="shadow">
                        <h3>404 :(</h3>
                        <label>
                            Oops! pagina no encontrada.
                        </label>
                        <b-form-group>
                        <b-btn block variant="info" @click="gogoShakur">
                            Volver al inicio
                        </b-btn>
                        </b-form-group>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>   
    </b-container>    
</template>
<script>
export default {
    methods:{
        gogoShakur() {
              this.$router.push("/");
        }
    }
}
</script>
<style scoped>

</style>
