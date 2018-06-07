<template>
    <div>
        <b-form-group>
            <b-card class="shadow" title="Nueva Publicacion">
                <b-form>
                    <b-form-group>
                        <b-form-input id="newPost"
                        required
                        placeholder="Publica algo!!">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group class="text-right">
                        <b-button variant="secondary">Adjuntar</b-button>
                        <b-button type="submit" variant="primary">Publicar</b-button>
                    </b-form-group>
                </b-form>
            </b-card>
        </b-form-group>
    </div>
</template>
<script>
export default {
  name: 'PostNew',
};
</script>
<style scoped>
    .shadow{
        box-shadow: 10px 10px grey;
    }
</style>
