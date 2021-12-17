<template>
  <div class="home">{{ name }}</div>
  <About></About>
  <el-button type="primary">开始</el-button>
</template>

<script setup lang="ts">
import About from './About.vue'
import { useStore } from '@/store'

const name = useStore().name
</script>

<style scoped></style>
