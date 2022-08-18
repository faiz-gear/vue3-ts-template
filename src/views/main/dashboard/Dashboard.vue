<template>
  <el-row class="dashboard" justify="center">
    <el-col>
      <el-row class="mb-12" justify="center" style="margin-top: 24px">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>
    </el-col>

    <el-col>
      <el-row class="mb-12" justify="center">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </el-row>
    </el-col>

    <el-col>
      <el-row class="mb-12" justify="center">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </el-row>
    </el-col>

    <el-col>
      <el-row justify="center">
        <el-button icon="Search" circle />
        <el-button type="primary" icon="Edit" circle />
        <el-button type="success" icon="Check" circle />
        <el-button type="info" icon="Message" circle />
        <el-button type="warning" icon="Star" circle />
        <el-button type="danger" icon="Delete" circle />
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.mb-12 {
  margin-bottom: 12px;
}
</style>
