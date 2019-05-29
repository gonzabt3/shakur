<template>
    <b-container class="form-group">
        <b-card class="shadow" >
            <b-row>
                <b-col>
                    <b-form inline >
                        <h3><u>Documentación</u></h3>
                        <font-awesome-icon   icon="plus-circle"  class="separacionIcon pointer" size="lg" @click="showModal" />
                    </b-form>
                </b-col>
            </b-row>
             <b-row>
                 <b-col>
                    <p
                        v-for="item in arrayDocs"
                        :key="item.id">
                        <a @click="downloadFiles(item.files)" >
                            <font-awesome-icon icon="arrow-circle-down" class=" pointer" size="sm" />
                            {{item.nombre}}</a> subido por {{nameAlias(item.user)}} <delete
                            @actualizar="getDocs"
                            :id="item.id"
                            tipo="doc"
                            :flag-autor="item.flagAutor"
                             /></p>
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
const ModalNewDoc = () => import('../components/modals/ModalNewDoc');
const Delete = () => import('../components/common/Delete');

// import ModalNewDoc from '../components/modals/ModalNewDoc';
// import Delete from '../components/common/Delete';

export default {
    name: 'DocWall',
    components: { ModalNewDoc,Delete },
    data(){
        return{
            arrayDocs:[],
            idMateria:null
        }
    },
    methods:{
      showModal(){
          this.$root.$emit('bv::show::modal','newDoc')
      },
       nameAlias(user){
            if(user.alias==null){
                return user.name+' '+user.apellido;
            }else{
                return user.alias
            }
        },
      getDocs(val){
        //ESTE IF ESTA PARA CUANDO SE TIRA EL GET DESDE LA TOPBAR
          if(val!=null && val!=true){
              this.idMateria=val
          }
        //   console.log("GET DOCS");
          this.arrayDocs = []
          this.axios.get('api/file/'+this.idMateria)
          .then(({data}) => {
            //   console.log(data);
              this.arrayDocs=data
          })
      },
      downloadFiles(files){
            _.each(files, (file, key) => {
                var url = file.path
                //saco el nombre de la url
                var filename = url.substring(url.lastIndexOf('/')+1);
                var link = document.createElement("a");
                link.download = filename;
                link.href = url;
                link.click();          
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
