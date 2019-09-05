<template>
    <b-container>
        <b-alert show>Tenes apuntes que no usas?Vendelos,donalos o regalalos</b-alert>
        <b-card class="shadow">
            <b-row>
                <b-col>
                    <b-form inline>
                        <h3><u>Apuntes</u></h3>
                        <font-awesome-icon   icon="plus-circle"  class="separacionIcon pointer" size="lg" @click="showModal" />                      
                    </b-form>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <p>asd</p>
                </b-col>
            </b-row>
        </b-card>
        <modal-new-apunte 
        @responseGetApuntes="getApuntes"
        :id-materia="idMateria"
        ></modal-new-apunte>
    </b-container>
</template>
<script>
const ModalNewApunte = () => import('../components/modals/ModalNewApunte');

export default {
    name:'ApuntesWall',
    components:{ModalNewApunte},
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style scoped>
.shadow{
        box-shadow: 10px 10px grey;
    }
.separacionIcon{
    /* villeriada */
    margin-bottom: 3%;
    margin-left: 3%;
}
.pointer{
    cursor: pointer;
}
</style>
