<script lang="ts">
import Sidebar from '@/Sidebar.vue'
import { defineComponent } from 'vue';
import { ipcRenderer } from 'electron';


export default defineComponent({
  name: 'app',
  components: {
    Sidebar,
  },
  setup() {
    ipcRenderer.send('message', 'Hello from App.vue!');
  },
  data() {
    return {
      torrents: "",
      headers: {}
    }
  },
  mounted() {
    console.log('RESET');
    this.$store.dispatch('resetCurrentConnection');
    this.$store.dispatch('resetClient');
  },
})
</script>

<template>
  <div class="relative h-screen flex">
    <sidebar />
    <router-view />
  </div>  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>