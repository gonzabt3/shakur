<template>
    <div>
        <b-form-group>
            <b-card class="shadow">
                <b-row>
                    <b-col cols="3"  class="text-center" id="imagenUser">
                        <b-img rounded="circle" width="75" height="75" thumbnail fluid :src="postData.imagen" alt="Thumbnail" />
                    </b-col>
                    <b-col>
                        <b-row>
                            <b-col id="nombreUser" cols="7">
                                <h3 class="text-left">{{postData.name}}</h3>
                            </b-col>
                            <b-col>
                                <label>{{postData.fecha}}</label>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" class="no-padding-left">
                                <b-progress  :value="progreso" ></b-progress>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <br>
                <b-form-group class="text-center">
                    <p class="card-text text-justify">
                        {{postData.comentario}}
                    </p>
                </b-form-group>
                <b-row>
                    <b-col  class="">
                        <b-button size="sm" @click="btnLike">
                            <label class="no-margin-bottom">{{cantLikes}}</label>
                            <b-img :src="beerIcon" fluid alt="beerLike" /> {{stringBtnLike}}
                        </b-button>
                        <b-button size="sm" @click="showComentarios = !showComentarios">
                            <label class="no-margin-bottom">{{cantComentarios}}</label>
                            <b-img :src="commentIcon" fluid alt="comments" /> Comentar
                        </b-button>
                    </b-col>
                </b-row>
                <div v-if="showComentarios">
                    <div class="strike form-group">
                        <span><font-awesome-icon  :icon="iconEyeComentarios"   size="sm" @click="showManyComentarios = !showManyComentarios" /></span>
                    </div>
                    <div v-if="showManyComentarios">
                    <comentario v-for="item in arrayComentarios"
                    :comentarioData="item" ></comentario>
                    <hr />
                    </div>
                    <b-row>
                        <b-col cols="2">
                            <b-img rounded="circle" width="35" height="35" thumbnail fluid src="http://comomurio.info/wp-content/uploads/2015/03/Pancho-Villa.jpg" alt="Thumbnail" />
                        </b-col>
                        <b-col cols="7">
                            <b-form-input id="newComent"
                            v-model="objectComentario.texto"
                            required
                            placeholder="Comenta algo">
                            </b-form-input>
                        </b-col>
                        <b-col>
                            <b-button @click="submitComentario" type="submit" variant="primary">Comentar</b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-card>
        </b-form-group>
    </div>
</template>

<script>
import Comentario from '../components/Comentario';

export default {
  name: 'PostUser',
  components: { Comentario },
  props:['postData'],//data entrante
  data() {
    return {
      beerIcon: '../images/beer.png',
      commentIcon: '../images/comment.png',
      progreso: 55,
      cantLikes: this.postData.likes,
      stringBtnLike: 'Like',
      cantComentarios: 1,
      btnLikeEstado: false,
      showComentarios: false,
      showManyComentarios: false,
      iconEyeComentarios: 'eye',
      user:1,
      objectComentario:{
          texto:'',
          publicacion_id:this.postData.idPost,
          user_id:1
      }
    };
  },
    mounted(){
        this.getLikes();
        this.getUserLike();
        this.getComentarios();
    },
methods: {
    //setea en true o false el boton de like
    getUserLike(){
        this.axios.get('api/likes/'+this.postData.idPost+'/'+this.user)
        .then((response) =>{
        // console.log(response);
        if(response.data.length>0){
            this.btnLikeEstado=true
        }
        })  
    },
    getLikes(){
        this.axios.get('api/likes/'+this.postData.idPost)
        .then((response) =>{
            this.cantLikes=response.data
        })  

    },
    btnLike() {
      if (!this.btnLikeEstado) {
        let objetoLike = {
            user_id:this.user,
            publicacions_id:this.postData.idPost
        }

        this.axios.post('api/like',objetoLike)
        .then((response) =>{
            this.btnLikeEstado = true;
            this.cantLikes += 1;
        })   


      } else {
        this.btnLikeEstado = false;
        this.cantLikes -= 1;
      }
    },
    submitComentario(){
        // console.log(this.objectComentario);
        this.axios.post('api/comentario',this.objectComentario)
        .then((response) =>{
            this.objectComentario.texto=''
            this.getComentarios()
        })        
    },
    getComentarios(){
        this.arrayComentarios=[]
        this.axios.get('api/comentarios/'+this.postData.idPost)
                    .then(({data}) => {
                        // console.log(data)
                        data.forEach(comentario => {
                            let comentarioAux={
                                idPost:comentario.id,
                                name: 'Pepe San martin',
                                comentario:'la concha del pato',
                                fecha:'20 de agosto 2055',
                                imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jos%C3%A9_de_San_Mart%C3%ADn_%28retrato%2C_c.1828%29.jpg/457px-Jos%C3%A9_de_San_Mart%C3%ADn_%28retrato%2C_c.1828%29.jpg',
                                likes:7 
                            }
                            comentarioAux.comentario=comentario.texto,
                            comentarioAux.fecha=comentario.created_at
                            this.arrayComentarios.push(comentarioAux);
                        });
                        this.cantComentarios=this.arrayComentarios.length
                    });
    }
  },
  watch: {
    btnLikeEstado(value) {
      this.beerIcon = (value == true ? '../images/beerVacia.png' : '../images/beer.png');
      this.stringBtnLike = (value == true ? 'Dislike' : 'Like');
    },
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

.shadow{
        box-shadow: 10px 10px grey;
    }

.no-margin-bottom{
    margin-bottom: 0px;
}

.no-padding-left{
    padding-left: 0px;
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
</style>
