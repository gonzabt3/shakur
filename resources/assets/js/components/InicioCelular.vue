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
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-tabs  v-model="tabIndex" fill
                        >
                            <b-tab  active class="scroll altoScroll"
                            :title-link-class="linkClass(0)"
                            >
                                <template v-slot:title>
                                    <b>UNLa</b>
                                </template>
                                <b-card-text >
                                    <noticia 
                                    titular="Inscripción a becas para apuntes y materiales de estudio"
                                    fecha="20-4"
                                    urlImagen="http://www.unla.edu.ar/media/k2/items/cache/1e92e29468d367fc231b76a078b7faaa_XL.jpg"
                                    enlaze="http://www.unla.edu.ar/novedades/inscripcion-a-becas-para-apuntes-y-materiales-de-estudio"
                                    entidad="Universidad Nacional de Lanus"
                                    ></noticia>
                                    <noticia 
                                    titular="Inscripción a las Becas Progresar 2020"
                                    fecha="6-4"
                                    urlImagen="http://www.unla.edu.ar/media/k2/items/cache/9489e6c11889fcb275044d14dda99d24_XL.jpg"
                                    enlaze="http://www.unla.edu.ar/novedades/inscripcion-a-las-becas-progresar-2020"
                                    entidad="Universidad Nacional de Lanus"
                                    ></noticia>
                                    <noticia 
                                    titular="Campaña nacional solidaria para la producción de elementos de protección personal"
                                    fecha="6-4"
                                    urlImagen="http://www.unla.edu.ar/media/k2/items/cache/a7f29fa843c0bce11d4005210b603e61_XL.jpg"
                                    enlaze="Campaña nacional solidaria para la producción de elementos de protección personal"
                                    entidad="Universidad Nacional de Lanus"
                                    ></noticia>
                                    <noticia 
                                    titular="RESOLUCIÓN. Suspensión por 14 días. Especificaciones para estudiantes, docentes y nodocentes"
                                    fecha="16-3"
                                    urlImagen="http://www.unla.edu.ar/media/k2/items/cache/9115b227894bd1b2e159759f182b113a_XL.jpg"
                                    enlaze="http://www.unla.edu.ar/novedades/coronavirus-sin-clases-presenciales-hasta-el-30-de-marzo"
                                    entidad="Universidad Nacional de Lanus"
                                    ></noticia>
                                </b-card-text>
                            </b-tab>
                            <b-tab 
                            :title-link-class="linkClass(1)"
                            >
                             <template v-slot:title>
                                <b>UNF</b>
                            </template>
                            <b-card-text>
                                <noticia 
                                    titular="Almirante Brown"
                                    fecha="mayo 2019"
                                    urlImagen="http://www.escuelafluvial.edu.ar/images/sssss.png"
                                    enlaze="http://www.escuelafluvial.edu.ar/"
                                    entidad="Escuela Nacional Fluvial"
                                    ></noticia>
                                <noticia 
                                    titular="Fragata ARA Libertad"
                                    fecha="agosto 2019"
                                    urlImagen="http://www.escuelafluvial.edu.ar/images/WhatsApp-Image-2019-08-20-at-10.16.27.jpg"
                                    enlaze="http://www.escuelafluvial.edu.ar/"
                                    entidad="Escuela Nacional Fluvial"
                                    ></noticia>
                                <noticia 
                                    titular="Cambio de autoridades"
                                    fecha="febrero 2020"
                                    urlImagen="http://www.escuelafluvial.edu.ar/images/WhatsApp-Image-2020-02-10-at-11.30.14.jpg"
                                    enlaze="http://www.escuelafluvial.edu.ar/"
                                    entidad="Escuela Nacional Fluvial"
                                    ></noticia>
                                <noticia 
                                    titular="Ingresos"
                                    fecha="mayo 2019"
                                    urlImagen="http://www.escuelafluvial.edu.ar/images/formulario.png"
                                    enlaze="http://www.escuelafluvial.edu.ar/novedades.html"
                                    entidad="Escuela Nacional Fluvial"
                                    ></noticia>
                            </b-card-text></b-tab>
                        </b-tabs>
                    </b-col>
                </b-row>
                <b-row align-v="end" class="padding-botones">
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
  /* height: 50vh !important; */
}

.padding-botones{
    padding-top: 7px;

}

/* HARDCODEO EL PADING DE LOS TABS PARA AJUSTAR EN LAS PANTALLAS MENORES A IPHONE 5 */
 @media screen and (max-height: 640px) {
    .altoScroll {
      height: 40vh !important;

  }
  }

 @media screen and (min-height: 667px) and (max-height:735px)   {
    .altoScroll {
      height: 42vh !important;

  }
  }

 @media screen and (min-height: 736px) and (max-height:811px)   {
    .altoScroll {
      height: 45vh !important;

  }
  }


/* LE SACO LO ANTERIOR EN LA PANTALLAS MAYORES A LAS DE EL IPHONE 5 */
  @media screen and (min-height: 812px) and (max-height:1023px) {
    .altoScroll {
      height: 50vh !important;

  }
  } 


</style>