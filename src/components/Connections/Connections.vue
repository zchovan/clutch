<template>    
  <div class="flex w-full">
    <div class="w-1/3 min-w-64 h-screen bg-primary-light text-gray">
      <h1>connections</h1>
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
    <div class="flex-1 justify-items-center content-center text-main bg-primary-lighter text-gray-light">
      <form 
        class="grid grid-cols-2 w-3/5" 
        action="" 
      >
        <label for="connection_name">Connection name</label>
        <input 
          class="w-1/3 px-4 py-2 border border-gray-300" 
          type="text" 
          id="connection_name" 
          v-model="name"
        >
        <label for="host">Remote host:</label>
        <input
          class="w-1/3 px-4 py-2 border border-gray-300"
          type="url"
          id="host"
          v-model="host"
        >
        <label for="host">Port:</label>
        <input
          class="w-1/3 px-4 py-2 border border-gray-300"
          type="number"
          id="port"
          v-model="port"
        >
        <label for="auth_required">Authentication required</label>
        <input
          type="checkbox"
          name="auth_required"
          id="auth_required"
          v-model="auth_required"
        >
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          v-model="username"
          :disabled="!auth_required"
        >
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          :disabled="!auth_required"
        >
        <label for="rpc_path">RPC Path</label>
        <input
          type="text"
          name="rpc_path"
          id="rpc_path"
          v-model="rpc_path"
        >

        <span @click="saveConnection">Save</span>
      </form>        
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
      name: "Connection name",
      host: "localhost",
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
      const conns = this.$store.getters.getAllConnections;
      this.selected_connection = conns.find(conn => conn.name === name)
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
