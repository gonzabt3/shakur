<template>
    <b-container  fluid>
         <b-modal   ref="modalLikes" id="modalLikes" :hide-footer="true">
                <b-row >
                  
                </b-row>
         </b-modal>
     </b-container>
</template>
<script>
export default {
    props:['id','type'],
    watch:{
        id:function(val){
            console.log("id".val);
        }
    },
    mounted(){
        console.log(this.id);
        console.log(this.type);
    },
    methods:{

    }
}
</script>
<style scoped>

</style>
