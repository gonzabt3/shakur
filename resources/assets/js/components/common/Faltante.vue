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
        <b-alert v-if="success" show variant="success">Enviado!
        </b-alert>
    </b-col>
</b-row>
</template>
<script>
export default {
    name:'Faltante',
    props:['tipo','idPadre'],
    props:{
        tipo:{
            type: String,
            required: true
        },
        idPadre:{
            type: Number,
            required: false,
            default:null
        }
    },
    data(){
        return{
            pregunta:'',
            faltante:null,
            booleanInput:false,
            success:false
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

            if((this.faltante!=null && this.tipo!="carrera") || (this.tipo=="carrera" && this.idPadre!=null && this.faltante!=null )){
                let obj = {
                        descripcion:this.faltante, 
                        tipo:this.tipo,
                        padre_id:this.idPadre  
                    }
                
                let ruta = 'api/faltante/sin/auth'
                if(this.tipo=='materia'){
                    ruta = 'api/faltante'
                } 
                this.axios.post(ruta,obj)
                .then((response) =>{
                    this.booleanInput = false
                    this.success = true
        
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
