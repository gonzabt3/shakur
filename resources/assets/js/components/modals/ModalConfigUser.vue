<template>
        <b-container   fluid>
         <b-modal  @show="getInfoUser()"
        :no-close-on-backdrop="noCerrar"
        :no-close-on-esc="noCerrar"
        :hide-header-close="noCerrar"
           ref="configUser" id="configUser" title="Configuracion usuario">
                <b-row >
                    <b-col  cols="12">
                        <b-row >
                            <b-col cols="4" />
                            <b-col > 
                                <b-form-group>
                                    <!-- <b-img @click="avatarModal"  style="cursor:pointer" center rounded="circle" thumbnail fluid :src="data.avatar_url" alt="Thumbnail" /> -->
                                     <croppa 
                                     alt="Thumbnail"
                                        class="c1"
                                        :width="100"
                                        :height="100"
                                        :image-border-radius="50"
                                        canvas-color="#e6e6e6"
                                        placeholder="Selecciona una imagen" 
                                        v-model="croppa"
                                        :placeholder-font-size="8"
                                        prevent-white-space
                                        @init="onInit"
                                        >
                                          <img slot="initial" :src="data.avatar_url" />
                                        </croppa>
                                </b-form-group>
                            </b-col>
                        </b-row>
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
                                <b-form-group id="Universiad"
                                label="Univeridad:"
                                label-for="universidad">
                                </b-form-group>
                            </b-col>
                            <b-col>
                              <b-form-select
                                v-model="data.universidad" 
                                :class="{'is-invalid':errors.has('universidad')}"
                                v-validate="'required'"
                                id="universidad" 
                                :options="opcionesUniversidades" 
                                name="universidad" 
                                text-field="description" 
                                value-field="id"
                                    >
                                <option :value="null" disabled>Selecciona un opcion</option>
                              </b-form-select>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="2">
                                <b-form-group id="carrera"
                                label="Carrera:"
                                label-for="carreras">
                                </b-form-group>
                            </b-col>
                            <b-col>
                              <b-form-select
                                v-model="data.carrera_id" 
                                :class="{'is-invalid':errors.has('carrera')}"
                                v-validate="'required'"
                                id="carrera" 
                                :options="opcionesCarreras" 
                                name="carrera" 
                                text-field="description" 
                                value-field="id"
                                     ><option :value="null" disabled>Selecciona un opcion</option>
                              </b-form-select>
                            </b-col>
                        </b-row>
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
                    <button class="btn btn-success btn-block" :disabled="disabledButton" @click="submit" type="submit">
                         <img v-show="iconLoading" class="sizeLoading" src="../loadingWhite.svg">
                        {{textButton}}</button>
                </template>
        </b-modal>
        <modal-avatar></modal-avatar>
    </b-container>
</template>
<script>
const vSelect = () => import('vue-select');
const ModalAvatar = () => import('../modals/ModalAvatar');
// import vSelect from "vue-select";
// import ModalAvatar from '../modals/ModalAvatar';

