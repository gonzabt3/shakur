<template>
    <b-container fluid>
        <b-form-group>
            <b-card class="shadow">
                <b-row>
                    <b-col cols="3"  class="text-center" id="imagenUser">
                        <b-img rounded="circle" width="75" height="75" thumbnail fluid :src="postData.imagen" alt="Thumbnail" />
                    </b-col>
                    <b-col>
                        <b-row>
                            <b-col id="nombreUser" cols="5" md="6" class="no-padding" >
                                <h3  class="text-left">{{postData.user.name}}</h3>
                            </b-col>
                            <b-col cols="5" md="4" class="no-padding">
                                <label><b-badge pill variant="secondary">{{postData.created_at | formatDate}}</b-badge></label>        
                            </b-col>
                            <b-col cols="1" md="2" class="no-padding text-center left-padding-20">
                                <delete 
                                    :id="postData.id"
                                    :flag-autor="postData.flagAutor"
                                    tipo="post"
                                    @actualizar="getPosts"
                                />
                            </b-col>
                        </b-row>
                        <!-- <b-row>
                            <b-col cols="12" class="no-padding-left">
                                <b-progress  :value="progreso" ></b-progress>
                            </b-col>
                        </b-row> -->
                    </b-col>
                </b-row>
                <br>
                <b-form-group class="text-center">
                    <p class="card-text text-justify">
                        {{postData.texto}}
                    </p>
                </b-form-group>
                <b-row>
                    <b-form-group>
                    <b-col  class="">
                        <like
                        :likes-data="postData.likes"
                        :flag-like="postData.flagLike"
                        :id-post="postData.id"
                        url-like="api/like"
                        tipo="mg"
                        ></like>
                        <b-button size="sm" @click="comentarios">
                            <label class="no-margin-bottom">{{cantComentarios}}</label>
                            <b-img :src="commentIcon" fluid alt="comments" /> Comentar
                        </b-button>
                    </b-col>
                    </b-form-group>
                </b-row>
                <div v-if="showComentarios">
                    <comentario v-for="item in arrayComentarios"
                    :comentario-data="item"
                    @getComentarios="getComentarios"
                    :key="item.id" ></comentario>
                    <hr />
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
    </b-container>
</template>

<script>
import Comentario from '../components/common/Comentario';
import Like from '../components/common/Like';
import Delete from '../components/common/Delete';
import moment from "moment";

const dateFormat ="DD-MM-YYYY HH:mm";

export default {
  name: 'PostUser',
  components: { Comentario,Like,Delete },
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
      objectComentario:{
          texto:'',
          publicacion_id:this.postData.id
        }
    };
  },
    filters:{
        formatDate(value) {
            if (!value) return "-";
            return moment(value, "YYYY-MM-DD HH:mm:ss").format(dateFormat);
        },
    },
methods: {
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
    getPosts(){
        this.$emit("getPosts")  
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
</style>
