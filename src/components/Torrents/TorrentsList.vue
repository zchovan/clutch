<template>
  <div
    class="w-1/2
    flex
    flex-col
    h-screen
    bg-primary-light text-gray "
  >
    <div
      class="filtering
      flex h-16"
    >
      <input
        id="search"
        v-model="search"
        type="text"
        name="search"
      >
      <select
        id="filteredStatus"
        v-model="selectedStatus"
        name="status"
      >
        <option value="-1">
          All
        </option>
        <option value="0">
          Stopped
        </option>
        <option value="4">
          Downloading
        </option>
        <option value="6">
          Seeding
        </option>
      </select>
      <span>count: {{ torrents.length }}</span>
    </div>
    <div
      class="torrent-list
      overflow-y-scroll
      flex-1
      h-full
      w-full
      mx-auto
      px-3"
    >
      <torrent-list-item
        v-for="torrent in torrents"
        :key="torrent.id"
        :torrent="torrent"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TorrentListItem from './TorrentListItem.vue';
import Client from '@/util/client';
import {Status} from '@/store/state';
import {Torrent} from '@/models';
import {useToast} from 'vue-toastification';

export default defineComponent({
    name: 'TorrentsList',
    components: {
        TorrentListItem
    },
    setup() {
        const toast = useToast();

        return { toast };
    },
    data() {
        return {
            torrents: [] as Torrent[],
            selectedStatus: -1,
            search: ''
        };
    },
    computed: {

    },
    watch: {
        torrents: function() {
            setTimeout(() => {
                this.getTorrents();
            }, 1000);
        },
        search: function() {
            this.getTorrents();
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
                .then((torrents) => {
                    if (this.selectedStatus !== -1) {
                        this.torrents = torrents.filter((t) => {
                            return t.status === parseInt(this.selectedStatus.toString());
                        }).filter((t) => {
                            return t.name?.includes(this.search);
                        });
                    } else {
                        this.torrents = torrents;
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.toast.error(error);
                });

        }
    }
});
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