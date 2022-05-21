<template>
  <div class="flex-1">
    <div class="flex">
      <torrents-menu />
      <torrent-detail />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TorrentsMenu from "./TorrentsMenu.vue";
import TorrentDetail from "./TorrentDetail.vue";

export default defineComponent({
  name: 'Torrents',
  components: {
    TorrentsMenu,
    TorrentDetail
  }
})
</script>