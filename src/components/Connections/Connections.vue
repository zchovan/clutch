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
        :key="connection.name"
        :name="connection.name"
        :auth-req="connection.auth_required"
        :host="connection.host"
        :port="connection.port"
        @click="selectConnectionByName(connection.name)"
        @connection-delete="getConnections"
      />
    </div>
    <div class="flex justify-center bg-primary-lighter text-gray w-2/3">
      <div class="w-2/3">
        <div class="">
          <h1 class="text-2xl my-3">
            New connection details
          </h1>
        </div>
        <div class="">
          <div class="flex flex-col mb-1">
            <label
              class="text-lg mb-1"
              for="connection_name"
            >Connection Name</label>
            <input
              id="connection_name"
              v-model="name"
              class="h-9"
              type="text"
              name="connection_name"
            >
          </div>
          <div class="flex flex-col mb-1">
            <label
              class="text-lg mb-1"
              for="host"
            >Remote host</label>
            <input
              id="host"
              v-model="host"
              class="h-9"
              type="url"
              name="host"
            >
          </div>
          <div class="flex flex-col mb-1">
            <label
              class="text-lg mb-1"
              for="port"
            >Port</label>
            <input
              id="port"
              v-model="port"
              class="h-9"
              type="number"
              name="port"
            >
          </div>
          <div class="flex flex-col mb-1">
            <label
              class="text-lg mb-1"
              for="rpc_path"
            >RPC path</label>
            <input
              id="rpc_path"
              v-model="rpc_path"
              class="h-9"
              type="text"
              name="rpc_path"
              placeholder="/transmission/rpc"
            >
          </div>
          <div class="flex flex-col mb-1 mt-6">
            <label
              class="text-lg mb-1"
              for="auth_required"
            >Authentication required</label>
            <input
              id="auth_required"
              v-model="auth_required"
              class="h-9"
              type="checkbox"
              name="auth_required"
            >
          </div>
          <div v-show="auth_required">
            <div class="flex flex-col mb-4">
              <label
                class="text-lg mb-1"
                for="username"
              >Username</label>
              <input
                id="username"
                v-model="username"
                class="h-9"
                type="text"
                name="username"
              >
            </div>
            <div class="flex flex-col mb-1">
              <label
                class="text-lg mb-1"
                for="password"
              >Password</label>
              <input
                id="password"
                v-model="password"
                class="h-9"
                type="password"
                name="password"
              >
            </div>
          </div>
          <button
            class="mt-6 px-3 py-2 rounded-sm bg-secondary text-white"
            @click="saveConnection()"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ConnectionListItem from './ConnectionListItem.vue';
import Input from '../../components/Form/Input.vue';
import Connection from '@/models/connection';

export default defineComponent({
    name: 'Connections',
    components: {
        ConnectionListItem,
        Input
    },
    data() {
        return {
            connections: {},
            selected_connection: {},
            name: '',
            host: '',
            port: 9091,
            auth_required: false,
            username: '',
            password: '',
            rpc_path: '/transmission/rpc',
        };
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
        },
        selectConnectionByName(name) {
            const connections = this.$store.getters.getAllConnections;
            this.selected_connection = connections.find(conn => conn.name === name);
        },
    }
});
</script>

<style>
</style>
