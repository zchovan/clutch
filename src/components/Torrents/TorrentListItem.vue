<template>
  <div class="bg-primary-lighter rounded-xl m-2 mr-1 p-2">
    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-4">
        <p class>{{ torrent.name }}</p>
        <p> Gb of {{ torrent.humanReadableSize }}</p>
      </div>
      <div class="col-span-1 justify-items-end">
        <PercentageCircle :percentage="percent" />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import PercentageCircle from '@/components/Utils/PercentageCircle.vue';
import {Torrent} from "@/models";

export default defineComponent({
  name: "TorrentMenuItem",
  components: {
    PercentageCircle
  },
  // data() {
  //   // return {
  //   //   torrent: Torrent
  //   // }
  // },
  mounted() {
    console.log("hrsize: ", this.torrent);
  },
  props: {
    torrent: {
      type: Object as PropType<Torrent>,
      required: true
    }
  },
  watch: {
    percent() {
      return this.torrent.downloadPercentage;
    }
  }
})
</script>