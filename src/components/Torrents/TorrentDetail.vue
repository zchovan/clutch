<template>  
  <div class="flex-1 bg-primary-lighter text-gray-light">
    <h2>torrent name: {{ torrent.name }}</h2>
    <h2>General</h2>
    <p>Status: {{ torrent.status }}</p>
    <p>TotalSize: {{ torrent.totalSize }}</p>
    <p>Files: </p>
    <ul>
      <li
        v-for="file in torrent.files"
        :key="file.name"
      >
        * {{ file.name }}
      </li>
    </ul>

    <p>Pieces</p>
    <div>
      {{ getPieces(torrent.pieces) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BitField from 'bitfield';
import { Base64 } from 'js-base64';

export default defineComponent({
  name: 'TorrentDetail',
  components: {        
  },
  data() {
    return {

    }
  },
  props: {

  },
  computed: {
    torrent() {
      return this.$store.getters.getSelectedTorrent;
    }
  },
  methods: {
    getPieces(pieces:string) {
      let p = "";
      if (pieces !== undefined) {
        const bits = Base64.toUint8Array(pieces);
        const bitfield = new BitField(bits);

        bitfield.forEach(b => {
          (b) ? p += "1" : p += "0";
        })
      }
      return p;
    }
  }
})
</script>

<style scoped>

</style>