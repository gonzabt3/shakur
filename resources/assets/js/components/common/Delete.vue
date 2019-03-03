<template>
        <font-awesome-icon v-if="flagAutor" class="opacidad solido pointer"  icon="times" @click="sumbit"/>
</template>
<script>
export default {
    name:"dalete",
    props:['id','tipo','flagAutor','size'],
    data(){
        return{
            
        }
    },
    methods:{
        sumbit(){
            this.axios.delete('api/'+this.tipo+'/'+this.id)
            .then(({data}) => {
                this.$emit("actualizar")  
            })
        }
    },
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

.pointer{
    cursor: pointer;
}

</style>
