<template>
        <font-awesome-icon v-if="userLogeado==userCreador.id" class="opacidad solido"  icon="times" @click="sumbit"/>
</template>
<script>
export default {
    name:"dalete",
    props:['id','tipo','userCreador','userLogeado','size'],
    data(){
        return{
            
        }
    },
    methods:{
        sumbit(){
            this.axios.delete('api/'+this.tipo+'/'+this.id)
            .then(({data}) => {

            })
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
/* codigo para hacer solida la X cuando se le esta enzima */
.opacidad{
    opacity: 0.5;
}

.solido:hover{
    opacity: 1.0;
}

</style>
