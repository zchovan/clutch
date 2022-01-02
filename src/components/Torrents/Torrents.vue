<template>
  <div class="flex-1">    
    <div class="flex">
      <torrents-menu />          
      <torrent-detail />        
    </div>
    
    <!-- <torrents-menu/> -->  
  </div>    
</template>

<script>
import TorrentsMenu from './TorrentsMenu.vue'
import TorrentDetail from './TorrentDetail.vue'

export default {
  name: 'Torrents',
  components: {    
    TorrentsMenu,
    TorrentDetail
  },
  props: {
    
  }
}
</script>
