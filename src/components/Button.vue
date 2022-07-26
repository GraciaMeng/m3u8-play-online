<template>
  <button class="m3u8-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.m3u8-button {
  border-radius: 2px;
  border: 1px solid transparent;
  padding: 4px 15px;
  background-color: #1890ff;
  color: #fff;
  cursor: pointer;
  transition: border-color 0.25s;
  box-shadow: 0 2px #0000000b;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  outline: 0;
  display: flex;
  align-items: center;
  height: 32px;
  margin-left: 12px;

  &:hover {
    border-color: #40a9ff;
    background-color: #40a9ff;
  }
}
</style>
