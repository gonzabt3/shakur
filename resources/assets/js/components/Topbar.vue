<template>
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#" class="valentine">Shakur</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item v-for="materia in nombreMaterias" href="#">{{materia}}</b-nav-item>
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
      nombreMaterias:[],
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
                  this.nombreMaterias.push(materia.materia)
              });
          })
    }
  }
};

</script>

<style scoped>
.valentine{
  font-family:valentine !important;
}
</style>
