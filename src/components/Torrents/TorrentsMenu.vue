<template>
  <div class="w-1/3 min-w-64 h-screen bg-primary-light text-gray">
    <torrent-menu-item
      v-for="torrent in torrents()" 
      :name="torrent.name" 
      :key="torrent.name" 
    />
  </div>
</template>

<script>
import TorrentMenuItem from './TorrentMenuItem.vue'
// import axios from './middleware/api-client'

export default {
  components: { TorrentMenuItem },
  name: 'TorrentsMenu',
  methods: {
    torrents: function() {      
      return [
        {
          name: 'torrent_1'
        },
        {
          name: 'torrent_2'
        },
        {
          name: 'torrent_3'
        }
      ]
      // axios({
      //   method: 'post',
      //   url: '/',
      //   data: {
      //       "arguments": {
      //           "fields": [ "id", "name", "totalSize", "labels" ],
      //           "ids": [1]
      //       },
      //       "method": "torrent-get",
      //       "tag": 39693
      //   },
      //   headers: this.headers
      // })
      // .then(function(response) {
      //   console.log(response);
      // })
      // .catch(function(error) {
      //   console.log(error );      
      // })
    }
  }
}
</script>