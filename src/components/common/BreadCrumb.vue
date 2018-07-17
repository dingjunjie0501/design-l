<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>love{{id}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: 'BreadCrumb',
  props: {
    id: {
      type: String
    }
  },
}
</script>
<style scoped>
.breadcrumb {
  padding: 16px 60px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
}
</style>
