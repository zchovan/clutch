<template>
  <div class="torrent-list-item bg-primary-lighter m-2 h-24 rounded p-2 w-auto grid grid-cols-5">
    <div class="col-span-4">
      <div class="float-left w-5 mr-1">
        <component
          :is="getIconComponent(torrent?.status)"
          class="fill-secondary w-5 h-5 w-min-5 h-min-5 "
        />
      </div>
      <p class="text-ellipsis overflow-hidden ... w-fit">
        {{ torrent?.name }}
      </p>
    </div>
    <div class="col-span-1">
      <div class="float-left">
        <ChevronUpIcon class="fill-secondary w-3.5 h-3.5" />
      </div>
      <div class="float-left clear-right">
        <span class="text-secondary">
          {{ convertBandwidth(torrent?.rateUpload) }}
        </span>
      </div>
      <div class="float-left clear-left">
        <ChevronDownIcon class="fill-secondary w-3.5 h-3.5" />
      </div>
      <div class="float-left clear-right">
        <span class="text-secondary">
          {{ convertBandwidth(torrent?.rateDownload) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ChevronUpIcon, ChevronDownIcon, DownloadIcon, UploadIcon, StopIcon, RefreshIcon } from '@heroicons/vue/solid'
import { Torrent, TorrentStatusEnum } from '../../models';
import { format } from 'mathjs';

export default defineComponent({
  name: 'TorrentListItem',
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
    DownloadIcon,
    UploadIcon,
    StopIcon,
    RefreshIcon
  },
  props: {
    'torrent': {
      type: Torrent
    },
  },
  methods: {
    convertBandwidth(speed:number|undefined) {
      // console.log('speed', speed);
      let formattedSpeed;
      if (speed === 0 || speed === undefined) {
        formattedSpeed = '0 B/s';
      } else {
        const k = format(speed/1024, {'precision': 2});
        const m = format(speed/1048576, {'precision': 2});
        const g = format(speed/1073741824, {'precision': 2});

        if (parseInt(g) > 1) {
          formattedSpeed = g + " GB/s";
        } else if (parseInt(m) > 1) {
          formattedSpeed = m + " MB/s";
        } else if (parseInt(k) > 1) {
          formattedSpeed = k + " KB/s";
        } else {
          formattedSpeed = speed + "B/s";
        }
      }

      return formattedSpeed;
    },
    getIconComponent(torrentStatus:TorrentStatusEnum|undefined) {
      // console.log('status: ', TorrentStatusEnum[torrentStatus]);
      // return 'DocumentDownloadIcon';
      if(torrentStatus !== undefined) {
        let component;
        switch (torrentStatus) {
          case TorrentStatusEnum.Stopped: {
            component = 'StopIcon';
            break;
          }
          case TorrentStatusEnum.QueuedToCheckFiles: {
            component = 'RefreshIcon';
            break;
          }
          case TorrentStatusEnum.CheckingFiles: {
            component = 'RefreshIcon';
            break;
          }
          case TorrentStatusEnum.QueuedToDonwload: {
            component = 'DownloadIcon';
            break;
          }
          case TorrentStatusEnum.Downloading: {
            component = 'DownloadIcon';
            break;
          }
          case TorrentStatusEnum.QueuedToSeed: {
            component = 'UploadIcon';
            break;
          }
          case TorrentStatusEnum.Seeding: {
            component = 'UploadIcon';
            break;
          }
        }
        return component;
      }
    }
  }
})
</script>
