<template>
  <teleport to="body">
    <div
      class="drawer-container"
      :class="{ 'drawer-open': visible }"
      @scroll.prevent
    >
      <div class="drawer__mask-box" @click="closeDrawer"></div>
      <div
        class="drawer__mask-content"
        :style="{ transform: visible ? '' : 'translateX(100%)' }"
      >
        <div class="drawer__mask-header">
          <div class="drawer__mask-haader-title">
            <icon
              class="iconfont icon-guanbi action-close"
              @click="closeDrawer"
            ></icon>
            <div class="drawer__title">历史记录</div>
          </div>
        </div>
        <div class="drawer__mask-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
  name: "Drawer",
});
</script>

<script setup lang="ts">
const props = defineProps<{
  visible: boolean;
}>();

const emits = defineEmits<{
  (e: "update:visible", val: boolean): void;
}>();

const body = document.body;
watch(
  () => props.visible,
  (val) => {
    body.setAttribute(
      "style",
      val ? "touch-action: none;width: calc(100% - 17px);overflow: hidden;" : ""
    );
  }
);
function closeDrawer() {
  emits("update:visible", false);
}
</script>

<style lang="scss" scoped>
.drawer-container {
  position: fixed;
  top: 0;
  right: 0;
  width: 0%;
  height: 100%;
  z-index: 1000;
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  .drawer__mask-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #00000073;
    opacity: 0;
    transition: opacity 0.3s linear, height 0s ease 0.3s;
    pointer-events: none;
  }

  .drawer__mask-content {
    position: absolute;
    right: 0;
    width: 378px;
    height: 100%;
    background-color: #fff;
    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1);

    .drawer__mask-header {
      display: flex;
      align-items: center;
      padding: 16px 24px;
      border-bottom: 1px solid #f0f0f0;
      border-radius: 2px 2px 0 0;
    }
  }
}

.drawer__mask-haader-title {
  display: flex;
  align-items: center;
  .action-close {
    cursor: pointer;
    margin-right: 12px;
  }
}

.drawer-open {
  .drawer__mask-box {
    height: 100%;
    opacity: 1;
    transition: none;
    animation: drawerFadeIn 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    pointer-events: auto;
  }
  .drawer__mask-content {
    box-shadow: -6px 0 16px -8px #00000014, -9px 0 28px #0000000d,
      -12px 0 48px 16px #00000008;
  }

  &.drawer-container {
    width: 100%;
  }
}

@keyframes drawerFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
