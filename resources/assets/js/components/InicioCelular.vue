<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <!-- CONTENEDRO -->
                <b-row>
                    <b-col>
                        <h1 class="valentine text-center top-padding-15">Shakur</h1>
                    </b-col>
                </b-row>
                <b-row >
                    <b-col>
                     <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/ttBAlc0ey8I"
                        allowfullscreen
                    ></b-embed>
                        <b-tabs  v-model="tabIndex" fill
                        >
                            <b-tab  active class="scroll"
                            :title-link-class="linkClass(0)"
                            >
                                <template v-slot:title>
                                    <b>UNLa</b>
                                </template>
                                <b-card-text >
                                    <noticia></noticia>
                                    <noticia></noticia>
                                    <noticia></noticia>
                                    <noticia></noticia>
                                    <noticia></noticia>
                                    <noticia></noticia>
                                </b-card-text>
                            </b-tab>
                            <b-tab 
                            :title-link-class="linkClass(1)"
                            >
                             <template v-slot:title>
                                <b>UNF</b>
                            </template>
                            <b-card-text>
                            </b-card-text></b-tab>
                        </b-tabs>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-btn block variant="outline-info">Iniciar sesion</b-btn>
                    </b-col>
                    <b-col>
                        <b-button block variant="info">Registrarse</b-button>
                    </b-col>
                </b-row>
                <!-- CONTENEDRO -->
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
// const noticia = () => import('../components/common/Noticias');
import Noticia from '../components/common/Noticias';


export default {
    name:'InicioCelular',
    components:{Noticia},
    data(){
        return{
            tabIndex:0
        }
    },
    methods:{
        linkClass(index){
        if (this.tabIndex === index) {
            return ['text-info']
        } else {
            return ['text-dark']

        }
        }
    }
    
}
</script>>
<style scoped>
.valentine{
  font-family:valentine,Pacifico !important;
  /* font-size: 900%; */
  color:#00a2b9;
  }

.color-gris{
 color:#647586 !important;   
}

.celeste-gay{
      color:#00a0b54f !important;
}

.top-padding-15{
    padding-top: 15px;
}

.scroll {
    overflow-y: scroll !important;
    overflow-x: hidden;
    /*  ARREGLAR ESTA NEGRDADA */
  height: 50vh !important;
}
</style>