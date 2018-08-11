<template>
    <b-container>
        <b-card class="shadow" >
            <b-row>
                <b-col>
                    <b-form inline >
                        <h3><u>Proximos Eventos</u></h3>
                        <font-awesome-icon  icon="plus-circle"  class="separacionIcon pointer" size="lg" @click="showModal"/>
                    </b-form>
                </b-col>
            </b-row>
             <b-row>
                 <b-col>
                        <p>Parcial de Matematicas -> 20/5</p>
                        <p>Entrega TP -> 31/6</p>
                </b-col>
            </b-row>
        </b-card>
        <modal-new-event></modal-new-event>
    </b-container>
</template>

<script>
import ModalNewEvent from '@/components/modals/ModalNewEvent';

export default {
  name: 'EventsWall',
  components: { ModalNewEvent },
  methods:{
      showModal(){
          this.$root.$emit('bv::show::modal','newEvent')
      }
  }
};
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
