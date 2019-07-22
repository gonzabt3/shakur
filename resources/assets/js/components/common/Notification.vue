<template>
<b-container class="no-padding">
      <b-button :variant="variantButton"  @click="openNotifacation">
          <font-awesome-icon class="pointer" icon="bell"/>
             <b-badge v-show="numberNotifaction>0" variant="light">
                 {{numberNotifaction}}
             </b-badge>
        </b-button>
</b-container>
</template>
<script>
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import { createHash } from 'crypto';
                
export default {
    name: 'laravel-echo',
    components:{Echo,Pusher},
    data() {
      return {
         echo: null,
         numberNotifaction:0,
         variantButton:"primary"
      }
   },
   mounted(){
       this.connect();
       this.eventMe();
   },
   watch:{
       numberNotifaction(value){
           if(value>0){
               this.variantButton="danger"
           }else{
               this.variantButton="primary"
           }
       }
   },
    methods:{
        //METODOS DE LAS NOTIFIACIONES
        ver(dataNotification){
            // console.log(dataNotification);
            this.markAsRead(dataNotification);
            this.$emit("openPost",dataNotification.data.publicacion.id)
        },
        liveNotification(dataNotification){
            // console.log(dataNotification);
            let text=dataNotification.data.message;
            //config para las notificaciones
           let  config = { 
                theme: "outline", 
                position: "top-right", 
                duration : 5000,
                action : [{
                    text : 'IR',
                    onClick : (e, toastObject) => {
                        this.ver(dataNotification)
                        // toastObject.goAway(0);
                        }
                    },
                    {
                    text : 'LEIDA',
                    onClick : (e, toastObject) => {
                        this.markAsRead(dataNotification)
                        // toastObject.goAway(0);
                        }
                    }
                    ]

                }

            this.$toasted.show(text,config) 
        },
        //request a notificaciones
        openNotifacation(){
            this.axios.get("api/notifications")
                .then(response => {
                    let notifications=response.data
                    this.numberNotifaction=notifications.length
                    _.each(notifications, (noti, key) => {
                        this.liveNotification(noti);
                    });    

            })
        },
        connect(){
            if(!this.echo){
                this.echo = new Echo({
                    broadcaster: 'pusher',
                    key: 'b5806fbd6f412d4ca0e2',
                    cluster: 'us2',
                    // wsHost:'localhost',
                    wsHost:'www.shakur.com.ar',
                    wsPort:6001,
                    wssPort:6001,
                    disableStats: true,
                    // encrypted:true,
                    enabledTransports:['ws','wss'],
                    // forceTLS:true,
                    // authEndpoint: 'http://localhost/broadcasting/auth',
                    auth: {
                        headers: {
                            // Upgrade:'websocket',
                            Authorization: null
                        }
                    },
                    // csrfToken: null,
                    //namespace: 'App',
                    })
                    this.echo.connector.pusher.connection.bind('connected', (event) => this.connect(event))
                    // this.echo.connector.pusher.connection.bind('disconnected', () => this.disconnect())
                }
            this.echo.connector.pusher.config.auth.headers.Authorization = 'Bearer ' +sessionStorage.getItem("token")
            this.echo.connector.pusher.connect()
            // if(this.echo &&   this.echo.connector.pusher.connection.connection !== null){
            //     console.log("CONECTADO")
            // }
        },
        //a la escucha de las noti por broadcast
       async eventMe(){
            let idUser = await this.getIdUser();
            this.echo.private('App.User.' + idUser)
                .notification((notification) => {
                    
                    // METO LA NOTIFICACION EN UN OBJECTO PARA FORMATEARLO ESTRUCTURALMENTE COMO VIENE DESDE EL REQUEST DE LD DB
                    let object = {data:notification}
                    this.liveNotification(object);
                });
        },
        markAsRead(notification){
            // console.log(notification);
            this.axios.post('api/notification',notification)
                .then((response)=>{
                
                })
        },
        getIdUser(){
            return new Promise(resolve => {
                this.axios.get("api/usuario")
                .then(response => {
                    resolve(response.data.id)
                })
            });
            
        } 
    }
}
</script>
<style scoped>
.pointer{
    cursor: pointer;
}

.no-padding{
    padding-left: 0px;
    padding-right: 0px;
}
</style>
