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
                                <b-progress :value="progreso" max="100" ></b-progress>
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
                        <b-button size="sm">
                            <label class="no-margin-bottom">{{cantLikes}}</label>
                            <b-img :src="beerIcon" fluid alt="beerLike" /> Like
                        </b-button>
                        <b-button size="sm">
                            <label class="no-margin-bottom">{{cantComentarios}}</label>
                            <b-img :src="commentIcon" fluid alt="comments" /> Comentar
                        </b-button>
                    </b-col>
                </b-row>
                <hr />
                <comentario></comentario>
            </b-card>
        </b-form-group>
    </div>
</template>

<script>
import Comentario from '@/components/Comentario';

export default {
  name: 'PostUser',
  components:{Comentario},
  data() {
    return {
      beerIcon: 'static/image/beer.png',
      commentIcon: 'static/image/comment.png',
      progreso: 67,
      cantLikes:5,
      cantComentarios:4
    };
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

</style>
