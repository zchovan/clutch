<template>    
  <div class="flex w-full">
    <div class="w-1/3 min-w-64 h-screen bg-primary-light text-gray">
      <div>
        <h1 class="text-3xl m-2">
          Connections
        </h1>
      </div>
      <connection-list-item 
        v-for="connection in connections"
        :name="connection.name" 
        :key="connection.name"
        :auth-req="connection.auth_required"
        :host="connection.host"
        :port="connection.port"
        @click="selectConnectionByName(connection.name)"
        @connection-delete="getConnections"
      />
    </div>
    <div class="flex justify-center bg-primary-lighter text-gray w-2/3">
      <div class="flex justify-center">
        <div>
          <div>
            <h1 class="text-2xl my-3">
              New connection details
            </h1>
          </div>
          <div class="form-floating mb-3 xl:w-96">
            <input
              type="text"
              class="form-input"
              id="connection_name"
              placeholder="Connection name"
              v-model="name"
            >
            <label
              for="connection_name"
              class="text-gray-700"
            >Connection name</label>
          </div>
          <div class="form-floating mb-3 xl:w-96">
            <input
              type="url"
              class="form-input"
              id="host"
              placeholder="http://my.transmission.server"
              v-model="host"
            >
            <label
              for="host"
              class="text-gray-700"
            >Remote host</label>
          </div>
          <div class="form-floating mb-3 xl:w-96">
            <input
              type="text"
              class="form-input"
              id="port"
              placeholder="9091"
              v-model="port"
            >
            <label
              for="port"
              class="text-gray-700"
            >Port</label>
          </div>
          <div class="form-floating mb-3 xl:w-96">
            <input
              type="text"
              class="form-input"
              id="rpc_path"
              placeholder="/transmission/rpc"
              v-model="rpc_path"
            >
            <label
              for="rpc_path"
              class="text-gray-700"
            >RPC path</label>
          </div>
          <div class="form-check mb-3 xl:w-96">
            <input
              class="checkbox"
              type="checkbox"
              v-model="auth_required"
              id="auth_required"
            >
            <label
              class="form-check-label inline-block text-gray"
              for="auth_required"
            >
              Authentication required
            </label>
          </div>
          <div v-show="auth_required">
            <div class="form-floating mb-3 xl:w-96">
              <input
                type="text"
                class="form-input"
                id="username"
                placeholder="Username"
                v-model="username"
              >
              <label
                for="username"
                class="text-gray-700"
              >Username</label>
            </div>
            <div class="form-floating mb-3 xl:w-96">
              <input
                type="password"
                class="form-input"
                id="password"
                placeholder="password"
                v-model="password"
              >
              <label
                for="password"
                class="text-gray-700"
              >Password</label>
            </div>
          </div>
          <div class="flex space-x-2 justify-center">
            <button
              @click="saveConnection"
              type="button"
              class="form-button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConnectionListItem from './ConnectionListItem.vue'
import Connection from '../../models/connection';

export default {
  name: 'Connections',
  components: {
    ConnectionListItem
  },
  data() {
    return {
      connections: {},
      selected_connection: {},
      name: "",
      host: "",
      port: 9091,
      auth_required: false,
      username: "",
      password: "",
      rpc_path: "/transmission/rpc",
    }
  },
  watch: {
    connections: function() {
      return this.$store.getters.getAllConnections;
    }
  },
  mounted: function() {
    this.getConnections();
  },
  methods: {
    selectConnectionByName(name) {
      const connections = this.$store.getters.getAllConnections;
      this.selected_connection = connections.find(conn => conn.name === name)
      console.log(this.selected_connection);
    },
    saveConnection() {
      let new_connection = new Connection(
        this.name,
        this.host,
        this.port,
        this.rpc_path,
        this.auth_required,
        this.username,
        this.password
      );

      this.$store.commit('addConnection', new_connection);
    },

    getConnections() {
      this.connections = this.$store.getters.getAllConnections;
    }
  }
}
</script>
