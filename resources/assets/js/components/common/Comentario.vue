<template>
      <b-form-group>
        <b-row>
            <b-col cols="2">
                <b-img rounded="circle" width="50" height="50" thumbnail fluid :src="comentarioData.user.avatar_url" alt="Thumbnail" />
            </b-col>
            <b-col cols="9">
                <b-row>
                    <b-col cols="10" class="no-padding-left">
                        <b-form-group>
                            <h5 class="no-margin-bottom">{{nameAlias}}</h5>
                        </b-form-group>
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
                <b-row >
                    <p class="form-control">{{comentarioData.texto}}</p>
                </b-row>
                <b-row cols="8">
                    <like
                      @showModal="showModalLikes"
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
const Like = () => import('../common/Like');
const Delete = () => import('../common/Delete');

// import Like from '../common/Like';
// import Delete from '../common/Delete';

export default {
    //prueba
  components:{Like,Delete},
  props:['comentarioData'],//data entrante
  data() {
    return {

    };
  },
    computed:{
        nameAlias: function(){
            if(this.comentarioData.user.alias==null){
                return this.comentarioData.user.name+' '+this.comentarioData.user.apellido;
            }else{
                return this.comentarioData.user.alias
            }
        }
    },
  methods:{
      getComentarios(){
        this.$emit("getComentarios")  
      },
    showModalLikes(idPost,type){
        console.log(idPost);
        this.$emit("showModalLikes",idPost,type);
    },
  }
};
</script>
<style scoped>
.no-margin-bottom{
    margin-bottom: 0px;
}

.no-padding-left{
    padding-left: 0px;
}

</style>
