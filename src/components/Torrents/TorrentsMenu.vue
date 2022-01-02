<template>
    <div class="w-64 min-w-64 h-screen bg-main text-secondary">
        <nav class="mt-2">
          <a href="#" class="block py-1 px-2 text-left">All torrents (14)</a>
          <a href="#" class="block py-1 px-2 text-left">Downloading (1)</a>
          <a href="#" class="block py-1 px-2 text-left">Completed (13)</a>
          <a href="#" class="block py-1 px-2 text-left">Active (1)</a>
          <a href="#" class="block py-1 px-2 text-left">Inactive (0)</a>
          <a href="#" class="block py-1 px-2 text-left">Stopped (0)</a>
          <a href="#" class="block py-1 px-2 text-left">Error (0)</a>
          <a href="#" class="block py-1 px-2 text-left">Waiting (0)</a>
        </nav>
      </div>
</template>

<script>
export default {
  name: 'TorrentsMenu',
  props: {
    msg: String
  }
}
</script>