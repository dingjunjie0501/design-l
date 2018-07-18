<template>
  <div class="headerMenu">
    <el-row>
      <el-col :span="6">
        <img src="@/assets/logo.png" class="logo">
      </el-col>
      <el-col :span="18">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="home">Home</el-menu-item>
          <el-menu-item index="app">App</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "home":
          this.$router.push({ name: "Home" });
          break;
        case "app":
          this.$router.push({ name: "App" });
          break;
        default:
          break;
      }
    }
  },
  computed: {
    activeIndex: function () {
      let path = !this.$route.name ? 'home' : this.$route.name.toLowerCase();
      if (path == 'column') {
        return 'home';
      }
      return path
    }
  }
};
</script>

<style>
.logo {
  height: 40px;
  padding: 10px 0;
}
.el-menu-demo {
  float: right;
}
.el-menu--horizontal > .el-menu-item {
  height: 59px;
  line-height: 60px;
}
.el-menu--horizontal > .el-menu-item a {
  height: 100%;
  display: block;
  text-decoration-line: none;
}
@media (max-width: 1366px) {
  .el-menu--horizontal > .el-menu-item {
    font-size: 16px;
    padding: 0 18px;
  }
}
@media (max-width: 1024px) {
  .el-menu--horizontal > .el-menu-item {
    font-size: 14px;
    padding: 0 16px;
  }
}
@media (max-width: 812px) {
  .el-menu--horizontal > .el-menu-item {
    font-size: 12px;
    padding: 0 12px;
  }
}
</style>

