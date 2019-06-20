<template>
<div>
    <h3>
        notificaciones
    </h3>
     <div id="laravel-echo">
      <template v-if="isConnected">
          connect
        <button @click="eventMe">event</button>
         <!-- <ul v-for="object in notifications">
            {{ object }}
         </ul> -->
         <!-- <button @click="disconnect">Disconnect</button> -->
      </template>
      <template >
         <button @click="connect">Connect</button>
      </template>
   </div>
   </div>
</template>
<script>
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
// import { maxHeaderSize } from 'http';
export default {
    name: 'laravel-echo',
    components:{Echo,Pusher},
   data() {
      return {
         echo: null
      }
   },
   computed:{
    isConnected: { 
        cache: false, 
        get(){ 
        return (this.echo &&   this.echo.connector.pusher.connection.connection !== null) 
    }
} 
   },
   watch: {
      //Add watchers...
   },
   mounted(){
   },
   methods: {
       connect(){
        if(!this.echo){
            this.echo = new Echo({
                broadcaster: 'pusher',
                key: 'b5806fbd6f412d4ca0e2',
                cluster: 'us2',
                wsHost:'localhost',
                wsPort:6001,
                // encrypted: true,
                // authEndpoint: 'http://localhost/broadcasting/auth',
                auth: {
                    headers: {
                    Authorization: null
                    }
                },
                csrfToken: null,
                //namespace: 'App',
                })
                this.echo.connector.pusher.connection.bind('connected', (event) => this.connect(event))
                // this.echo.connector.pusher.connection.bind('disconnected', () => this.disconnect())
            }
            this.echo.connector.pusher.config.auth.headers.Authorization = 'Bearer ' +sessionStorage.getItem("token")
            this.echo.connector.pusher.connect()
        },
        eventMe(){
            this.echo.listen('home','NewMessage',function(e){
                console.log(e)
            });
            this.echo.private('App.User.' + 29)
                .notification((notification) => {
                    console.log(notification);
                });
        }   
    }
}
</script>
<style scoped>

</style>