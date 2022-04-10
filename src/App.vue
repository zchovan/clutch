<template>
  <div class="relative h-screen flex">
    <Sidebar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/Sidebar.vue'



export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Sidebar
  },
  mounted: function() {
      this.$store.dispatch('disconnect');
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
