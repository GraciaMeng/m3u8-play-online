<template>
  <div class="video-container">
    <video id="video" preload="auto" muted class="video-js vjs-default-skin">
      <source :src="videoUrl" type="application/x-mpegURL" />
    </video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useVideoStore } from "@/store/useVideoStore";

export default defineComponent({
  name: "M3u8Video",
});
</script>

<script setup lang="ts">
const videoStore = useVideoStore();
const { videoUrl } = storeToRefs(videoStore);
</script>

<style lang="scss" scoped>
.video-container {
  height: 500px;
  width: 80vw;
  background-color: #000;
  margin: 20px auto 0;
}
.video-js {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>
