<template>
  <div class="w-1/3 min-w-64 h-screen bg-primary-light text-gray">
    <torrent-menu-item
      v-for="torrent in torrents"
      :name="torrent.name"
      :key="torrent.name"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TorrentMenuItem from "./TorrentMenuItem.vue";
import Client from "@/util/client";
import {Status} from "@/store/state";

export default defineComponent({
  name: 'TorrentsMenu',
  components: {
    TorrentMenuItem
  },
  data() {
    return {
      torrents: [

      ]
    }
  },
  mounted() {
    if (this.$store.getters.getStatus === Status.CONNECTED) {
      console.log('getting torrents');
      this.getTorrents();
    }
  },
  methods: {
    getTorrents() {
      let client = new Client(this.$store.getters.getCurrentConnection);

      client.getAllTorrents()
        .then((torrents: any) => {
          this.torrents = torrents;
        })
        .catch((error: any) => {
          console.log(error);
        });

    }
  }
})
</script>