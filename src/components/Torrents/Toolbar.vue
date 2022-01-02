<template>
  <div class="toolbar flex-1">
    <i
      class="fas fa-atlas fa-lg fa-fw"
      title="Connections"
    />
    <i
      class="fas fa-folder-open fa-lg fa-fw"
      title="Add torrent"
    />
    <i
      class="fas fa-link fa-lg fa-fw"
      title="Add torrent link"
    />
    <i
      class="fas fa-play fa-lg fa-fw"
      title="Start torrent"
    />
    <i
      class="fas fa-stop fa-lg fa-fw"
      title="Stop torrent"
    />
    <i
      class="fas fa-trash fa-lg fa-fw"
      title="Remove torrent"
    />
    <i
      class="fas fa-chevron-up fa-lg fa-fw"
      title="Move up queue"
    />
    <i
      class="fas fa-chevron-down fa-lg fa-fw"
      title="Move down queue"
    />
    <i
      class="fas fa-tachometer-alt fa-lg fa-fw"
      title="Alternate bandwidth"
    /> 
    <i
      class="fas fa-cog fa-lg fa-fw"
      title="Transmission options"
    />
    <i
      class="fas fa-tools fa-lg fa-fw"
      title="Application options"
    />
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
