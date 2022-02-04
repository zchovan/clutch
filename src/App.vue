<template>
  <div class="relative h-screen flex">
    <sidebar />
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
    console.log('RESET');
    this.$store.dispatch('resetCurrentConnection');
    this.$store.dispatch('resetClient');
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
