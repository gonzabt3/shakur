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
                    <p v-for="item in arrayEventos"> {{item.nombre}} -> {{item.fecha}}</p>
                </b-col>
            </b-row>
        </b-card>
        <modal-new-event
        @responseGetEventos="getEventos"
        ></modal-new-event>
    </b-container>
</template>

<script>
import ModalNewEvent from '../components/modals/ModalNewEvent';

export default {
  name: 'EventsWall',
  components: { ModalNewEvent },
  data(){
      return{
          arrayEventos:[],
          idMateria:5
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
            this.arrayEventos=[],
            this.axios.get('api/eventos/'+this.idMateria)
            .then(({data}) => {
                console.log(data);
                data.forEach(evento => {
                    let eventosAux={
                        idPost:evento.id,
                        nombre: '',
                        fecha:'',
                        temas:'' 
                    }
                    eventosAux.nombre=evento.nombre,
                    eventosAux.fecha=evento.fecha
                    this.arrayEventos.push(eventosAux);
                });
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
