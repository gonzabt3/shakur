<template>
        <font-awesome-icon class="opacidad solido pointer"  icon="times" @click="sumbit"/>
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
            if(this.flagAutor){
                this.axios.delete('api/'+this.tipo+'/'+this.id)
                .then(({data}) => {
                    this.$emit("actualizar",true)  
                })
            }else{
                this.$emit("showModalDenuncias",this.id,this.tipo);
            }
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