export default {
    components: { vSelect,ModalAvatar },
    props:['noCerrar'],
    data(){
        return {
            croppa: {},
            opcionesMaterias:[],
            opcionesUniversidades: [
                // {
                //     id: null,
                //     description: "Seleccionar una opción",
                //     disabled: true
                // }
            ],            
            opcionesCarreras:[
                // {
                //     id: null,
                //     description: "Seleccionar una opción",
                //     disabled: true
                // }
            ],
            idCarrera:null,
            blobFile:null,
            data: {
                name: '',
                apellido: '',
                alias: '',
                universidad:null,
                carrera_id:null,
                materias:null,
                avatar_url:''
            },
            materias2:[],
            materias2contador:0,
            checkedAlias:true,
            loading:false,
            disabledButton:false,
            textButton:'Guardar',
            iconLoading:false,
            urlCarrera:'',
            urlMaterias:''
        };
    },
    beforeMount() {
        //  this.getMaterias();
        //  this.getValuesSelectUniversidad();
    },
    // mounted(){
    //      this.getInfoUser();
    // },
    watch:{
        checkedAlias(val){
            if(!val){
                this.data.alias=""
            }
        },
        loading: function(value){
         if(value){
             this.disabledButton=true;
             this.textButton=''
             this.iconLoading=true
         }else{
             this.disabledButton=false;
             this.textButton='Guardar'
             this.iconLoading=false
         }
     } ,
      "data.universidad": function(value){
        this.data.carrera_id=null

        if(value!=null){
                            // this.materias2=[]

            this.data.materias=null
            this.urlCarrera="api/carreras/"+value
            this.getValuesSelectCarrera()
        }
       
     },
      "data.carrera_id": function(value){

        if(value!=null){
            //esto es una negrada ,la primera vez que pasa no borra  el array de los seleccionados porque es cuando se inicializa todo
            if(this.materias2contador!=0){
                this.materias2=[]
            }
            this.materias2contador=1
            this.data.materias=null
            this.urlMaterias="api/materias/"+value;
            this.getMaterias()
        }

     },
    },
    methods:{
        avatarModal(){
            this.$root.$emit('bv::show::modal','modalAvatar')
        },
        getInfoUser(){
            this.axios.get("api/usuario")
                .then(response => {
                    // console.log(response);
                    let user=response.data;

                    this.idCarrera=user.carrera_id
                    this.data.name=user.name
                    this.data.apellido=user.apellido
                    this.data.alias=user.alias
                    this.data.avatar_url=user.avatar_url
                    this.materias2=user.materias

                    //deshabilito el campo de alias
                    if(this.data.alias==null){
                        this.checkedAlias=false
                    }

                    //selects
                    this.getValuesSelectUniversidad(user.universidad.id);
                    this.urlCarrera="api/carreras/"+user.universidad.id;
                    this.getValuesSelectCarrera(user.carrera_id);
                    // this.getMaterias(user.materias)
                })
        },
        setMaterias(materias){
            let materiasSelected=[]
            _.map(materias,materia =>{
                materiasSelected.push({label:materia.materia,value:materia.id})
            })
            this.data.materias=materiasSelected
        },
        getMaterias(value=null) {
            console.log("getmaterias= "+value );
            this.opcionesMaterias=[]
            this.axios
                .get(this.urlMaterias)
                .then(response => {
                    // console.log(response)
                    _.map(response.data, materia => {
                        console.log(materia.materia),
                        this.opcionesMaterias.push({
                        label: materia.materia,
                        value: materia.id
                        });
                    });


                    if(value!=null || this.materias2!=[]){
                        if(this.materias2!=[]){
                            value=this.materias2
                        }
                        console.log(value);
                        this.setMaterias(value)
                    }
            })


        },
        getValuesSelectUniversidad(value=null){
            this.opcionesUniversidades=[]
            this.axios
                .get("api/universidades")
                .then((response) => {
                    let responseOptions = _.map(response.data, option => {
                        this.opcionesUniversidades.push({
                            id:option.id,
                            description:option.nombre
                        })
                        // return {
                        //     id: option.id,
                        //     description: option.nombre
                        // };
                    });
                    // this.opcionesUniversidades = _.union(this.opcionesUniversidades, responseOptions);
                    this.error = "";
                    if(value!=null){
                        this.data.universidad=value
                    }
                })
                .catch(error => {
                    this.error =
                        "Ocurrió un error al llenar los valores de este selector";
                });   
        },
        getValuesSelectCarrera(value=null){
            //villereada para limpiar el array 
            this.opcionesCarreras=[]
             this.axios
                .get(this.urlCarrera)
                .then((response) => {
                    let responseOptions = _.map(response.data, option => {
                        return {
                            id: option.id,
                            description: option.nombre
                        };
                    });
                    this.opcionesCarreras = _.union(this.opcionesCarreras, responseOptions);
                    this.error = "";
                    if(value!=null){
                        this.data.carrera_id=value
                    }
                })
                .catch(error => {
                    this.error =
                        "Ocurrió un error al llenar los valores de este selector";
                });  
        },
         async submit(){
            this.loading=true
            let formData = new FormData();
            
            //paso del blob generado por el cropper a file jpg
            this.blobFile = await this.blobToFile()
            let file = new File([this.blobFile], "name", {type: "image/png", lastModified: Date()});

            formData.append('name',this.data.name);
            formData.append('apellido',this.data.apellido);
            formData.append('avatar_file',file);
            formData.append('alias',this.data.alias);
            formData.append('carrera_id',this.data.carrera_id);
            formData.append('materias',JSON.stringify(this.data.materias));

            this.axios.post('api/usuario/config',formData)
            .then((response) =>{
                this.loading=false
                this.$refs.configUser.hide();
                this.$notify({
                    group: 'foo',
                    title: 'Configuracion guardada',
                    type:'success',
                });    
                 window.location.reload()       
        })  
        this.loading=false
        },
        // ----------------AVATARRRR--------------
         onInit() {
            this.croppa.addClipPlugin(function (ctx, x, y, w, h) {
            /*
            * ctx: canvas context
            * x: start point (top-left corner) x coordination
            * y: start point (top-left corner) y coordination
            * w: croppa width
            * h: croppa height
            */
            // console.log(x, y, w, h)
            ctx.beginPath()
            ctx.arc(x + w / 2, y + h / 2, w / 2, 0, 2 * Math.PI, true)
            ctx.closePath()
        })
    },
     blobToFile(){
        return this.croppa.promisedBlob('image/png', 0.8);
    }

    }
    
}
</script>
<style scoped>
.border-right-20{
    border-right-width: 20px;
}

.sizeLoading{
        width: 30px;
}

</style>
