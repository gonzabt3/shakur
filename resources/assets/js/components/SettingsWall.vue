<template>
    <b-container>
        <b-card class="shadow" id="settingsCard" title="Configuracion">
            <h6 @click="showModal"><u>Mi perfil</u></h6>
            <!-- <font-awesome-icon  icon="plus-circle"  class="separacionIcon pointer" size="lg" @click="showModal" /> -->
        </b-card>
        <modal-config-user></modal-config-user>
    </b-container>
</template>
<script>
import ModalConfigUser from '../components/modals/ModalConfigUser';

export default {
  name: 'SettingsWall',
  components: { ModalConfigUser },
  methods:{
      showModal(){
          this.$root.$emit('bv::show::modal','configUser')
      }
  }
};
</script>
<style scoped>
#settingsCard{
    height: 100%;
}

.shadow{
        box-shadow: 10px 10px grey;
    }
</style>
