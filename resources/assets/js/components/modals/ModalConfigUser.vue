<template>
        <b-container   fluid>
         <b-modal   ref="configUser" id="configUser" title="Configuracion usuario">
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
import vSelect from "vue-select";
import ModalAvatar from '../modals/ModalAvatar';

export default {
    components: { vSelect,ModalAvatar },
    data(){
        return {
            croppa: {},
            opcionesMaterias:[],
            idCarrera:null,
            blobFile:null,
            data: {
                name: '',
                apellido: '',
                alias: '',
                materias:null,
                avatar_url:''
            },
            checkedAlias:true,
            loading:false,
            disabledButton:false,
            textButton:'Registrarse',
            iconLoading:false
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
        },
        loading: function(value){
         if(value){
             this.disabledButton=true;
             this.textButton=''
             this.iconLoading=true
         }else{
             this.disabledButton=false;
             this.textButton='Resgistrarse'
             this.iconLoading=false
         }
     }  
    },
    methods:{
        avatarModal(){
            this.$root.$emit('bv::show::modal','modalAvatar')
        },
        getInfoUser(){
            this.axios.get("api/usuario")
                .then(response => {
                    let user=response.data;

                    this.idCarrera=user.carrera_id
                    this.data.name=user.name
                    this.data.apellido=user.apellido
                    this.data.alias=user.alias
                    this.data.avatar_url=user.avatar_url

                    //deshabilito el campo de alias
                    if(this.data.alias==null){
                        this.checkedAlias=false
                    }
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
            formData.append('materias',JSON.stringify(this.data.materias));
            
            console.log(formData.get('materias'));
            // console.log(formData.get(name));
            

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
