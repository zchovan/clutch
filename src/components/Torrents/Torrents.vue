<template>
  <div class="flex-1">    
    <div class="flex">
      <torrents-list />
      <torrent-detail />
    </div>
    
    <torrents-menu/>  
  </div>    
</template>

<script lang="ts">
import TorrentsList from './TorrentsList.vue'
import TorrentDetail from './TorrentDetail.vue'

export default {
  name: 'Torrents',
  components: {    
    TorrentsList,
    TorrentDetail
  },
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>
