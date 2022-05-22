<template>
  <div class="flex w-full bg-primary-light justify-center">
    <div class="w-1/3 min-w-64 h-screen bg-primary-light text-gray">
      <div>
        <h1 class="text-3xl m-2">
          Connections
        </h1>
      </div>
      <div :hidden="hideList">
        <connection-list-item
          v-for="connection in connections"
          :key="connection.name"
          :connection="connection"
          @click="selectConnectionByName(connection.name)"
          @connection-delete="getConnections"
        />
        <div class="flex justify-center">
          <PlusCircleIcon
            class="fill-secondary w-10 h-10"
            @click="toggleHidden"
          />
        </div>
      </div>

      <div :hidden="hideForm">
        <div class="flex flex-col">
          <XCircleIcon
            class="fill-secondary w-10 h-10"
            @click="toggleHidden"
          />
          <FormKit
            v-model="newConnection"
            type="form"
            submit-label="Save"
            @submit="saveConnection"
          >
            <FormKit
              type="text"
              name="name"
              label="Connection name"
              validation="required"
            />
            <FormKit
              type="text"
              name="url"
              label="URL"
              validation="required|url"
            />
            <FormKit
              type="text"
              name="port"
              label="Port"
              validation="required|number"
            />
            <FormKit
              type="text"
              name="rpc_path"
              label="RPC path"
            />
            <FormKit
              type="checkbox"
              name="auth_required"
              label="Authentication required"
            />
            <div :hidden="!newConnection.auth_required">
              <FormKit
                type="text"
                name="username"
                label="Username"
              />
              <FormKit
                type="password"
                name="password"
                label="Password"
              />
            </div>
          </FormKit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ConnectionListItem from './ConnectionListItem.vue';
import Connection from '@/models/connection';
import {
  XCircleIcon,
  PlusCircleIcon
} from '@heroicons/vue/solid';
import {useToast} from 'vue-toastification';

export default defineComponent({
  name: 'Connections',
  components: {
    ConnectionListItem,
    XCircleIcon,
    PlusCircleIcon
  },
  setup() {
    const toast = useToast();

    return { toast };
  },
  data() {
    return {
      connections: {},
      selected_connection: {},
      newConnection: {},
      name: '',
      url: '',
      port: 9091,
      auth_required: false,
      username: '',
      password: '',
      rpc_path: '/transmission/rpc',
      formVisible: false
    };
  },
  computed: {
    hideForm() {
      return !this.formVisible;
    },
    hideList() {
      return this.formVisible;
    },
  },
  watch: {
    connections: function() {
      return this.$store.getters.getAllConnections;
    }
  },
  mounted: function() {
    this.getConnections();
    this.formVisible = false;
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

      this.$store.dispatch('addConnection', new_connection)
        .then(() => {
          this.toast.success('Connection added');
          this.toggleHidden();
        });

    },
    getConnections() {
      this.connections = this.$store.getters.getAllConnections;
    },
    selectConnectionByName(name) {
      const connections = this.$store.getters.getAllConnections;
      this.selected_connection = connections.find(conn => conn.name === name);
    },
    toggleHidden() {
      this.formVisible = !this.formVisible;
    }
  }
});
</script>

<style>
</style>
