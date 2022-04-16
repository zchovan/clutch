<template>
  <div class="w-1/2 min-w-64 h-screen bg-primary-light text-gray torrent-menu overflow-y-scroll">
    <torrent-list-item
      v-for="torrent in torrents"
      :torrent="torrent"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TorrentListItem from "./TorrentListItem.vue";
import Client from "@/util/client";
import {Status} from "@/store/state";
import {Torrent} from "@/models";
import {useToast} from "vue-toastification";

export default defineComponent({
  name: 'TorrentsList',
  components: {
    TorrentListItem
  },
  setup() {
    const toast = useToast();

    return { toast }
  },
  data() {
    return {
      torrents: [] as Torrent[]
    }
  },
  mounted() {
    if (this.$store.getters.getStatus === Status.CONNECTED) {
      console.log('getting torrents');
      this.getTorrents();
    }
  },
  watch: {
    torrents: function() {
      setTimeout(() => {
        this.getTorrents();
      }, 5000);
    }
  },
  methods: {
    getTorrents() {
      let client = new Client(this.$store.getters.getCurrentConnection);

      client.getAllTorrents()
        .then((torrents) => {
          this.torrents = torrents;
        })
        .catch((error: any) => {
          console.log(error);
          this.toast.error(error);
        });

    }
  }
})
</script>
<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #36393F;
  border-radius: 10px;
}
</style>