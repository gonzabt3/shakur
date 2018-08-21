<template>
    <div>
        <b-form-group>
            <b-card class="shadow">
                <b-row>
                    <b-col cols="3"  class="text-center" id="imagenUser">
                        <b-img rounded="circle" width="75" height="75" thumbnail fluid src="http://comomurio.info/wp-content/uploads/2015/03/Pancho-Villa.jpg" alt="Thumbnail" />
                    </b-col>
                    <b-col>
                        <b-row>
                            <b-col id="nombreUser" cols="7">
                                <h2 class="text-center">Chopan Llavi</h2>
                            </b-col>
                            <b-col>
                                <label>7 de junio 1996</label>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12">
                                <b-progress :value="progreso" ></b-progress>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <br>
                <b-form-group class="text-center">
                    <p class="card-text text-justify">
                        Revolucion el segundo martes del corriente
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
                    <comentario></comentario>
                    <hr />
                    </div>
                    <b-row>
                        <b-col cols="2">
                            <b-img rounded="circle" width="35" height="35" thumbnail fluid src="http://comomurio.info/wp-content/uploads/2015/03/Pancho-Villa.jpg" alt="Thumbnail" />
                        </b-col>
                        <b-col cols="7">
                            <b-form-input id="newComent"
                            required
                            placeholder="Comenta algo">
                            </b-form-input>
                        </b-col>
                        <b-col>
                            <b-button type="submit" variant="primary">Comentar</b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-card>
        </b-form-group>
    </div>
</template>

<script>
import Comentario from '@/components/Comentario';

export default {
  name: 'PostUser',
  components: { Comentario },
  data() {
    return {
      beerIcon: 'static/image/beer.png',
      commentIcon: 'static/image/comment.png',
      progreso: 55,
      cantLikes: 5,
      stringBtnLike: 'Like',
      cantComentarios: 1,
      btnLikeEstado: false,
      showComentarios: false,
      showManyComentarios: false,
      iconEyeComentarios: 'eye',
    };
  },
  methods: {
    btnLike() {
      if (!this.btnLikeEstado) {
        this.btnLikeEstado = true;
        this.cantLikes += 1;
      } else {
        this.btnLikeEstado = false;
        this.cantLikes -= 1;
      }
    },
  },
  watch: {
    btnLikeEstado(value) {
      this.beerIcon = (value == true ? 'static/image/beerVacia.png' : 'static/image/beer.png');
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
