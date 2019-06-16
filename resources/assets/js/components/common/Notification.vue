<template>
<b-container>
<font-awesome-icon class="pointer" icon="bell" @click="openNotification"/></b-container>    
</template>
<script>
export default {
    methods:{
        openNotification(){
            alert("ASD");
        }
    }
}
</script>
<style scoped>
.pointer{
    cursor: pointer;
}
</style>
