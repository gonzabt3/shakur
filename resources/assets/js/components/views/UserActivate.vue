<template>
    <div>
        <topbar></topbar>
        <b-container fluid>
            <b-row align-h="center">
                <b-col md="5">
                    <b-card class="shadow">
                        <h3>Tu usuario fue creado con exito!!!!</h3>
                        <label>
                            Esperamos que disfrutes Shakur.
                        </label>
                        <b-form-group>
                        <b-btn block variant="info" @click="gogoShakur">
                            IR A SHAKUR,BABY
                        </b-btn>
                        </b-form-group>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>   
    </div> 
</template>
<script>
import topbar from '../Topbar';
export default {
    components:{topbar},
    methods:{
        gogoShakur() {
              this.$router.push("/");
        }
    }
}
</script>
<style scoped>

</style>
