<template>

  <div class="relative min-h-screen flex flex-wrap">
    <!-- top part -->
    <div class="flex-none w-full h-1/2">
      <div class="flex-no-wrap w-1/5 bg-slate-700 text-gray-50">
        <nav>
          <a href="#">asdf</a>
        </nav>
        <!-- <nav class="">
          <a href="#" class="block py-2 px-2 text-left">All torrents</a>
          <a href="#" class="block py-2 px-2 text-left">Downloading</a>
          <a href="#" class="block py-2 px-2 text-left">Completed</a>
          <a href="#" class="block py-2 px-2 text-left">Active</a>
          <a href="#" class="block py-2 px-2 text-left">Inactive</a>
          <a href="#" class="block py-2 px-2 text-left">Stopped</a>
          <a href="#" class="block py-2 px-2 text-left">Error</a>
          <a href="#" class="block py-2 px-2 text-left">Waiting</a>
        </nav> -->
      </div>
      <div class="fw-4/5">
        <HelloWorld msg="lofasz"/>
      </div> 
      
    </div>
    <!-- bottom part -->
    <div class="flex-none w-full h-1/2">
      <h1>bottom</h1>
    </div>

  </div>
  
      
      
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
