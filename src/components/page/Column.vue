<template>
  <div>
    <div class="app-bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>love{{id}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ul>
      <li v-for="pic in picList" :key="pic.id">
        <pic :url="pic.url"></pic>
      </li>
    </ul>
  </div>
</template>
<script>
debugger
import Api from "@/api/api"
import Pic from "@/components/common/Pic"
export default {
  name: 'Column',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    picList: function () {
      debugger
      return Api.columnList[this.id];
    }
  },
  components: {
    Pic
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
.app-bread-crumb {
  padding: 16px 0;
}
</style>
