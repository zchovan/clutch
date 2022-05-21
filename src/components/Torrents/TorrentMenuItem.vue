<template>
  <div>
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "TorrentMenuItem",
  props: {
    name: {
      type: String
    }
  }
})
</script>