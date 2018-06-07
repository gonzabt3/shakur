<template>
    <div>
        <b-form-group>
            <b-card class="shadow">
                <b-row>
                    <b-col cols="3"  class="text-center" id="imagenUser">
                    <b-img rounded="circle" width="75" height="75" thumbnail fluid src="http://comomurio.info/wp-content/uploads/2015/03/Pancho-Villa.jpg" alt="Thumbnail" />
                    </b-col>
                    <b-col id="nombreUser">
                        <h2 class="text-">Chopan Llavi</h2>
                        <h6>Progress 75%</h6>
                    </b-col>
                </b-row>
                <br>
                <b-form-group class="text-center">
                    <p class="card-text">
                        Revolucion el segundo martes del corriente
                    </p>
                </b-form-group>
                <b-row>
                    <b-col cols="7" class="text-center">
                        <b-button size="sm">
                            <b-img :src="beerIcon" fluid alt="beerLike" /> Like
                        </b-button>
                        <b-button size="sm">
                            <b-img :src="commentIcon" fluid alt="comments" /> Comentar
                        </b-button>
                    </b-col>
                </b-row>
            </b-card>
        </b-form-group>
    </div>
</template>

<script>
export default {
  name: 'PostUser',
  data() {
    return {
      beerIcon: 'static/image/beer.png',
      commentIcon: 'static/image/comment.png',
    };
  },
};
</script>

<style scoped>
#nombreUser{
    padding-left:0;
}

.shadow{
        box-shadow: 10px 10px grey;
    }

</style>
