<template>
  <div class="w-1/3 min-w-64 h-screen bg-primary-light text-gray">
    <torrent-menu-item
      v-for="torrent in torrents"
      :name="torrent.name" 
      :key="torrent.name" 
    />
  </div>
</template>

<script>
import TorrentMenuItem from './TorrentMenuItem.vue'
import axios from "axios";

export default {
  components: { TorrentMenuItem },
  name: 'TorrentsMenu',
  data() {
    return {
      torrents: [],
    }
  },
  mounted() {
    this.getTorrents()
  },
  methods: {
    getTorrents() {
      let conn = this.$store.getters.getCurrentConnection;
      let axios_instance;
      if (conn.auth_required) {
        axios_instance = axios.create({
          baseURL: 'http://' + conn.url + ':' + conn.port,
          method: 'POST',
          headers: {
            'x-transmission-session-id': conn.csrf_token
          },
          auth: {
            username: conn.username,
            password: conn.password
          },
        });
      } else {
        axios_instance = axios.create({
          baseURL: conn.url,
          method: 'POST',
          headers: {
            'x-transmission-session-id': conn.csrf_token
          }
        });
      }

      axios_instance.post(conn.rpc_path, {
        'method': 'torrent-get',
        'arguments': {
          'fields': [ 'id', 'name' ],
        },
      }).then((response) => {
        console.log('torrents gotten');
        console.log(response.data.arguments.torrents);
        this.torrents = response.data.arguments.torrents;
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>