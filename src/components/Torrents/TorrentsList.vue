<template>
  <div class="w-2/5 min-w-64 pr-1 bg-primary-light">
    <div class=" h-screen bg-primary-light text-gray overflow-y-auto torrent-list">
      <div class="w-auto px-2 pt-2 pb-6 clear-right w-full">
        <div class="float-left">
          <div class="form   mb-2 xl:w-96">
            <input
              type="text"
              class="form-input"
              id="search_term"
              placeholder="Search..."
              v-model="search_term"
            >
          </div>
        </div>
        <div class="float-right">
          <!--          <FilterIcon class="fill-secondary stroke-secondary w-5 h-5 w-min-5 h-min-5 clear-none " />-->
          <Dropdown />

        </div>
      </div>
      <!--      <torrent-list-item-->
      <!--        v-for="torrent in torrents"-->
      <!--        :torrent="torrent"-->
      <!--        :key="torrent.name"-->
      <!--        @click="selectTorrent(torrent.id)"-->
      <!--        :class="{ selected: isSelected(torrent.id) }"-->
      <!--        class=" clear-left"-->
      <!--      />-->
    </div>
  </div>
</template>

<script lang="ts">
// import TorrentListItem from './TorrentListItem.vue'
import Dropdown from '../Misc/Dropdown.vue'
import {Torrent} from "@/models";
import { defineComponent } from 'vue';


// import { FilterIcon } from '@heroicons/vue/outline';

export default defineComponent({
  components: {
    // TorrentListItem,
    // FilterIcon,
    Dropdown,
  },
  name: 'TorrentsList',
  data() {
    return {
      torrents: [] as Torrent[],
      timer: 0 as number,
      search_term: ""
    }
  },
  created() {
    this.getTorrents();
    // @todo make this configurable
    // this.timer = setInterval(this.getTorrents, 3000);
  },
  methods: {
    getTorrents() {
      const client = this.$store.getters.getClient;

      if(client !== undefined) {
        client.getAllTorrents()
          .then((torrents:Torrent[]) => {
            this.torrents = torrents;
          })
          .catch((error:string) => {
            console.log(error);
          })
      }
    },
    selectTorrent(id:number) {
      const selectedTorrent = this.torrents.find((t) => t.id === id);
      this.$store.dispatch('selectTorrent', selectedTorrent);
    },
    isSelected(id:number) {
      return this.$store.getters.getSelectedTorrent.id === id;
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
    beforeDestroy() {
      this.cancelAutoUpdate();
    }
  }
})
</script>