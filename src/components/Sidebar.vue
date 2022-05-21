<template>
  <div class="w-32 bg-primary ">
    <div class="h-full grid grid-cols-1 gap-2 content-between justify-items-center">
      <div>
        <div class="rounded-full bg-primary-light fill-secondary palce-items-center justify-center h-16 w-16 mb-2 mt-4">
          <svg
            id="mdi-car-clutch"
            class="w-16 h-16 m-0 p-0 fill-main"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="0 0 24 24"
          >
            <path d="M10 18.84L14 20.7V23L8 20V14H5V10H8V4L14 1V3.3L10 5.16V18.84M19 10H15V5.41L12 6.8V17.2L15 18.6V14H19V10Z" />
          </svg>
        </div>
        <div>
          <p class="text-secondary text-center font-['roboto'] font-bold text-2xl">
            Clutch
          </p>
        </div>
      </div>
      <div>
        <!-- <div class="-rotate-90 ml-8 text-secondary">
                    <p class="font-['roboto'] text-5xl font-bold">Torrents</p>
                </div> -->
      </div>
      <div class="mb-4 grid grid-cols-1 justify-items-center">
        <router-link to="/">
          <div class="rounded-full bg-primary-light w-10 h-10 flex place-items-center justify-center mb-1.5">
            <DownloadIcon class="fill-secondary h-6 w-6 p-0 m-0" />
          </div>
        </router-link>
        <router-link to="/connections">
          <div class="rounded-full bg-primary-light w-10 h-10 flex place-items-center justify-center mb-1.5">
            <ServerIcon class="fill-secondary h-6 w-6 p-0 m-0" />
          </div>
        </router-link>
        <!-- <router-link> -->
        <div class="rounded-full bg-primary-light w-10 h-10 flex place-items-center justify-center mb-1.5">
          <AdjustmentsIcon class="fill-secondary h-6 w-6 p-0 m-0" />
        </div>
        <!-- </router-link> -->
        <div class="flex place-items-center">
          <ChevronUpIcon class="fill-secondary w-3.5 h-3.5" />
          <p class="text-secondary">
            478kb/s
          </p>
        </div>
        <div class="flex place-items-center ">
          <ChevronDownIcon class="fill-secondary w-3.5 h-3.5" />
          <p class="text-secondary">
            56.3kb/s
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ServerIcon, AdjustmentsIcon, ChevronUpIcon, ChevronDownIcon, DownloadIcon } from '@heroicons/vue/solid';

export default defineComponent({
    name: 'SideBar',
    components: {
        ServerIcon,
        AdjustmentsIcon,
        ChevronUpIcon,
        ChevronDownIcon,
        DownloadIcon
    }
});
</script>