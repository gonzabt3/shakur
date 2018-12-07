<template>
         <b-modal  size="lg" ref="configUser" id="configUser" title="Configuracion usuario">
        <b-container fluid>
                <b-row>
                    <b-col>
                        <b-row>
                            <b-col class="col-2">
                                <b-form-group id="alias"
                                label="Alias:"
                                label-for="alias">
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-input 
                                    id="alias" 
                                    placeholder="Ingrese alias"
                                    :disabled="!checkedAlias">
                                </b-form-input>
                            </b-col>
                            <b-col class="col-1">
                                <b-form-checkbox v-model="checkedAlias" > 
                                </b-form-checkbox>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="col-2">
                                <b-form-group id="nombre"
                                label="Nombre:"
                                label-for="nombre">
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-input id="nombre"
                                            placeholder="Ingrese Nombre">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="col-2">
                                <b-form-group id="apellido"
                                label="Apellido:"
                                label-for="apellido">
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-input id="apellido"
                                            placeholder="Ingrese apellido">
                                </b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>2 of 3</b-col>
                </b-row>
        </b-container>
    </b-modal>
</template>
<script>
export default {
    data(){
    return {
        data: {
            nombre: '',
            temas: ''
        },
        checkedAlias:true
    };
    }
    
}
</script>
<style scoped>

</style>
