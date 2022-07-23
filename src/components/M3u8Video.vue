<template>
  <div class="video-container">
    <div class="video-url-input">
      <input name="url" type="text" v-model="url" />
      <button @click="playVideo">播放</button>
    </div>
    <div class="video-box">
      <video id="video" preload="auto" muted class="video-js vjs-default-skin">
        <source :src="url" type="application/x-mpegURL" />
      </video>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import videojs from "video.js";

export default defineComponent({
  name: "M3u8Video",
});
</script>

<script setup lang="ts">
const url = ref("");

const playVideo = () => {
  if (!url.value) {
    return window.alert("请输入m3u8的url地址");
  }
  const list = url.value.split(".");
  if (list[list.length - 1] !== "m3u8") {
    return window.alert("请输入正确的m3u8地址");
  }
  const video = videojs("video", {
    bigPlayButton: true,
    muted: true,
    controls: true,
  });
  video.play();
};
</script>

<style lang="scss" scoped>
.video-container {
  height: 100vh;
  width: 100vw;
  .video-url-input {
    height: 30px;
  }
}
.video-js {
  width: 100%;
  height: calc(100vh - 30px);
  object-fit: fill;
  background-color: #fff;
}
</style>
