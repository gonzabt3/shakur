<template>
<b-container>
    <b-modal  size="md" ref="modalDenuncias" id="modalDenuncias" :hide-footer="true" title="No te gusto este post?" >
        <b-row >
                <b-col>
                        <b-alert show>
                            <h4>Info!</h4>
                            <label>Será borrado si a tus compañeros de grupo le parece que es inapropiado tambien</label>
                            <label>La denuncia es anonima!</label>
                        </b-alert>
                      <b-form-group label="Selecciona por que no te gusto el post y denuncialo.">
                            <b-form-radio v-model="denuncia.motivo" name="radios" value="Politica/Religion">Politica/Religion</b-form-radio>
                            <b-form-radio v-model="denuncia.motivo" name="radios" value="Es spam">Es spam</b-form-radio>
                            <b-form-radio v-model="denuncia.motivo" name="radios" value="Es ofensivo">Es ofensivo</b-form-radio>
                            <b-form-radio v-model="denuncia.motivo" name="radios" value="No correspone al grupo">No correspone al grupo</b-form-radio>
                        </b-form-group>
                          <b-button block @click="submit" variant="success">Denunciar</b-button>
                </b-col>
        </b-row>
    </b-modal>
</b-container>  
</template>
<script>
export default {
    props:['id','type'],
    data() {
      return {
        denuncia:{
            motivo:'',
            id_item:this.id,
            tipo:this.type
        }
      }
    },
    methods:{
        submit(){
            this.denuncia.id_item=this.id
            this.denuncia.tipo=this.type
            this.axios.post("api/denuncias",this.denuncia)
                .then((response) =>{
                    
                })
        }
    }
}
</script>
<style scoped>

</style>
