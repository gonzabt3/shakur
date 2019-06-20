<template>
<b-container>
<font-awesome-icon class="pointer" icon="bell" @click="openNotification"/></b-container>    
</template>
<script>
export default {
    methods:{
        openNotification(){
            let toast = this.$toasted.show("gatooo !!", { 
            theme: "outline", 
            position: "top-right", 
            duration : 5000,
            action : {
                text : 'Cancel',
                onClick : (e, toastObject) => {
                    toastObject.goAway(0);
                }
    },
        });
   
        }
    }
}
</script>
<style scoped>
.pointer{
    cursor: pointer;
}
</style>
