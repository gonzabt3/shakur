<template>
    <b-container class="padding-lateral-7">
        <b-form-group>
            <b-card class="shadow" title="Nueva Publicacion">
                <b-form>
                    <b-form-group>
                        <b-form-input id="newPost"
                        v-model="data.texto"
                        required
                        placeholder="Publica algo!!">
                        </b-form-input>
                        <input
                        v-validate="{ required: false, size:10240, mimes:['image/jpg','image/jpeg','application/pdf','application/excel','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','image/png','application/vnd.oasis.opendocument.spreadsheet','application/vnd.oasis.opendocument.text','application/vnd.openxmlformats-officedocument.wordprocessingml.document']}"
                        id="inputFile"
                        ref="fileInput"
                        :class="{
                          'is-invalid': errors.has('formComment.inputFile[]')
                        }"
                        type="file"
                        multiple
                        name="inputFile[]"
                        style="display: none"
                        @change="processFile($event)"
                        >
                    </b-form-group>
                    <b-form-group id="preview">
                            <img v-for="file in data"   :src="makeUrl(file)" />
                    </b-form-group>
                    <b-row>
                        <b-col>
                            <b-button variant="secondary" block 
                            @click="$refs.fileInput.click()"
                            >Adjuntar</b-button>
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
    $_veeValidate: {
        validator: "new"
    },
    data() {
    return {
        data:{
            texto:null,
            materia_id:this.idMateria,
            user_id:null,
            files:[]
        },
        urlFiles:[]
    };
  },
//   computed:{
//       makeUrl(value){
//           return URL.createObjectURL(value);
//       }
//   },
    methods :{
     makeUrl(value){
         console.log(value);
          return URL.createObjectURL(value);
      },
      hacerPost(){
            this.data.materia_id=this.idMateria
            // console.log(this.data);
            this.axios.post('api/publicacion',this.data)
            .then((response) =>{
                this.data.texto='',
                this.$emit("responseGetPosts",true)            
            })
        },
        //GUARDA EN LA VARIABLE EL ARCHIVO SELECCIONADO
        processFile(event) {
            this.data.files = event.target.files;
            // this.urlFiles = URL.createObjectURL(this.data.files);
        },
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

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 150px;
}
</style>
