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
import axios from './util/api-client'

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
