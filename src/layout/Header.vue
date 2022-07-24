<template>
  <header class="header-container">
    <div class="nav-bar">
      <div class="header__title-box">
        <img
          class="header__logo"
          src="../assets/images/vue.svg"
          alt="Vue logo"
        />
        <div class="header__title">m3u8在线播放</div>
        <SearchInput />
      </div>
      <div class="header__extra">
        <span class="header__history" @click="openHistoryDrawer">历史记录</span>
        <a
          href="https://github.com/GraciaMeng"
          target="_blank"
          rel="noopener noreferrer"
          ><img src="../assets/images/github.svg" class="github" alt="github"
        /></a>
      </div>
    </div>
  </header>
  <HistoryList v-model:visible="visible" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SearchInput from "@/components/SearchInput.vue";
import HistoryList from "@/components/HistoryList.vue";

export default defineComponent({
  name: "Header",
  components: {
    SearchInput,
    HistoryList,
  },
});
</script>

<script setup lang="ts">
const visible = ref(false);

function openHistoryDrawer() {
  visible.value = true;
}
</script>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  -webkit-backdrop-filter: saturate(50%) blur(8px);
  backdrop-filter: saturate(50%) blur(8px);
  background: rgba(255, 255, 255, 0.7);
  box-shadow: var(--box-shadow);
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 32px;
  height: var(--m3u8-nav-height);
  max-width: calc(1440px - 64px);
  .header__logo,
  .header__extra  {
    .header__history {
      margin-right: 12px;
      cursor: pointer;
    }
    img {
      height: 24px;
    }
  }
  
  .header__title {
    margin-left: 8px;
    font-weight: 600;
  }
}
.header__title-box,
.header__extra {
  display: flex;
  align-items: center;
}
</style>
