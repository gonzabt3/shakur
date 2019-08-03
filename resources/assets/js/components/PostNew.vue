<template>
    <b-container class="padding-lateral-7">
        <b-form-group>
            <b-card class="shadow" title="Nueva Publicacion">
                <b-form>
                    <b-form-group>
                        <b-form-input id="newPost"
                            v-model="data.texto"
                            placeholder="Publica algo!!">
                        </b-form-input>
                        <b-alert 
                            :show="hasErrors" 
                            variant="danger" 
                            class="text-center">{{ error }}</b-alert>
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
                    <b-form-group id="preview" >
                        <div v-for="file in data.files" :key="file.id" class="img_wrp" >
                            <img :src="makeUrl(file)" />
                            <img @click="deleteImage(file)" class="close" src="../components/closeIcon.png" />
                        </div>
                    </b-form-group>
                    <b-row>
                        <b-col>
                            <b-button variant="secondary" block 
                            @click="$refs.fileInput.click()"
                            >Adjuntar</b-button>
                        </b-col>
                        <b-col class="left-padding">
                            <b-button :disabled="disabledButton" variant="primary" block  @click="hacerPost">
                                <img v-show="iconLoading" class="sizeLoading" src="../components/loadingWhite.svg">
                                {{textButton}}</b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-card>
        </b-form-group>
    </b-container>
</template>
<script>
import {blackListWords} from "./diccionario.js";

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
            badWordFlag:false,
            error: "",
            textButton:'Publicar',
            disabledButton:false,
            loading:false,
            iconLoading:false,
            urlFiles:[]
        };
  },
  computed:{
      hasErrors() {
            return this.error != "";
        },
//       makeUrl(value){
//           return URL.createObjectURL(value);
//       }
  },
    watch:{
         loading: function(value){
         if(value){
             this.disabledButton=true;
             this.textButton=''
             this.iconLoading=true
         }else{
             this.disabledButton=false;
             this.textButton='Publicar'
             this.iconLoading=false
         }
        },
        "data.texto":function(string){
            this.badWordFlag=this.scanMalasPalabras(string);
            if(this.badWordFlag==false){
                this.error=''
            }
        } 
    },
    methods :{
        scanMalasPalabras(string){
            let arrayPalbras = string.trim().split(" ");
            let resultado = arrayPalbras.filter(element => blackListWords.includes(element));
            return !resultado.length==0 
        },
     makeUrl(value){
          return URL.createObjectURL(value);
      },
      hacerPost(){
            if(!this.badWordFlag){
                this.loading=true;
                this.data.materia_id=this.idMateria

                let formData = new FormData();

                formData.append('texto',this.data.texto);
                formData.append('materia_id',this.data.materia_id);
                formData.append('user_id',this.data.user_id);
                formData.append('files',this.data.files);
                
                _.each(this.data.files, (file, key) => {
                        formData.append(`files[${key}]`, file);
                });

                // formData.forEach(entries => console.log(entries));

                this.axios.post('api/publicacion',formData)
                .then((response) =>{
                    this.loading=false
                    this.data.texto='',
                    this.data.files=[],
                    this.$emit("responseGetPosts",true)            
                })
            }else{
                this.error = "Hemos detectado lenguaje ofensivo";
            }
        },
        //GUARDA EN LA VARIABLE EL ARCHIVO SELECCIONADO
        processFile(event) {
            this.data.files = event.target.files;
        },
        deleteImage(item){
            let r = [];
            r = Array.from(this.data.files);
            r.splice(r.indexOf(item), 1);
            this.data.files = r;
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

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 150px;
}

.img_wrp {
   display: inline-block;
   position: relative; 
}

.close {
    position: absolute;
    top: 0; 
    right: 0;
    width: 30px;
}

.sizeLoading{
        width: 30px;
}
</style>
