<template>
    <b-container class="padding-lateral-7" fluid>
        <b-form-group>
            <!-- <b-card class=""> -->
                <b-row>
                    <b-col  class="" id="imagenUser">
                        <b-img rounded="circle"  thumbnail fluid :src="postData.user.avatar_url" alt="Thumbnail" />
                    </b-col>
                    <b-col cols="9">
                        <b-row class="altoDivNombre">
                            <b-col class="no-padding">
                                <label  class="text-left"><b>{{nameAlias}}</b></label>
                            </b-col>
                            <b-col class="no-padding text-center">
                                <label class="text-center"><b-badge pill variant="secondary">{{postData.created_at | formatDate}}</b-badge></label>
                                <delete 
                                    :id="postData.id"
                                    :flag-autor="postData.flagAutor"
                                    tipo="post"
                                    @actualizar="getPosts"
                                    @showModalDenuncias="showModalDenuncias"
                                />
                            </b-col>
                        </b-row>
                        <b-row>
                            <label>
                             <!-- <p class="card-text text-justify"> -->
                                {{postData.texto}}</label>
                            <!-- </p> -->
                        </b-row>
                        <b-row>
                            <b-col class="no-padding">
                                <like
                                @showModal="showModalLikes"
                                :likes-data="postData.likes"
                                :flag-like="postData.flagLike"
                                :id-post="postData.id"
                                url-like="api/like"
                                tipo="mg"
                                ></like>
                            </b-col>
                            <b-col>
                                <span @click="comentarios">
                                    {{cantComentarios}}
                                <b-img :src="commentIcon" fluid alt="comments" />
                                </span>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>

                <!-- VIEJO -->
                <b-row>
                    <!-- <b-col cols="3"  class="text-center" id="imagenUser">
                        <b-img rounded="circle" width="50" height="50" thumbnail fluid :src="postData.user.avatar_url" alt="Thumbnail" />
                    </b-col> -->
                    <b-col>
                        <b-row>
                            <b-col id="nombreUser" class="no-padding" >
                                <!-- <h5  class="text-left">{{nameAlias}}</h5> -->
                            </b-col>
                            <!-- <b-col cols="5" md="4" class="no-padding">
                            </b-col> -->
                            <b-col cols="2" class="text-center ">
                                <!-- <delete 
                                    :id="postData.id"
                                    :flag-autor="postData.flagAutor"
                                    tipo="post"
                                    @actualizar="getPosts"
                                    @showModalDenuncias="showModalDenuncias"
                                /> -->
                            </b-col>
                        </b-row>
                        <b-row>
                            <!-- <label><b-badge pill variant="secondary">{{postData.created_at | formatDate}}</b-badge></label> -->
                            <!-- <b-col cols="12" class="no-padding-left">
                                <b-progress  :value="progreso" ></b-progress>
                            </b-col> -->
                        </b-row>
                    </b-col>
                </b-row>
                <b-form-group class="text-center">
                    <!-- <p class="card-text text-justify">
                        {{postData.texto}}
                    </p> -->
                    <img class="image cuadrado100px" :key="i" v-for="(image, i) in arrayImages" :src="image.path" @click="onClick(i)">
                      <b-button  :key="y" v-for="(file, y) in arrayFiles" variant="outline-dark" :href="file.path" download>
                        <!-- <font-awesome-icon  icon="plus-circle"  class=" pointer"  /> -->
                          {{file.nombre}}</b-button>
                    <vue-gallery-slideshow :images="urlImages" :index="indexImage" @close="indexImage=null"></vue-gallery-slideshow>
                </b-form-group>
                <b-row>
                    <!-- <b-form-group> -->
                    <b-col cols="8">
                        <!-- <like
                        @showModal="showModalLikes"
                        :likes-data="postData.likes"
                        :flag-like="postData.flagLike"
                        :id-post="postData.id"
                        url-like="api/like"
                        tipo="mg"
                        ></like> -->
                        
                        </b-col>
                        <b-col>
                            <!-- <span @click="comentarios"> -->
                            <!-- <b-button  block size="sm" @click="comentarios"> -->
                           <!-- {{cantComentarios}}
                            <b-img :src="commentIcon" fluid alt="comments" /> -->
                        <!-- </b-button> -->
                        <!-- </span> -->
                        </b-col>
                    <!-- </b-form-group> -->
                </b-row>
                <hr/>
                <div v-if="showComentarios">
                    <comentario v-for="item in arrayComentarios"
                    :comentario-data="item"
                    @getComentarios="getComentarios"
                    @showModalLikes="showModalLikes"
                    @showModalDenuncias="showModalDenuncias"
                    :key="item.id" ></comentario>
                    <hr />
                    <b-row>
                        <b-col cols="2">
                            <!-- <b-img rounded="circle" width="35" height="35" thumbnail fluid src="http://comomurio.info/wp-content/uploads/2015/03/Pancho-Villa.jpg" alt="Thumbnail" /> -->
                        </b-col>
                        <b-col cols="7">
                            <b-form-input id="newComent"
                            v-model="objectComentario.texto"
                            required
                            placeholder="Comenta algo">
                            </b-form-input>
                        </b-col>
                        <b-col cols="3">
                            <b-button @click="submitComentario" type="submit" variant="primary">
                            <font-awesome-icon   icon="comment" />                                
                            </b-button>
                        </b-col>
                    </b-row>
                </div>
            <!-- </b-card> -->
        </b-form-group>
    </b-container>
