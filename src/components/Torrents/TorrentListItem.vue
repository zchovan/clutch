<template>
  <div class="bg-primary-lighter rounded-xl m-2 mr-1 p-2">
    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-4">
        <p class>{{ torrent.name }}</p>
        <p>{{ humanReadableSize(torrent.sizeWhenDone - torrent.leftUntilDone) }}
          Gb of {{ humanReadableSize(torrent.sizeWhenDone) }}</p>
        <p>{{ torrent.status }}</p>
        <p>{{ humanReadableSize(torrent.rateDownloadBs) }}/s</p>
      </div>
      <div class="col-span-1 justify-items-end">
        <PercentageCircle :percentage="torrent.percentDone * 100" />
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
  mounted() {
    console.log("hrsize: ", this.torrent.percentDone);
  },
  props: {
    torrent: {
      type: Object as PropType<Torrent>,
      required: true
    }
  },
  methods: {
    humanReadableSize(size: number) : string {
      let hrSize = "N/A";
      if (size !== undefined) {
        const k = size / 1024.0
        const m = size / (1024.0 * 1024.0);
        const g = size / ((1024.0 * 1024.0) * 1024.0);
        const t = size / (((1024.0 * 1024.0) * 1024.0) * 1024);

        if (t > 1) {
          hrSize = t.toFixed(2) + "TB";
        } else if (g > 1) {
          hrSize = g.toFixed(2) + "GB";
        } else if (m > 1) {
          hrSize = m.toFixed(2) + "MB";
        } else if (k > 1) {
          hrSize = k.toFixed(2) + "KB";
        } else {
          hrSize = size.toFixed(2) + "B";
        }
      }
      return hrSize;
    }
  }
})
</script>