<template>
  <div class="main">
    <!-- <el-container class="main-container">
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main style="padding-bottom: 0">
          <Nav></Nav>
          <div class="main-content">
            <RouterView v-slot="{ Component }">
              <template v-if="Component">
                <Transition mode="out-in" name="el-fade-in" appear>
                  <component :is="Component"></component>
                </Transition>
              </template>
            </RouterView>
          </div>
        </el-main>
        <el-footer class="footer"><Footer></Footer></el-footer>
      </el-container>
    </el-container> -->
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in" name="el-fade-in" appear>
          <component :is="Component"></component>
        </Transition>
      </template>
    </RouterView>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main {
  height: 100%;
  &-container {
    height: 100%;
  }
  &-content {
    padding: 24px 24px 0 32px;
    width: 1856px;
    box-sizing: border-box;
    overflow-x: hidden;
    min-height: 843px;
    background: #262932;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.6);
  }
  .footer {
    height: 90px;
  }
}
</style>
