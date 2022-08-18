<template>
  <div class="dialog">
    <el-dialog
      :model-value="modelValue"
      :width="width"
      :show-close="false"
      :close-on-click-modal="closeOnClickModal"
      :top="top"
      :modal="modal"
      @update:model-value="emits('update:modelValue', $event)"
    >
      <template #header="{ close, titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass">{{ title }}</h4>
        <SvgIcon name="close" size="24px" style="cursor: pointer" @click="close"></SvgIcon>
      </template>
      <slot></slot>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ // eslint-disable-line
    modelValue: boolean
    title: string
    width?: string
    top?: string
    modal?: boolean
    closeOnClickModal?: boolean
  }>(),
  {
    width: '30%',
    top: '15vh',
    modal: false,
    closeOnClickModal: false
  }
)

const emits = defineEmits<{ // eslint-disable-line
  (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>

<style scoped lang="scss">
.dialog {
  :deep(.el-dialog) {
    --el-dialog-bg-color: linear-gradient(to right, #191919 0%, #010101 100%);
    .el-dialog__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 0;
      padding-top: 0;
      padding-bottom: 0;
      box-sizing: border-box;
      background: linear-gradient(135deg, #3d3f51 0%, #262932 100%);
      border-radius: 3px;
    }
    .el-dialog__title {
      margin: 0;
      --el-dialog-font-line-height: 60px;
    }
    .el-dialog__body {
      padding-top: 17px;
      padding-bottom: 16px;
    }
  }
}
</style>
