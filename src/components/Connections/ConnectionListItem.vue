<template>
  <div class="connection-list-item block">
    <div class="w-full flex">
      <span>{{ name }}</span>
      <XCircleIcon
        class="fill-secondary w-6 h-6"
        @click="deleteConnectionByName(name)"
      />
    </div>
  </div>
</template>

<script>

import {  XCircleIcon } from '@heroicons/vue/solid'

export default {
  name: 'ConnectionListItem',
  components: {
    XCircleIcon
  },
  emits: ['connection-delete'],
  props: {
    'name': {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    deleteConnectionByName(name) {
      let connections = this.$storage.get('connections');
      let new_connections = connections.filter(conn => conn.name !== name);
      this.$storage.delete('connections');
      this.$storage.set('connections', new_connections);
      this.$emit('connection-delete');
    },
  }
}
</script>
