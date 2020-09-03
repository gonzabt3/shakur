<template>
    <b-container fluid class="padding-lateral-7" >
        <!-- <b-form-group> -->
                <b-row>
                    <b-col class="padding-right-7" cols="2">
                        <b-img class="thumbnail-custom" rounded="circle" thumbnail  :src="postData.user.avatar_url" alt="Thumbnail" />
                    </b-col>
                    <b-col cols="10">
                        <b-row class="altoDivNombre">
                            <b-col class="no-padding">
                                <label  class="text-left"><b>{{nameAlias}}</b> &#8226; {{postData.created_at | formatDate}} </label>
                            </b-col>
                            <b-col cols="1" class="no-padding text-center">
                                <!-- <label class="text-center"><b-badge pill variant="secondary">{{postData.created_at | formatDate}}</b-badge></label> -->
                                <delete 
                                    :id="postData.id"
                                    :flag-autor="postData.flagAutor"
                                    tipo="post"
                                    @actualizar="getPosts"
                                    @showModalDenuncias="showModalDenuncias"
                                />
                            </b-col>
                        </b-row>
                        <b-row  >
                            <b-col class="text-break no-padding-left">
                            {{postData.texto}}
                            </b-col>
                        </b-row>
                        <b-row >
                            <img class="image cuadrado100px" :key="i" v-for="(image, i) in arrayImages" :src="image.path" @click="onClick(i)">
                            <b-button  :key="y" v-for="(file, y) in arrayFiles" variant="outline-dark" :href="file.path" download>
                                <!-- <font-awesome-icon  icon="plus-circle"  class=" pointer"  /> -->
                                {{file.nombre}}</b-button>
                            <vue-gallery-slideshow :images="urlImages" :index="indexImage" @close="indexImage=null"></vue-gallery-slideshow>
                        </b-row>
                        <b-row class="form-group">
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
                        <b-row>
                                <b-col v-if="showComentarios">
                                    <comentario v-for="item in arrayComentarios"
                                        :comentario-data="item"
                                        @getComentarios="getComentarios"
                                        @showModalLikes="showModalLikes"
                                        @showModalDenuncias="showModalDenuncias"
                                        :key="item.id" >
                                    </comentario>
                                    <hr class="hr-custom" />
                                    <b-row>
                                        <b-col>
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
                                </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <hr class="hr-custom "/>
            <!-- </b-form-group> -->
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
moment.locale('es-es');
const dateFormat ="D MMM YYYY HH:mm";
// const dateFormat ="DD-MM-YYYY HH:mm";

export default {
  name: 'PostUser',
  components: { Comentario,Like,Delete,VueGallerySlideshow},
  props:['postData'],//data entrante
  data() {
    return {
      commentIcon: '../images/comment.png',
      progreso: 55,
      cantComentarios: this.postData.cantidadComentarios,
      showComentarios: false,
      showManyComentarios: false,
      iconEyeComentarios: 'eye',
      user:1,
      arrayFiles:[],
      arrayImages:[],
      arrayComentarios:[],
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
                if(extension == 'png' || extension=='jepg' || extension =="jpg"  || extension =="gif" || extension == 'PNG' || extension=='JEPG' || extension =="JPG"  || extension =="GIF"){
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
            }else{
                this.showComentarios=false
            }
        },
        getComentarios(){
            if(this.arrayComentarios.length==0){
                this.axios.get('api/comentarios/'+this.postData.id)
                        .then(({data}) => {
                            this.arrayComentarios=data
                        });
            }
            this.showComentarios=true
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
        height: 20px;
}

.shadow{
        box-shadow: 10px 10px grey;
    }

.no-margin-bottom{
    margin-bottom: 0px;
}

.no-padding{
    padding-left: 0px;
    padding-right: 15px;
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

.thumbnail-custom{
    border:none !important;
    width: 48px;
    height: 48px;
}

.padding-right-7{
    padding-right: 0px;
}

.hr-custom{
    margin-top: 8px;
    margin-bottom: 8px;
}
</style>
