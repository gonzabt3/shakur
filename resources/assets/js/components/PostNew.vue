<template>
    <b-container>
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
                    <b-form-group class="text-right">
                        <b-button variant="secondary">Adjuntar</b-button>
                        <b-button  variant="primary" @click="hacerPost">Publicar</b-button>
                    </b-form-group>
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
                this.$emit("responseGetPosts")            
            })
        }
  }
};
</script>
<style scoped>
    .shadow{
        box-shadow: 10px 10px grey;
    }
</style>
