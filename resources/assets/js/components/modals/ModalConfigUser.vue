<template>
        <b-container   fluid>
         <b-modal   ref="configUser" id="configUser" title="Configuracion usuario">
                <b-row >
                    <b-col  cols="12">
                        <b-row>
                            <b-col cols="2">
                                <b-form-group id="alias"
                                label="Alias:"
                                label-for="alias">
                                </b-form-group>
                            </b-col>
                            <b-col cols="7">
                                <b-form-input 
                                    id="alias"
                                    v-model="data.alias" 
                                    placeholder="Ingrese alias"
                                    :disabled="!checkedAlias">
                                </b-form-input>
                            </b-col>
                            <b-col  >
                                <b-form-checkbox v-model="checkedAlias" > 
                                </b-form-checkbox>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="2">
                                <b-form-group id="nombre"
                                label="Nombre:"
                                label-for="nombre">
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-input 
                                id="nombre"
                                v-model="data.name"
                                placeholder="Ingrese Nombre">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="2">
                                <b-form-group id="apellido"
                                label="Apellido:"
                                label-for="apellido">
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-input 
                                id="apellido"
                                v-model="data.apellido"
                                placeholder="Ingrese apellido">
                                </b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row>
                            <b-col cols="2">
                                <b-form-group id="materias"
                                label="Materias en curso:"
                                label-for="materias">
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <v-select
                                    :options="opcionesMaterias"
                                    v-model="data.materias"
                                    multiple
                                    placeholder="Elegi las materias"
                                    input-id="materias"
                                    name="materias">
                                    <template slot="no-options">
                                    <span>No se encontraron resultados</span>
                                    </template>
                                </v-select>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
               <template slot="modal-footer">
                    <button class="btn btn-success btn-block" @click="submit" type="submit">Guardar</button>
                </template>
        </b-modal>
    </b-container>
</template>
<script>
import vSelect from "vue-select";

export default {
    components: { vSelect },
    data(){
        return {
            opcionesMaterias:[],
            idCarrera:15,
            data: {
                name: '',
                apellido: '',
                alias: '',
                materias:null
            },
            checkedAlias:true
        };
    },
    beforeMount() {
         this.getMaterias();
    },
    mounted(){
         this.getInfoUser();
    },
    watch:{
        checkedAlias(val){
            if(!val){
                this.data.alias=""
            }
        }
    },
    methods:{
        getInfoUser(){
            this.axios.get("api/usuario")
                .then(response => {
                    let user=response.data;
                    // console.log(user);

                    this.data.name=user.name
                    this.data.apellido=user.apellido
                    this.data.alias=user.alias
                    this.setMaterias(user.materias)
                    // this.data.materias=[{label:user.materias[0].materia,value:user.materias[0].id}]
                })
        },
        setMaterias(materias){
            let materiasSelected=[]
            _.map(materias,materia =>{
                materiasSelected.push({label:materia.materia,value:materia.id})
            })
            this.data.materias=materiasSelected
        },
        getMaterias() {
            this.axios
                .get("api/materias/"+this.idCarrera)
                .then(response => {
                    _.map(response.data, materia => {
                        this.opcionesMaterias.push({
                        label: materia.materia,
                        value: materia.id
                        });
                    });
            })
        },
        submit(){
            // console.log(this.data);
            this.axios.post('api/usuario/config',this.data)
            .then((response) =>{
                this.$refs.configUser.hide();
                this.$notify({
                    group: 'foo',
                    title: 'Configuracion guardada',
                    type:'success',
                });    
                 window.location.reload()       
        })  
        }
    }
    
}
</script>
<style scoped>
.border-right-20{
    border-right-width: 20px;
}

</style>
