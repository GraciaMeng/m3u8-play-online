<template>
  <div
    class="search-url-input"
    :class="{ 'search-visited': isVisited }"
    :title="videoUrl"
  >
    <img class="search-img" src="@/assets/images/search.svg" alt="search" />
    <input
      class="url-input"
      name="url"
      type="text"
      v-model="videoUrl"
      autocomplete="off"
      placeholder="m3u8地址"
      @focus="focusInput"
      @blur="blurInput"
    />
  </div>
  <Button class="search-button" @click="playVideo">
    <img class="play-img" src="@/assets/images/play.svg" alt="play" />
  </Button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useVideoStore } from "@/store/useVideoStore";
import Button from "./Button.vue";

const videoStore = useVideoStore();
const { videoUrl } = storeToRefs(videoStore);

const playVideo = () => {
  if (!videoUrl.value) {
    return window.alert("请输入m3u8的url地址");
  }
  const list = videoUrl.value.split(".");
  if (list[list.length - 1] !== "m3u8") {
    return window.alert("请输入正确的m3u8地址");
  }
  videoStore.playVideo();
  videoStore.addHistory({ url: videoUrl.value });
};

const isVisited = ref(false);
const focusInput = () => {
  isVisited.value = true;
};
const blurInput = () => {
  isVisited.value = false;
};
</script>

<style scoped lang="scss">
.search-url-input {
  width: 200px;
  height: 40px;
  margin-left: 20px;
  appearance: none;
  background: #f9f9f9;
  color: #213547;
  font-size: 18px;
  padding: 0 10px 0 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;

  .search-img {
    height: 20px;
    width: 20px;
    margin-right: 8px;
  }

  .url-input {
    font-size: 16px;
    width: 100%;
    outline: none;
    border: 1px solid transparent;
    background: #f9f9f9;
  }

  &.search-visited {
    border-color: #646cff;
    box-shadow: 0 0 0 2px var(--outline-color);
  }
}
.search-button {
  .play-img {
    height: 20px;
    width: 20px;
  }
}
</style>
