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
    this.$store.dispatch('resetCurrentConnection');
  },
  methods: {

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
