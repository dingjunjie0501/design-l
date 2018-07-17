<template>
  <div>
    <breadCrumb :id="id"></breadCrumb>
    <ul>
      <li v-for="pic in picList" :key="pic.id">
        <pic :url="pic.url" v-if="pic.url"></pic>
      </li>
    </ul>
  </div>
</template>
<script>
import Api from "@/api/api"
import Pic from "@/components/common/Pic"
import BreadCrumb from "@/components/common/BreadCrumb"
export default {
  name: 'Column',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    picList: function () {
      return Api.columnList[this.id];
    }
  },
  components: {
    Pic,
    BreadCrumb
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 46px 0 0 0;
  margin: 0;
  text-align: center;
}
@media (max-width: 768px) {
  ul {
    padding: 30px 0 0 0;
  }
}
</style>
