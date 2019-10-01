<template>
<b-row>
    <b-col>
        <u @click="showInput" class="pointer">{{pregunta}}</u>
        <b-input-group v-if="booleanInput" >
            <b-form-input placeholder="Cual?" v-model="faltante"></b-form-input>
            <b-input-group-append>
                <b-button  @click="close">
                    <font-awesome-icon icon="times" />
                </b-button>
                <b-button @click="send" variant="info">Enviar!</b-button>
            </b-input-group-append>
        </b-input-group>
    </b-col>
</b-row>
</template>
<script>
export default {
    name:'Faltante',
    props:['tipo'],
    data(){
        return{
            pregunta:'',
            faltante:null,
            booleanInput:false
        }
    },mounted(){
        this.config(this.tipo);
    },
    methods:{
        config(tipo){
            if(tipo=="universidad"){
                    this.pregunta = 'Falta tu universidad?';
            }
            if(tipo=="carrera"){
                    this.pregunta = 'Falta tu carrera?';
            }
            if(tipo=="materia"){
                    this.pregunta = 'Falta alguna materia?';
            }
        },
        showInput(){
            //prende y apaga el input  
            this.booleanInput = this.booleanInput ? false : true
            this.faltante=null

        },
        close(){
            this.faltante=null
            this.booleanInput=false
        },
        send(){
            if(this.faltante != '' || this.faltante!=null){
                let obj = {
                    descripcion:this.faltante, 
                    tipo:this.tipo    
                    }

                this.axios.post('api/faltante',obj)
                .then((response) =>{
                    this.btnLikeEstado = true;
                    this.cantidadLikes += 1;
                })     
               
            }
        }
    }
}
</script>
<style scoped>
.pointer{
    cursor: pointer;
}
</style>
