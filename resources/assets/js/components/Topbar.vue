<template>
<b-navbar  toggleable="md" type="dark" variant="info">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <label class="text-center white no-margin">{{materiaSelected | formatMateriaSelected}}</label>
  <b-navbar-brand href="#" class="valentine">Shakur</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item id="materia" v-for="materia in materias"
      :key="materia.id" @click="clickMateria(materia.id)" >{{materia.nombre}}</b-nav-item>
    </b-navbar-nav>
 
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <h4>{{username}} </h4>
      <!-- <font-awesome-icon  icon="user"  class="pointer" size="lg"  /> -->
      <b-img rounded="circle" width="30" height="30"   :src="avatar_url" />
    </b-navbar-nav>
  </b-collapse>
  <b-navbar-brand class="no-padding" >
    <notification @openPost="openPost" ></notification>
  </b-navbar-brand>
</b-navbar>
</template>

<script>
import notification from '../components/common/Notification';
export default {
  name: 'Topbar',
  components:{notification},
  data(){
    return{
      materias:[],
      username:'',
      avatar_url:'',
      materiaSelected:''
    }
  },
  mounted(){
        this.getMaterias();
  },
  filters:{
    //corta el nombre de la materia seleccionda porqe sino no entra
    formatMateriaSelected(val){
      let ancho = window.innerWidth;
      if(ancho<=576){  
        if(val.length>=25){
          let resto = val.length-25
          val = val.slice(0,-resto);
          // console.log(val+'...');
          return (val+'...');
        }else{
          return val
        }
      }else{
        return val=''
      }
    }
  },
  methods:{
    getMaterias(){
        // this.axios.defaults.headers.common['Accept'] = 'application/json'; 
        // this.axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token'); 
        this.axios
          .get("api/materias2/user")
          .then(response => {
            // console.log(response.data)
            this.username=response.data.username;
            this.avatar_url=response.data.avatar;
              response.data.materias.forEach(materia => {
                let obj={
                  id:materia.id,
                  nombre:materia.materia
                }
                  this.materias.push(obj)
              });
              //hago que se setean los walls y el muro con la primera materia que tiene el user
              if(this.materias.length>0){
                this.clickMateria(this.materias[0].id);
              }else{
                this.$emit("comunication",true)     
              }
          })
    },
    //funcion que marca la materia actual
    clickMateria(val){

      _.each(this.materias, (materia, key) => {
        if(materia.id==val){
          this.materiaSelected=materia.nombre
        }
      });
      this.$emit("changeMateria",val);      
    },
    //METODO PARA ABRIR UN POST DESDE LAS NOTIFICACIONES
    openPost(idPost){
      this.$emit("openPost",idPost)
    }
  }

};

</script>

<style scoped>
.valentine{
  font-family:valentine !important;
}

.white{
  color:#ffffff;
  
}

.no-margin{
    margin-bottom: 0px;
}
</style>
