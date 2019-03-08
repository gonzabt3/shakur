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
                    :key="item.id" > {{item.nombre}} -> {{item.fecha | formatDate}} <delete
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
import moment from "moment";


const dateFormat ="DD-MM-YYYY HH:mm";

export default {
    name: 'EventsWall',
  components: { ModalNewEvent ,Delete},
  data(){
      return{
          arrayEventos:[],
          idMateria:null
      }
  },
  methods:{
      showModal(){
          this.$root.$emit('bv::show::modal','newEvent')
      },
      getEventos(val){
            //ESTE IF ESTA PARA CUANDO SE TIRA EL GET DESDE LA TOPBAR
            if(val!=null){
                this.idMateria=val
            }
            // console.log(this.idMateria);
            this.arrayEventos=[],
            this.axios.get('api/eventos/'+this.idMateria)
            .then(({data}) => {
                this.arrayEventos=data;
            });
      }
  },
    filters:{
    formatDate(value) {
        if (!value) return "-";
        return moment(value, "YYYY-MM-DD HH:mm:ss").format(dateFormat);
    },
},
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
