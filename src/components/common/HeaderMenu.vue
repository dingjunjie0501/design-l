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
          <el-menu-item index="blog">Blog</el-menu-item>
          <el-menu-item index="support">Support</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "home"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "home":
          this.$router.push({ name: "Home" });
          break;
        case "app":
          this.$router.push({ name: "App" });
          break;
        case "blog":
          this.$router.push({ name: "Blog" });
          break;
        case "support":
          this.$router.push({ name: "Support" });
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style>
.logo {
  height: 44px;
  padding: 18px 0;
}
.el-menu-demo {
  float: right;
}
.el-menu--horizontal > .el-menu-item {
  height: 79px;
  line-height: 80px;
}
.el-menu--horizontal > .el-menu-item a {
  height: 100%;
  display: block;
  text-decoration-line: none;
}
</style>

