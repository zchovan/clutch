<template>
  <div class="relative h-screen flex">
    <sidebar />
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view />
  </div>  
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import axios from './middleware/api-client'


export default {
  name: 'App',
  data() {
    return {
      torrents: "",
      headers: {}
    }
  },
  components: { 
    Sidebar    
  },
  mounted() { 
    this.csrf_token()
  },
  methods: {
    async csrf_token() {           
      console.log("init");
      axios
        .post("/",{})
        .then(function(response) {
          console.log(response);
        })
        .catch((error) => {
          if (error.response.status == 409) {
            console.log(error.response.headers["x-transmission-session-id"])
            this.headers = {"x-transmission-session-id": error.response.headers["x-transmission-session-id"]};
          }
        }); 
    },  
    async getTorrents() {        
      console.log("Gettorrents");
      console.log(this.headers)
      axios({
        method: 'post',
        url: '/',
        data: {
            "arguments": {
                "fields": [ "id", "name", "totalSize", "labels" ],
                "ids": [1]
            },
            "method": "torrent-get",
            "tag": 39693
        },
        headers: this.headers
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error );      
      })
    }
  }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
