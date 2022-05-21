<template>
  <div
    class="torrent-list-item
    flex flex-row
    p-3
    bg-primary-lighter rounded-xl my-3
    "
  >
    <div
      id="left-side"
      class="flex-1"
    >
      <div class="flex flex-row ">
        <component
          :is="formatStatus(torrent.status)"
          class="w-6 h-6  fill-secondary"
        />
        <div class="torrent-name">
          <span class="text-xl break-all">{{ torrent.name }}</span>
        </div>
      </div>
      <div class="downloaded flex flex-row">
        <DownloadIcon class="fill-secondary w-5 h-5" />
        <span class=""> {{ humanReadableSize(torrent.sizeWhenDone - torrent.leftUntilDone) }}
          ({{ humanReadableSize(torrent.sizeWhenDone) }})
        </span>
      </div>
      <div class="uploaded flex flex-row">
        <UploadIcon class="fill-secondary w-5 h-5 " />
        <span class=""> {{ humanReadableSize(torrent.uploadedEver) }}
        </span>
      </div>
      <div class="peers flex flex-row">
        <ClockIcon class="fill-secondary w-5 h-5 " />
        <span class="pl-1">
          {{ humanReadableTime(torrent.eta) }}
          <!--          {{ torrent.peersSendingToUs }} (of {{ torrent.peers.length }} peers) -->
        </span>
      </div>
    </div>
    <div
      id="right-side"
      class="w-36 min-w-36 flex flex-row justify-end"
    >
      <div class="flex flex-col align-middle justify-center">
        <div>
          <PercentageCircle
            :percentage="torrent.percentDone * 100"
            class="mx-auto"
          />
        </div>
        <div class="speeds mt-2 ">
          <ChevronDownIcon class="fill-secondary w-5 h-5 float-left block" />
          <span class="float-left block">{{ humanReadableSize(torrent.rateDownload) }}/s</span>

          <ChevronUpIcon class="fill-secondary w-5 h-5 float-left block" />
          <span class="float-left block">{{ humanReadableSize(torrent.rateUpload) }}/s</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import PercentageCircle from '@/components/Utils/PercentageCircle.vue';
import {Torrent} from '@/models';
import { ArrowCircleDownIcon,
    ArrowCircleUpIcon,
    StopIcon,
    ExclamationCircleIcon,
    RefreshIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    DownloadIcon,
    UploadIcon,
    ClockIcon
} from '@heroicons/vue/solid';
import {
    ShareIcon
} from '@heroicons/vue/outline';

export default defineComponent({
    name: 'TorrentMenuItem',
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
        ShareIcon,
        ClockIcon

    },
    props: {
        torrent: {
            type: Object as PropType<Torrent>,
            required: true
        }
    },
    computed: {

    },
    mounted() {
        console.log('rate: ', this.torrent.rateDownload);
    },
    methods: {
        humanReadableTime(seconds: number) : string {
            if (seconds === -1) {
                return 'N/A';
            }
            return new Date(seconds * 1000).toISOString().substring(11, 8);

        },
        humanReadableSize(size: number) : string {
            let hrSize = '0';
            if (size) {
                const k = size / 1024.0;
                const m = size / (1024.0 * 1024.0);
                const g = size / ((1024.0 * 1024.0) * 1024.0);
                const t = size / (((1024.0 * 1024.0) * 1024.0) * 1024);

                if (t > 1) {
                    hrSize = t.toFixed(2) + 'TB';
                } else if (g > 1) {
                    hrSize = g.toFixed(2) + 'GB';
                } else if (m > 1) {
                    hrSize = m.toFixed(2) + 'MB';
                } else if (k > 1) {
                    hrSize = k.toFixed(2) + 'KB';
                } else {
                    hrSize = size.toFixed(2) + 'B';
                }
            }
            return hrSize;
        },
        formatStatus(status: number) {
            let component;
            switch(status) {
            case 0:
                component = 'StopIcon';
                break;
            case 1:
            case 2:
                component = 'RefreshIcon';
                break;
            case 3:
            case 4:
                component = 'ArrowCircleDownIcon';
                break;
            case 5:
            case 6:
                component = 'ArrowCircleUpIcon';
                break;
            }
            return component;
        }
    }
});
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