<template>
    <b-container class="form-group">
        <b-card class="shadow" >
            <b-row>
                <b-col>
                    <b-form inline >
                        <h3><u>Documentación</u></h3>
                        <font-awesome-icon  icon="plus-circle"  class="separacionIcon pointer" size="lg" @click="showModal" />
                    </b-form>
                </b-col>
            </b-row>
             <b-row>
                 <b-col>
                    <p
                        v-for="item in arrayDocs"
                        :key="item.id">
                        <a :href="item.path" download >
                            <font-awesome-icon icon="arrow-circle-down" class=" pointer" size="sm" />
                            {{item.nombre}}</a> subido por {{item.user.name}} {{item.user.apellido}}</p>
                </b-col>
            </b-row>
        </b-card>
        <modal-new-doc 
        @responseGetDocs="getDocs"
        :id-materia="idMateria"
        ></modal-new-doc>
    </b-container>
</template>

<script>
import ModalNewDoc from '../components/modals/ModalNewDoc';

export default {
    props:['idMateria'],
    name: 'DocWall',
    components: { ModalNewDoc },
    data(){
        return{
            arrayDocs:[]
        }
    },
    mounted(){
        this.getDocs();
    },
    methods:{
      showModal(){
          this.$root.$emit('bv::show::modal','newDoc')
      },
      getDocs(){
          this.arrayDocs = []
          this.axios.get('api/file/'+this.idMateria)
          .then(({data}) => {
              this.arrayDocs=data
          })
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
