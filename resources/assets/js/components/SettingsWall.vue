<template>
    <b-container class="padding-5">
        <b-card class="shadow" id="settingsCard" title="Configuracion">
            <h6 @click="showModal"><u class="pointer">Mi perfil</u></h6>
            <h6 @click="showModalErrorReport"><u class="pointer">Reportar errores</u></h6>
            <h6  ><u @click="logout" class="pointer">Salir</u></h6>
            <!-- <font-awesome-icon  icon="plus-circle"  class="separacionIcon pointer" size="lg" @click="showModal" /> -->
        </b-card>
        <modal-config-user :noCerrar="noCerrar"></modal-config-user>
        <modal-report-error :idMateria="idMateria" ></modal-report-error>
    </b-container>
</template>
<script>
const ModalConfigUser = () => import('../components/modals/ModalConfigUser');
const ModalReportError = () => import('../components/modals/ModalReportError');

// import ModalConfigUser from '../components/modals/ModalConfigUser';

export default {
  name: 'SettingsWall',
  components: { ModalConfigUser , ModalReportError},
  props:['noCerrar','idMateria'],
  methods:{
      showModal(){
          this.$root.$emit('bv::show::modal','configUser')
      },
      showModalErrorReport(){
          this.$root.$emit('bv::show::modal','reportError')
      },
      logout(){
            sessionStorage.removeItem('token');
            this.axios.get('api/auth/logout')
            .then((response)=>{
                    window.location.replace("/");
            })
    }
  }
};
</script>
<style scoped>
/* #settingsCard{
    height: 100%;
} */

.shadow{
        box-shadow: 10px 10px grey;
    }

.pointer{
    cursor: pointer;
}

.padding-5{
    padding-left: 5px;
    padding-right: 5px;
}
</style>