</template>

<script>
const Comentario = () => import('../components/common/Comentario');
// const Like = () => import('./components/common/Like');
const Delete = () => import('../components/common/Delete');
// const moment = () => import('moment');
const VueGallerySlideshow = () => import('vue-gallery-slideshow');


// import Comentario from '../components/common/Comentario';
import Like from '../components/common/Like';
// import Delete from '../components/common/Delete';
import moment from "moment";
// import VueGallerySlideshow from 'vue-gallery-slideshow'

const dateFormat ="DD-MM-YYYY HH:mm";

export default {
  name: 'PostUser',
  components: { Comentario,Like,Delete,VueGallerySlideshow},
  props:['postData'],//data entrante
  data() {
    return {
      commentIcon: '../images/comment.png',
      progreso: 55,
      cantComentarios: null,
      showComentarios: false,
      showManyComentarios: false,
      iconEyeComentarios: 'eye',
      user:1,
      arrayFiles:[],
      arrayImages:[],
      objectComentario:{
          texto:'',
          publicacion_id:this.postData.id
        },
        // urlImages:[],
        indexImage:null
    };
  },
    filters:{
        formatDate(value) {
            if (!value) return "-";
            return moment(value, "YYYY-MM-DD HH:mm:ss").format(dateFormat);
        },
    },
    computed:{
        nameAlias: function(){
            // console.log(this.postData)
            if(this.postData.user.alias==null || this.postData.user.alias=='null'){
                return this.postData.user.name+' '+this.postData.user.apellido;
            }else{
                return this.postData.user.alias
            }
        },
        urlImages: function(){
            let array=[]
            _.each(this.arrayImages, (file, key) => {
                  array.push(file.path)
            });
            return array;
        }
    },
    mounted(){
        this.separateFilesAdjuntos();
    },
    methods: {
        separateFilesAdjuntos(){
            let arrayTodo = this.postData.files;

            _.each(arrayTodo, (file, key) => {            
                let extension = file.extension;
                if(extension == 'png' || extension=='jepg' || extension =="jpg"  || extension =="gif"){
                    this.arrayImages.push(file);
                }else{  
                    this.arrayFiles.push(file);
                }
                
            });

            // console.log(arrayTodo);
        },
        onClick(i) {
        this.indexImage = i;
        },
        showModalLikes(idPost,type){
            this.$emit("showModalLikes",idPost,type);
        },
        showModalDenuncias(idItem,type){
            this.$emit("showModalDenuncias",idItem,type);
        },
        submitComentario(){
            // console.log(this.objectComentario);
            this.axios.post('api/comentario',this.objectComentario)
            .then((response) =>{
                this.objectComentario.texto=''
                this.getComentarios()
            })        
        },
        comentarios(){
            if(!this.showComentarios){
                this.getComentarios()
                this.showComentarios=true
            }else{
                this.showComentarios=false
            }
        },
        getComentarios(){
            this.arrayComentarios=[]
            this.axios.get('api/comentarios/'+this.postData.id)
                        .then(({data}) => {
                            this.arrayComentarios=data
                            this.cantComentarios=this.arrayComentarios.length
                        });
        },
        getPosts(value=null){
            this.$emit("getPosts",value)  
        }
  },
  watch: {
    showManyComentarios(value) { // cambia el icon del ojo de los comentarios
      this.iconEyeComentarios = (value == true ? 'eye-slash' : 'eye');
    },

  },
};
</script>

<style scoped>
#nombreUser{
    padding-left:0;
}

.separacionIcon{
    /* villeriada */
    margin-bottom: 3%;
    margin-left: 3%;
}
.pointer{
    cursor: pointer;
}

.altoDivNombre{
        height: 25%;
}

.shadow{
        box-shadow: 10px 10px grey;
    }

.no-margin-bottom{
    margin-bottom: 0px;
}

.no-padding{
    padding-left: 0px;
    padding-right: 0px;
}

.no-padding-left{
    padding-left: 0px;
}

.left-padding-20{
    padding-left:20px;
}

/* CODIGO PARA PONER LA BARRA SEPARADORA CON EL OJO */
.strike {
    display: block;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
}

.strike > span {
    position: relative;
    display: inline-block;
}

.strike > span:before,
.strike > span:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 9999px;
    height: 1px;
    background: grey;
}

.strike > span:before {
    right: 100%;
    margin-right: 15px;
}

.strike > span:after {
    left: 100%;
    margin-left: 15px;
}

/* twitter style */

.padding-lateral-7{

    padding-left: 7px;
    padding-right: 7px;

}

/* piso el estilo de card-body generado por el b-card */
.card-body {
    padding-top: 7px !important;
    padding-bottom: 7px !important;
    padding-left: 7px !important;
    padding-right: 7px !important; 
}

/* cuadrado de 100px en las thumbnail */
.cuadrado100px{
    width: 100px;
    height: 100px;
}
</style>
