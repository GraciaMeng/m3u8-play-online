<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './layout/Header.vue';
import M3u8Video from './components/M3u8Video.vue';
import { useVideoStoretoRefs } from './store/useVideoStore'
import { onMounted } from 'vue';

const { videoStore } = useVideoStoretoRefs()
onMounted(() => {
  videoStore.setHistoryList()
})
window.addEventListener('unload', function () {
  videoStore.saveHistoryList()
})
</script>

<template>
  <Header />
  <div class="m3u8-container">
    <M3u8Video />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.m3u8-container {
  height: calc(100vh - var(--m3u8-nav-height));
  padding-top: var(--m3u8-nav-height);
  z-index: 11;
}
</style>
