<template>
    <b-container>
        <b-card class="shadow" >
            <b-row>
                <b-col>
                    <b-form inline >
                        <h3>Proximos Eventos</h3>
                        <font-awesome-icon  icon="plus-circle"  size="lg"/>
                    </b-form>
                </b-col>
            </b-row>
             <b-row>
                <p>Parcial de Matematicas -> 20/5</p>
                <p>Entrega TP -> 31/6</p>
            </b-row>
        </b-card>
    </b-container>
</template>

<script>
export default {
  name: 'EventsWall',
};
</script>

<style scoped>
.shadow{
        box-shadow: 10px 10px grey;
    }
</style>
