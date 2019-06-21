<template>
    <b-container>
        <b-modal 
        :no-close-on-backdrop="noCerrar"
        :no-close-on-esc="noCerrar"
        :hide-header-close="noCerrar"
        :hide-footer="true"
        ref="comunicationModal"
        id="comunicationModal"
        :title="title">
            <p>{{p1}}.</p>
            <p>{{p}}</p>
            <b-btn @click="miPerfil" v-if="flagButton" block variant="primary">Ir a mi perfil</b-btn>
        </b-modal>
    </b-container>
</template>
<script>
export default {
    props:['mailUser','p1','p2','title','flagButton',"closeOutSide",'noCerrar'],
    computed:{
        p: function (){
            if(this.mailUser==''){
                return this.p2
            }else{
                return this.p2+" "+this.mailUser
            }
        },
        //funcion para obligar al usuario a no poder cerrar el modal,ya que no tiene materias seleccionadas
        // modalClose:function(){
        //     console.log(this.noCerrar);
        //     if(this.noCerrar==1){
        //         return true
        //     }
        //     if(this.noCerrar==0){
        //         return false
        //     }
        // }
    },
    methods:{
        miPerfil(){
            this.$refs.comunicationModal.hide();
            this.$emit("openMiPerfil",true);
        }
    }
}
</script>
<style scoped>

</style>
