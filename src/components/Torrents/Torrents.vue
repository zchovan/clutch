<template>
  <div class="flex-1">
    <div class="flex">
      <torrents-list />
      <torrent-detail />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TorrentsList from './TorrentsList.vue';
import TorrentDetail from './TorrentDetail.vue';

export default defineComponent({
    name: 'Torrents',
    components: {
        TorrentsList,
        TorrentDetail
    }
});
</script>