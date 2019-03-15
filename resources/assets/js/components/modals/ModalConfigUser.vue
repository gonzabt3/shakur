<template>
         <b-modal  size="lg" ref="configUser" id="configUser" title="Configuracion usuario">
        <b-container fluid>
                <b-row>
                    <b-col>
                        <b-row>
                            <b-col class="col-2">
                                <b-form-group id="alias"
                                label="Alias:"
                                label-for="alias">
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-input 
                                    id="alias"
                                    v-model="data.alias" 
                                    placeholder="Ingrese alias"
                                    :disabled="!checkedAlias">
                                </b-form-input>
                            </b-col>
                            <b-col class="col-1">
                                <b-form-checkbox v-model="checkedAlias" > 
                                </b-form-checkbox>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="col-2">
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
                            <b-col class="col-2">
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
                            <b-col class="col-2">
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
        </b-container>
               <template slot="modal-footer">
      <button class="btn btn-success btn-block" @click="submit" type="submit">Guardar</button>
    </template>
    </b-modal>
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
    watch:{
        checkedAlias(val){
            if(!val){
                this.data.alias=""
            }
        }
    },
    methods:{
        getMaterias() {
            this.$http
                .get("api/materias/"+this.idCarrera)
                .then(response => {
                    // console.log(response);
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
                // console.log("volvio");
            })  
        }
    }
    
}
</script>
<style scoped>

</style>
