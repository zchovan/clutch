<template>
  <div>
    <p>{{ name }}</p>
  </div>
</template>

<script>



export default {
  name: 'TorrentMenuItem',
  props: {
    'name': {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
