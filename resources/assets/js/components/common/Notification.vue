<template>
<b-container>
<font-awesome-icon class="pointer" icon="bell" @click="openNotifacation"/></b-container>    
</template>
<script>
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

// CONFIG PARA LAS NOTIFICACIONES
const config = { 
                theme: "outline", 
                position: "top-right", 
                duration : 5000,
                action : [{
                    text : 'VER',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }}
                    ]

                }
                
export default {
    name: 'laravel-echo',
    components:{Echo,Pusher},
    data() {
      return {
         echo: null
      }
   },
   mounted(){
       this.connect();
       this.eventMe();
   },
    methods:{
        liveNotification($message){
            this.$toasted.show($message,config) 
        },
        openNotifacation(){
            this.axios.get("api/notifications")
                .then(response => {
                    let notifications=response.data
                    console.log(notifications);
                    _.each(notifications, (noti, key) => {
                        this.liveNotification(noti.data.message);
                    });    

            })
        },
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
            this.echo.private('App.User.' + 29)
                .notification((notification) => {
                    console.log(notification);
                    this.liveNotification(notification.message);
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
