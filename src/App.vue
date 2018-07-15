<template>
  <div id="app">
    <el-container>
      <el-header height="80px">
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
body {
  background-color: #fafafa;
}
.el-header {
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 35px;
  position: fixed;
  width: 100%;
}
.el-main {
  padding: 0 35px 20px 35px;
  margin-top: 80px;
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
