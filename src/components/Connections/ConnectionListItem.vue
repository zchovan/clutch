<template>
  <div class="connection-list-item block">
    <div class="w-auto flex bg-primary-lighter hover:bg-primary-light-hover p-2 m-2 rounded">
      <span>{{ name }}</span>
      <ShieldCheckIcon
        v-if="authReq"
        class="fill-secondary w-6 h-6"
      />
      <XCircleIcon
        class="fill-secondary w-6 h-6"
        @click="deleteConnectionByName(name)"
      />
      <LoginIcon
        class="fill-secondary w-6 h-6"
        @click="connect(name)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { XCircleIcon, LoginIcon, ShieldCheckIcon } from '@heroicons/vue/solid'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ConnectionListItem',
  components: {
    XCircleIcon,
    LoginIcon,
    ShieldCheckIcon
  },
  props: {
    'name': {
      type: String,
      default: '',
      required: true
    },
    'authReq': {
      type: Boolean,
      default: false,
      required: true
    },
    'host': {
      type: String,
      default: '',
      required: true
    },
    'port': {
      type: Number,
      default: 0,
      required: true
    }
  },
  methods: {
    deleteConnectionByName(name:string) {
      console.log("deleting: " + name)
      this.$store.dispatch('deleteConnection', { name })
    },
    connect(name:String) {
      this.$store.dispatch('connect', { name });
    }
  }
})
</script>
