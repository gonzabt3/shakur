<template>
      <b-form-group>
        <b-row>
                <b-img class="thumbnail-custom"  rounded="circle"  thumbnail :src="comentarioData.user.avatar_url" alt="Thumbnail" />
            <b-col cols="9">
                <b-row>
                    <b-col cols="10" class="no-padding-left">
                            <label class="no-margin-bottom"><b>{{nameAlias}}</b></label>
                    </b-col>
                    <b-col cols="1">
                        <delete
                        @actualizar="getComentarios" 
                        :id="comentarioData.id"
                        :flag-autor="comentarioData.flagAutor"
                        tipo="comment"
                        @showModalDenuncias="showModalDenuncias"
                        />
                    </b-col>
                </b-row>
                <b-row >
                    <label>{{comentarioData.texto}}</label>
                </b-row>
                <b-row>
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
        // console.log(idPost);
        this.$emit("showModalLikes",idPost,type);
    },
    showModalDenuncias(idItem,type){
        this.$emit("showModalDenuncias",idItem,type);
    }
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

.thumbnail-custom{
    border:none !important;
    width: 48px;
    height: 48px;
}

</style>
