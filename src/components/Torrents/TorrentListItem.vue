<template>
  <div class="torrent-list-item
    flex-none
    w-full
    w-max-full
    bg-primary-lighter rounded-xl
    my-3">
    <div class="grid grid-cols-5 gap-1 p-1 w-full">
      <div class="col-span-4 align-baseline  ">
        <div class="float-left">
          <component
              class="w-6 h-6 m-0 inline mb-1.5 mr-1 fill-secondary"
              :is="formatStatus(torrent.status)" />
        </div>
        <div class="break-all float-left">
          <span class="text-xl inline m-0 break-all">{{ torrent.name }}</span>
        </div>
      </div>
      <div class="col-span-1 row-span-3 justify-items-end">
        <PercentageCircle :percentage="torrent.percentDone * 100" class=""/>
        <div class="speeds ">
          <ChevronDownIcon class="fill-secondary w-5 h-5 float-left block" />
          <span class="float-left block">{{ humanReadableSize(torrent.rateDownload) }}/s</span>
          <ChevronUpIcon class="fill-secondary w-5 h-5 float-left block" />
          <span class="float-left block">{{ humanReadableSize(torrent.rateUpload) }}/s</span>
        </div>
      </div>
      <div class="col-span-4 row-span-1 pl-1">
        <DownloadIcon class="fill-secondary w-5 h-5 float-left block" />
        <span class="pl-1"> {{ humanReadableSize(torrent.sizeWhenDone - torrent.leftUntilDone) }}
          ({{ humanReadableSize(torrent.sizeWhenDone) }})
        </span>
      </div>
      <div class="col-span-4 row-span-1 pl-1">
        <UploadIcon class="fill-secondary w-5 h-5 float-left block" />
        <span class="pl-1"> {{ humanReadableSize(torrent.uploadedEver) }}
        </span>
      </div>
      <div class="col-span-4 row-span-1 pl-1 pb-2">
        <ShareIcon class="stroke-secondary w-5 h-5 float-left block" />
        <span class="pl-1">{{ torrent.peersSendingToUs }} (of {{ torrent.peers.length }} peers) </span>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import PercentageCircle from '@/components/Utils/PercentageCircle.vue';
import {Torrent} from "@/models";
import { ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  StopIcon,
  ExclamationCircleIcon,
  RefreshIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  DownloadIcon,
  UploadIcon
} from '@heroicons/vue/solid';
import {
  ShareIcon
} from '@heroicons/vue/outline';

export default defineComponent({
  name: "TorrentMenuItem",
  components: {
    PercentageCircle,
    ArrowCircleDownIcon,
    ArrowCircleUpIcon,
    StopIcon,
    ExclamationCircleIcon,
    RefreshIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    DownloadIcon,
    UploadIcon,
    ShareIcon
  },
  mounted() {
    console.log("rate: ", this.torrent.rateDownload);
  },
  props: {
    torrent: {
      type: Object as PropType<Torrent>,
      required: true
    }
  },
  computed: {

  },
  methods: {
    humanReadableSize(size: number) : string {
      let hrSize = "0";
      if (size) {
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
    },
    formatStatus(status: number) {
      let component;
      switch(status) {
        case 0:
           component = "StopIcon";
          break;
        case 1:
        case 2:
          component = "RefreshIcon";
          break;
        case 3:
        case 4:
          component = "ArrowCircleDownIcon";
          break;
        case 5:
        case 6:
          component = "ArrowCircleUpIcon";
          break;
      }
      return component;
    }
  }
})
</script>

<style>
.name svg {
  display: block;
  float: left;
}

/*.speeds svg {*/
/*  display: block;*/
/*  float: left;*/
/*}*/

/*.speeds span {*/
/*  display: block;*/
/*  float: left;*/
/*}*/
</style>