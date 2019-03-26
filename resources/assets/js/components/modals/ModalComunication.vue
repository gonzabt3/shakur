<template>
    <b-modal :hide-footer="true"  ref="comunicationModal" id="comunicationModal" :title="title">
        <b-container>
            <p>{{p1}}.</p>
            <p>{{p}}</p>
            <b-btn @click="miPerfil" v-if="flagButton" block variant="primary">Ir a mi perfil</b-btn>
        </b-container>
    </b-modal>
</template>
<script>
export default {
    props:['mailUser','p1','p2','title'],
    computed:{
        flagButton: function(){
            if( this.mailUser !=''){
                return false
            }else{
                return true
            }
        },
        p: function (){
            if(this.mailUser != ""){
                return this.p2
            }else{
                return this.p2+" "+this.mailUser
            }
        }
    },
    methods:{
        miPerfil(){
            this.$refs.comunicationModal.hide();
            this.$emit("openMiPerfil");
        }
    }
}
</script>
<style scoped>

</style>
