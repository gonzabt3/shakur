<template>
    <b-container fluid>
        <b-row>
            <b-col class="no-padding-lateral" >
                <!-- <b-button block size="sm" @click="btnLike"> -->
                    <span @click="btnLike">
                        {{cantidadLikes}}  
                        <!-- {{stringBtnLike}} -->
                        <b-img :src="beerIcon" fluid alt="beerLike"  />
                    </span > 
                <!-- </b-button> -->
            </b-col>
            <b-col class="no-padding-lateral">
                <span @click="showModalLike">
                    Ver likes
                </span>
                <!-- <b-button block @click="showModalLike" class="alto " size="sm">Ver likes</b-button> -->
            </b-col>
        </b-row>
    </b-container>
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
            showModalLike(){
                this.$emit("showModal",this.idPost,this.tipo);
            },
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
                this.stringBtnLike = (value == true ? '' : '');
            }
        }
    
}
</script>
<style scoped>
.alto{
    height: 34px;
}

.no-padding-lateral{
    padding-left: 0px;
    padding-right: 0px;
}

</style>
