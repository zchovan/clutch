<template>
  <div class="relative h-screen flex">
    <SideBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/Sidebar.vue';


export default defineComponent({
  name: 'App',
  components: {
    SideBar
  },
  mounted: function() {
    this.$store.dispatch('disconnect');
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
