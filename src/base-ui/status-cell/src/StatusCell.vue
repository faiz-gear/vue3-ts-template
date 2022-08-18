<template>
  <div class="status-cell">
    <div class="status-cell-label">
      <slot name="label">
        <SvgIcon v-if="icon" :name="icon" :size="size"></SvgIcon>
        <span>{{ label }}</span>
      </slot>
    </div>
    <div class="status-cell-value" :class="{ abnormal: !normal }">
      <slot name="value">
        <span>{{ normal ? '正常' : '异常' }}</span>
        <div class="dot"></div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/base-ui/svg-icon'

// eslint-disable-next-line
const props = defineProps<{
  label: string
  normal?: boolean
  icon?: string
  size?: string
}>()
</script>

<style scoped lang="scss">
.status-cell {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  &-label {
    display: flex;
    align-items: center;
    span {
      margin-left: 12px;
      font-size: 14px;
      color: #f1f1f1;
    }
  }
  &-value {
    display: flex;
    align-items: center;
    color: #36ca36;
    font-size: 14px;
    .dot {
      margin-left: 16px;
      width: 14px;
      height: 14px;
      background: #36ca36;
      box-shadow: 0px 0px 6px 1px rgba(0, 225, 22, 0.4);
      border-radius: 50%;
    }
    &.abnormal {
      color: #ff4848;
      .dot {
        background: #ff4848;
        box-shadow: 0px 0px 6px 1px rgba(255, 0, 0, 0.6);
      }
    }
  }
}
</style>
