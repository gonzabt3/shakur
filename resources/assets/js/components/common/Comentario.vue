<template>
      <b-form-group>
        <b-row>
            <b-col cols="2">
                <b-img rounded="circle" width="50" height="50" thumbnail fluid src="http://comomurio.info/wp-content/uploads/2015/03/Pancho-Villa.jpg" alt="Thumbnail" />
            </b-col>
            <b-col>
                <b-row>
                    <h5 class="no-margin-bottom">Gonzalo Muscolo</h5>
                </b-row>
                <b-row>
                    <p class="form-control">{{comentarioData.comentario}}</p>
                </b-row>
                <b-row>
                    <b-button size="sm" @click="btnLike">
                            <label class="no-margin-bottom">{{comentarioData.likes}}</label>
                            <b-img :src="beerIcon" fluid alt="beerLike" /> {{stringBtnLike}}
                        </b-button>
                </b-row>
            </b-col>
        </b-row>
        </b-form-group>
</template>
<script>

export default {
  props:['comentarioData'],//data entrante
  data() {
    return {
      beerIcon: '../images/beer.png',
      cantLikes: 5,
      btnLikeEstado: false,
      stringBtnLike: 'Like',
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
      this.beerIcon = (value == true ? '../images/beerVacia.png' : '../images/beer.png');
      this.stringBtnLike = (value == true ? 'Dislike' : 'Like');
    },
  },

};
</script>
<style scoped>
.no-margin-bottom{
    margin-bottom: 0px;
}

</style>
