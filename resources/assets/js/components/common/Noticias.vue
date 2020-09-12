<template>
    <b-container class="white-back" >
        <b-row  align-v="center" >
            <b-col cols="8">
                <b-row >
                    <label class="text-left grey sizeFont">{{entidad}} &#8226; {{fecha}}</label>
                </b-row>
                <b-row>
                    <a :href="enlaze"><label ><b>{{titular}}</b></label></a>
                </b-row>
            </b-col>
            <b-col cols="4">
                <b-img class="thumbnail-custom align-self-center" :src="urlImagen"  />
            </b-col>
        </b-row>   
    </b-container>
</template>
<script>
export default {
    props:['titular','urlImagen','fecha','entidad','enlaze'],
    name:'Noticias',
    methods:{

    }
}
</script>
<style  scoped>
.thumbnail-custom{
    border:none !important;
    width: 75px;
    height: 75px;
}

.white-back{
    background-color: white;
}

.grey{
    color:#7b8897
}

.sizeFont{
    font-size:0.75rem;
}
</style>