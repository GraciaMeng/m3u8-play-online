<template>
  <Drawer v-model:visible="composeVisible">
    <div class="history-list-container">
      <div
        class="history-item"
        v-for="(item, index) in videoHistoryList"
        :key="index"
      >
        <span>{{ index + 1 }}.{{ item.url }}</span>
        <Button class="play-button" @click="playHistoryVideo(item.url)">
          <img class="play-img" src="@/assets/images/play.svg" alt="play" />
        </Button>
      </div>
    </div>
  </Drawer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Drawer from "./Drawer.vue";
import { useVideoStoretoRefs } from "@/store/useVideoStore";
import Button from "./Button.vue";

export default defineComponent({
  name: "HistoryList",
  components: {
    Drawer,
    Button
  },
});
</script>

<script setup lang="ts">
const props = defineProps<{
  visible: boolean;
}>();
const emits = defineEmits<{
  (e: "update:visible", val: boolean): void;
}>();
const composeVisible = computed({
  get() {
    return props.visible;
  },
  set(val: boolean) {
    emits("update:visible", val);
  },
});

const { videoHistoryList, videoStore } = useVideoStoretoRefs();
function playHistoryVideo(url: string) {
  videoStore.setVideoUrl(url)
  composeVisible.value = false
  videoStore.playVideo()
  videoStore.addHistory({ url: videoStore.videoUrl })
}
</script>

<style lang="scss" scoped>
.history-item {
  display: flex;
  align-items: center;
  word-break: break-all;
}
.play-button {
  .play-img {
    height: 20px;
    width: 20px;
  }
}
</style>
