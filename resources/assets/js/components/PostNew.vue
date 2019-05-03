<template>
    <b-container class="padding-lateral-7">
        <b-form-group>
            <b-card class="shadow" title="Nueva Publicacion">
                <b-form>
                    <b-form-group>
                        <b-form-input id="newPost"
                        v-model="object.texto"
                        required
                        placeholder="Publica algo!!">
                        </b-form-input>
                    </b-form-group>
                    <b-row>
                        <b-col>
                            <b-button variant="secondary" block >Adjuntar</b-button>
                        </b-col>
                        <b-col class="left-padding">
                            <b-button  variant="primary" block  @click="hacerPost">Publicar</b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-card>
        </b-form-group>
    </b-container>
</template>
<script>
export default {
  name: 'PostNew',
    props:['idMateria'],
    data() {
    return {
        object:{
            texto:null,
            materia_id:this.idMateria,
            user_id:null
        }
    };
  },
    methods :{
      hacerPost(){
            this.object.materia_id=this.idMateria
            // console.log(this.object);
            this.axios.post('api/publicacion',this.object)
            .then((response) =>{
                this.object.texto='',
                this.$emit("responseGetPosts",true)            
            })
        }
  }
};
</script>
<style scoped>

    /* override a la clase de bootsrap */
    .card-body{
        padding-top: 7px;
        padding-left: 7px;
        padding-bottom: 7px;
        padding-right: 7px;
    }

    /* override a la clase de bootsrap */
    .card-title{
        margin-bottom: 7px;
    }

    .padding-lateral-7{
        padding-left: 7px;
        padding-right: 7px;
    }

    .shadow{
        box-shadow: 10px 10px grey;
    }

    .left-padding{
        padding-left: 0px;
    }
</style>
