<template>
      <b-form-group>
        <b-row>
            <b-col cols="2">
                <b-img rounded="circle" width="50" height="50" thumbnail fluid src="http://comomurio.info/wp-content/uploads/2015/03/Pancho-Villa.jpg" alt="Thumbnail" />
            </b-col>
            <b-col>
                <b-row>
                    <b-col cols="11">
                        <h5 class="no-margin-bottom">{{comentarioData.user.name}}</h5>
                    </b-col>
                    <b-col cols="1">
                        <delete
                        @actualizar="getComentarios" 
                        :id="comentarioData.id"
                        :flag-autor="comentarioData.flagAutor"
                        tipo="comment"
                        />
                    </b-col>
                </b-row>
                <b-row>
                    <p class="form-control">{{comentarioData.texto}}</p>
                </b-row>
                <b-row>
                    <like
                      :likes-data="comentarioData.likes_comentarios"
                      :flag-like="comentarioData.flagLike"
                      :id-post="comentarioData.id"
                      url-like="api/like/comentario"
                      tipo="cm"
                      ></like>
                </b-row>
            </b-col>
        </b-row>
        </b-form-group>
</template>
<script>
import Like from '../common/Like';
import Delete from '../common/Delete';

export default {
    //prueba
  components:{Like,Delete},
  props:['comentarioData'],//data entrante
  data() {
    return {

    };
  },
  methods:{
      getComentarios(){
        this.$emit("getComentarios")  
      }
  }
};
</script>
<style scoped>
.no-margin-bottom{
    margin-bottom: 0px;
}

</style>
