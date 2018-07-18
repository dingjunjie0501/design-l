<template>
  <div id="app">
    <el-container>
      <el-header>
        <headerMenu></headerMenu>
      </el-header>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import headerMenu from "@/components/common/HeaderMenu";
export default {
  name: "App",
  components: {
    headerMenu
  }
};
</script>
<style scoped>
.el-header {
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 60px;
  position: fixed;
  width: 100%;
}
.el-main {
  padding: 0 60px 20px 60px;
  margin-top: 60px;
}
@media (max-width: 1366px) {
  .el-header {
    padding: 0 24px;
  }
  .el-main {
    padding: 0 24px 24px 24px;
    margin-top: 60px;
  }
}
@media (max-width: 1024px) {
  .el-header {
    padding: 0 18px;
  }
  .el-main {
    padding: 0 18px 18px 18px;
    margin-top: 60px;
  }
}
@media (max-width: 812px) {
  .el-header {
    padding: 0 12px;
  }
  .el-main {
    padding: 0 12px 12px 12px;
    margin-top: 60px;
  }
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
