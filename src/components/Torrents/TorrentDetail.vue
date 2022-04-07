<template>
  <div class="flex-1 bg-primary-lighter text-gray-light">
    <h2>torrent name</h2>
    <h2>General</h2>
    <p>Status: Seeding</p>
    <p>Downloaded: 123Mb</p>
    <p>etc...</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'TorrentDetail'
})
</script>