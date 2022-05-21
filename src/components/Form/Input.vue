<template>
    <div class="mb-3 xl:w-96">
        <input
          :type=type
          class="form-input"
          :id=id
          v-model="name"
        >
        <label
          :for=id
          class="text-gray-700"
        >{{label}}</label>
      </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Input',
  props: {
    type: String,
    placeholder: String,
    label: String,
    id: String
  }
});
</script>
