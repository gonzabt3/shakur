<template>
    <b-button size="sm" @click="btnLike">
        <label class="no-margin-bottom">{{cantidadLikes}}</label>
        <b-img :src="beerIcon" fluid alt="beerLike" /> {{stringBtnLike}}
    </b-button>
</template>
<script>
export default {
    name:"Like",
    props:['likesData','flagLike','idPost','urlLike','tipo'],
    data(){
        return{
            beerIcon: '../images/beer.png',
            stringBtnLike: 'Like',
            btnLikeEstado: false,
            cantidadLikes:this.likesData.length
            }
        },
        mounted(){
            this.estadoBtnLike();
        },
        methods:{
            btnLike() {
                    if (!this.btnLikeEstado) {
                
                // villeriada para mandarla variable correcta
                let obj;
                if(this.tipo=="mg"){
                    obj={
                        publicacion_id:this.idPost
                    }
                }
                if(this.tipo=="cm"){
                    obj={
                        comentario_id:this.idPost
                    }
                }
                
                //agrego like
                this.axios.post(this.urlLike,obj)
                .then((response) =>{
                    this.btnLikeEstado = true;
                    this.cantidadLikes += 1;
                })   
                } else {
                //saco like 
                this.axios.delete(this.urlLike+'/'+this.idPost)
                .then((response) =>{
                    this.btnLikeEstado = false;
                    this.cantidadLikes -= 1;
                })   
                }
            },
            estadoBtnLike(){
                        this.btnLikeEstado=this.flagLike
            }
        },
        watch:{
             btnLikeEstado(value) {
                this.beerIcon = (value == true ? '../images/beerVacia.png' : '../images/beer.png');
                this.stringBtnLike = (value == true ? 'Dislike' : 'Like');
            }
        }
    
}
</script>
<style scoped>

</style>
