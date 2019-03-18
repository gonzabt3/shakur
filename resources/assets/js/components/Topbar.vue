<template>
<b-navbar toggleable="md" type="dark" variant="info">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#" class="valentine">Shakur</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <!-- <h5>asd</h5> -->
      <b-nav-item id="materia" v-for="materia in materias"
      :key="materia.id" @click="clickMateria(materia.id)" >{{materia.nombre}}</b-nav-item>
    </b-navbar-nav>
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <h4>{{username}}</h4>
      <font-awesome-icon  icon="user"  class="pointer" size="lg"  />
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: 'Topbar',
  data(){
    return{
      materias:[],
      username:''
    }
  },
  mounted(){
        this.getMaterias();
  },
  methods:{
    getMaterias(){
        this.axios.defaults.headers.common['Accept'] = 'application/json'; 
        this.axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token'); 
        this.$http
          .get("api/materias2/user")
          .then(response => {
            this.username=response.data.username;
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
              }
          })
    },
    //funcion que marca la materia actual
    clickMateria(val){
        this.$emit("changeMateria",val);      
    }
  }

};

</script>

<style scoped>
.valentine{
  font-family:valentine !important;
}
</style>
