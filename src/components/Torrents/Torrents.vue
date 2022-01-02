<template>
  <div class="flex-1">    
    <div class="flex">
      <torrents-menu/>          
      <torrents-list/>        
    </div>
    
    <!-- <torrents-menu/> -->  
  </div>    
</template>

<script>
import TorrentsMenu from './TorrentsMenu.vue'
import TorrentsList from './TorrentList.vue'

export default {
  name: 'Torrents',
  components: {    
    TorrentsMenu,
    TorrentsList
  },
  props: {
    
  }
}
</script>
