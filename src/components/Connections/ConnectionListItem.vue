<template>
  <div class="connection-list-item block">
    <div class="w-auto flex bg-primary-lighter hover:bg-primary-light-hover p-2 m-2 rounded">
      <span>{{ connection.name }}</span>
      <ShieldCheckIcon
        v-if="connection.auth_required"
        class="fill-secondary w-6 h-6"
      />
      <XCircleIcon
        class="fill-secondary w-6 h-6"
        @click="deleteConnectionByName(connection.name)"
      />
      <LoginIcon
        class="fill-secondary w-6 h-6"
        @click="connect(connection.name)"
      />
      <p>HOST {{ connection.url }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import { useToast } from 'vue-toastification';
import { XCircleIcon, LoginIcon, ShieldCheckIcon } from '@heroicons/vue/solid';
import Connection from '@/models/connection';

export default defineComponent({
  name: 'ConnectionListItem',
  components: {
    XCircleIcon,
    LoginIcon,
    ShieldCheckIcon
  },
  props: {
    connection: {
      type: Object as PropType<Connection>,
      required: true
    }
  },
  setup() {
    const toast = useToast();

    return { toast };
  },
  methods: {
    deleteConnectionByName(name: string) {
      this.$store.dispatch('deleteConnection', { name });
    },
    connect(name: string) {
      this.$store.dispatch('connect', { name })
        .then(() => {
          this.toast.success('Connected to ' + name);
        });
    }
  }
});
</script>