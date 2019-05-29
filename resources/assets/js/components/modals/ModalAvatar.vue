<template>
     <b-container   fluid>
         <b-modal   ref="modalAvatar" id="modalAvatar" title="Selecciona tu imagen de perfil">
                <b-row >
                    <croppa class="c1"
                        :image-border-radius="50"
                        canvas-color="#e6e6e6"
                        placeholder="Selecciona una imagen" 
                        v-model="croppa"
                        :placeholder-font-size="16"
                        prevent-white-space
                        @init="onInit"
                        initial-image="/storage/avatars/5/avatar.png"
                        ></croppa>
                </b-row>
         </b-modal>
     </b-container>
</template>
<script>
export default {
    data(){
        return {
            croppa: {}
        };
    },
    methods: {
        onInit() {
      this.croppa.addClipPlugin(function (ctx, x, y, w, h) {
        /*
         * ctx: canvas context
         * x: start point (top-left corner) x coordination
         * y: start point (top-left corner) y coordination
         * w: croppa width
         * h: croppa height
        */
        // console.log(x, y, w, h)
        ctx.beginPath()
        ctx.arc(x + w / 2, y + h / 2, w / 2, 0, 2 * Math.PI, true)
        ctx.closePath()
      })
    },
    uploadCroppedImage() {
      this.myCroppa.generateBlob(
        blob => {
          // write code to upload the cropped image file (a file is a blob)
        },
        'image/jpeg',
        0.8
      ); // 80% compressed jpeg file
    }
  }
  
}
</script>
<style scoped>

</style>
