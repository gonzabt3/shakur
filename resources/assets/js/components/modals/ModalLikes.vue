<template>
    <b-container fluid>
         <b-modal  size="sm"  @shown="getUser" ref="modalLikes" id="modalLikes" :hide-footer="true" title="Lista de likes" >
                <div v-if="arrayLikes.length>0">
                    <b-row :key="like.id" v-for="like in arrayLikes">
                            <b-col cols="3">
                                <b-img rounded="circle" width="60" height="60" thumbnail fluid :src="like.user.avatar_url" alt="Thumbnail" />
                            </b-col>
                            <b-col >
                                <p>{{nameAlias(like.user)}}</p>
                            </b-col>
                    </b-row>
                </div>
                <b-row v-if="!arrayLikes.length>0">
                    <b-col>
                        <h3>Nadie le ha dado Like a este post :(</h3>
                    </b-col>
                </b-row>
         </b-modal>
     </b-container>
</template>
<script>
export default {
    props:['id','type'],
    data(){
        return{
            arrayLikes:[],
        }
    },
    methods:{
        getUser(){
            //vacio el array para que recarle los post
        this.arrayLikes=[]
        this.axios.get('api/likes/post/'+this.id+'/'+this.type)
                    .then(({data}) => {
                        this.arrayLikes=data;

                    });
        },
         nameAlias: function(user){
            if(user.alias==null){
                return user.name+' '+user.apellido;
            }else{
                return user.alias
            }
        }
    }
}
</script>
<style scoped>

</style>
