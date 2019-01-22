<template>
    <b-button size="sm" @click="btnLike">
        <label class="no-margin-bottom">{{cantLikes}}</label>
        <b-img :src="beerIcon" fluid alt="beerLike" /> {{stringBtnLike}}
    </b-button>
</template>
<script>
export default {
    name:"Like",
    props:['likesData'],
    data(){
        return{
            beerIcon: '../images/beer.png',
            stringBtnLike: 'Like',
            btnLikeEstado: false
        }
        },
        methods:{
            btnLike() {
                if (!this.btnLikeEstado) {
                    let objetoLike = {
                    user_id:this.user,
                    publicacions_id:this.idPost
            }
            //agrego like
            this.axios.post('api/like',objetoLike)
            .then((response) =>{
                this.btnLikeEstado = true;
                this.cantLikes += 1;
            })   
            } else {
            //saco like 
            this.axios.delete('api/like/'+this.postData.idPost+'/'+this.user)
            .then((response) =>{
                this.btnLikeEstado = false;
                this.cantLikes -= 1;
            })   
            }
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
