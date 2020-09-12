<template>
    <b-container>
        <button @click="authenticate('github')">auth Github</button>
        <button @click="authenticate('facebook')">auth Facebook</button>
        <button @click="authenticate('google')">auth Google</button>
        <button @click="authenticate('twitter')">auth Twitter</button>
    </b-container>   
</template>
<script>
export default {
    methods:{
        authenticate: function (provider) {
            this.$auth.authenticate(provider).then(function () {
            // Execute application logic after successful social authentication
        })
    },
    }
}
</script>
<style scoped>

</style>
