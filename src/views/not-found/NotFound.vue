<template>
  <div class="not-found">
    <h2 style="text-align: center">Not Found</h2>
    <div>
      <el-button type="primary" @click="router.back()">返回</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped lang="scss">
.not-found {
  div {
    display: flex;
    justify-content: center;
  }
}
</style>
