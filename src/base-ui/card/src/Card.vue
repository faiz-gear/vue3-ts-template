<template>
  <div class="card" :style="{ width: width }">
    <div v-if="showTitle" class="card-title">
      <slot name="card-title">{{ cardTitle }}</slot>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line
const props = withDefaults(
  defineProps<{
    cardTitle?: string
    width?: string
    showTitle?: boolean
  }>(),
  {
    cardTitle: '',
    width: '500px',
    showTitle: true
  }
)
</script>

<style scoped lang="scss">
.card {
  background: linear-gradient(135deg, #262932 0%, #191921 100%);
  box-shadow: 0px 3px 16px 1px rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  opacity: 1;
  border: 1px solid rgba(0, 162, 255, 0.3);
  box-sizing: border-box;
  &-title {
    padding-left: 25px;
    padding-top: 12px;
    height: 41px;
    box-sizing: border-box;
    background: url('~@/assets/card-decoration.png') -17px center no-repeat;
    background-size: auto;
    color: #f1f1f1;
    font-size: 16px;
  }
}
</style>
