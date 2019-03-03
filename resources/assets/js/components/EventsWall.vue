<template>
    <b-container>
        <b-card class="shadow" >
            <b-row>
                <b-col>
                    <b-form inline >
                        <h3><u>Proximos Eventos</u></h3>
                        <font-awesome-icon  icon="plus-circle"  class="separacionIcon pointer" size="lg" @click="showModal" />
                    </b-form>
                </b-col>
            </b-row>
             <b-row>
                 <b-col>
                    <p v-for="item in arrayEventos" 
                    :key="item.id" > {{item.nombre}} -> {{item.fecha}} <delete
                    @actualizar="getEventos"
                    :id="item.id"
                    :flag-autor="item.flagAutor"
                    tipo="event"
                    /> </p>
                </b-col>
            </b-row>
        </b-card>
        <modal-new-event
        @responseGetEventos="getEventos"
        :id-materia="idMateria"
        ></modal-new-event>
    </b-container>
</template>

<script>
import ModalNewEvent from '../components/modals/ModalNewEvent';
import Delete from '../components/common/Delete'

export default {
    name: 'EventsWall',
    props:['idMateria'],
  components: { ModalNewEvent ,Delete},
  data(){
      return{
          arrayEventos:[],
      }
  },
  mounted(){
        this.getEventos();
  },
  methods:{
      showModal(){
          this.$root.$emit('bv::show::modal','newEvent')
      },
      getEventos(){
            // console.log(this.idMateria);
            this.arrayEventos=[],
            this.axios.get('api/eventos/'+this.idMateria)
            .then(({data}) => {
                this.arrayEventos=data;
            });
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
