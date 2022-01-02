<template>    
  <div class="flex w-full">
    <div class="w-1/3 min-w-64 h-screen bg-primary-light text-gray">
      <h1>connections</h1>
      <connection-list-item 
        v-for="connection in connections()" 
        :name="connection.name" 
        :key="connection.name" 
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
          type="text"
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

export default {
  name: 'Connections',
  components: {
    ConnectionListItem
  },
  data() {
    return {    
      selected_connection: {},  
      name: "Connection name",
      host: "localhost",
      port: 9091,
      auth_required: false,
      username: "",
      password: "",
      rpc_path: "/transmission/rpc"
    }
  },
  methods: {
    saveConnection() {                          
        let conns = this.$storage.get('connections');
        conns.push({
          name: this.name,
          host: this.host,
          port: this.port,
          auth_required: this.auth_required,
          username: this.username,
          password: this.password,
          rpc_path: this.rpc_path
        });
        this.$storage.delete('connections');
        this.$storage.set('connections', conns);            
      console.log(this.$storage.get('connections'));
    },
    connections: function () {      
      if (this.$storage.has('connections')) {
        return this.$storage.get('connections');
      } else {
        return "nope";
      }
    }
  }
}
</script>
