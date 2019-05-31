<template>
    <b-container>
        <b-modal :no-close-on-backdrop="true" :hide-footer="true"  ref="comunicationModal" id="comunicationModal" :title="title">
            <p>{{p1}}.</p>
            <p>{{p}}</p>
            <b-btn @click="miPerfil" v-if="flagButton" block variant="primary">Ir a mi perfil</b-btn>
        </b-modal>
    </b-container>
</template>
<script>
export default {
    props:['mailUser','p1','p2','title','flagButton',"closeOutSide",],
    computed:{
        p: function (){
            if(this.mailUser==''){
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
