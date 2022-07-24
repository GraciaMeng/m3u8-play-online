<template>
  <Drawer v-model:visible="composeVisible">
    <div class="history-list-container">
      <div
        class="history-item"
        v-for="(item, index) in videoHistoryList"
        :key="index"
      >
        {{ item.url }}
      </div>
    </div>
  </Drawer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Drawer from "./Drawer.vue";
import { useVideoStoretoRefs } from "@/store/useVideoStore";

export default defineComponent({
  name: "HistoryList",
  components: {
    Drawer,
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

const { videoHistoryList } = useVideoStoretoRefs();
</script>

<style lang="scss" scoped></style>
