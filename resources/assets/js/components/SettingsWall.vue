<template>
    <div >
        <b-card class="shadow" id="settingsCard" title="Configuracion">
            <h6>Mi perfil</h6>
            <h6>Salir</h6>
        </b-card>
    </div>
</template>
<script>
export default {
  name: 'SettingsWall',
};
</script>
<style scoped>
#settingsCard{
    height: 100%;
}

.shadow{
        box-shadow: 10px 10px grey;
    }
</style>
