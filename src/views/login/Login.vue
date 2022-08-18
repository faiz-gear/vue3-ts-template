<template>
  <div class="login">
    <el-form
      ref="formRef"
      :rules="rules"
      :model="loginInfo"
      label-width="80px"
      label-position="left"
      size="large"
      hide-required-asterisk
      class="login-form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginInfo.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginInfo.password" type="password" show-password @keyup.enter="handleLoginClick" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%; margin-top: 10px" class="login-btn" @click="handleLoginClick"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import appStore from '@/store'

const { loginByUsernameAndPassword } = appStore.loginStore

const formRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 10,
      message: '用户名长度在3-10位',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 12,
      message: '用户名长度在6-12位',
      trigger: 'blur'
    }
  ]
})

const loginInfo = ref({
  username: '',
  password: ''
})

const handleLoginClick = () => {
  formRef.value?.validate(async (valid) => {
    if (valid) {
      const { username, password } = loginInfo.value
      try {
        await loginByUsernameAndPassword({ username, password })
      } catch (err) {
        console.log(err)
      }
    }
  })
}
</script>

<style scoped lang="scss">
.login {
  width: 40%;
  margin: 0 auto;
  padding-top: 360px;
}
</style>
