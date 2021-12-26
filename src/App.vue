<template>

  <div class="h-screen w-screen flex">
    <div class="h-screen flex-none w-18 m-0 p-0 bg-main">
      <svg class="m-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-car-clutch" width="52" height="52" viewBox="0 0 24 24">
        <path d="M10 18.84L14 20.7V23L8 20V14H5V10H8V4L14 1V3.3L10 5.16V18.84M19 10H15V5.41L12 6.8V17.2L15 18.6V14H19V10Z" />
      </svg>
      <!-- <img src="./assets/clutch_logo.svg" class="w-10 h-10" alt=""/> -->
      <div class="rotate-90 ml-8">
        <span class="text-secondary">Clutch</span>
      </div>
    </div>
    <div class="h-screen flex-none w-64 min-w-64 m-0 p-0 bg-main text-secondary">
        <nav class="mt-2">
          <a href="#" class="block py-1 px-2 text-left">All torrents (14)</a>
          <a href="#" class="block py-1 px-2 text-left">Downloading (1)</a>
          <a href="#" class="block py-1 px-2 text-left">Completed (13)</a>
          <a href="#" class="block py-1 px-2 text-left">Active (1)</a>
          <a href="#" class="block py-1 px-2 text-left">Inactive (0)</a>
          <a href="#" class="block py-1 px-2 text-left">Stopped (0)</a>
          <a href="#" class="block py-1 px-2 text-left">Error (0)</a>
          <a href="#" class="block py-1 px-2 text-left">Waiting (0)</a>
        </nav>
      </div>
    <!-- main part -->
    <div class="w-fit">
      <div class="main h-1/2">
        <toolbar/>
        <torrent-list/>
      </div> 
      
      <!-- bottom part -->
      <div class="bottom h-1/2">
        <h1>bottom</h1>
      </div>
    </div>
  </div>
  
      
      
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import TorrentList from './components/TorrentList.vue'

export default {
  name: 'App',
  components: {
    Toolbar,
    TorrentList
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
