<template>
    <b-button size="sm" @click="btnLike">
        <label class="no-margin-bottom">{{cantidadLikes}}</label>
        <b-img :src="beerIcon" fluid alt="beerLike" /> {{stringBtnLike}}
    </b-button>
</template>
<script>
export default {
    name:"Like",
    props:['likesData','idUserLogeado','idPost','urlLike'],
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
                        let obj={
                            publicacion_id:this.idPost
                        }
                        console.log(obj)
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
            this.likesData.forEach(like => {
                if(like.user_id==this.idUserLogeado){
                    this.btnLikeEstado=true
                }
            })
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
