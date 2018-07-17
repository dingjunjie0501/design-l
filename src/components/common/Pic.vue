<template>
  <div class="picture">
      <i class="el-icon-loading" v-show='!show'></i>
      <!-- <loading :show='!show'></loading> -->
      <img :src="src" v-show='show'>
  </div>
</template>

<script>
import Loading from "@/components/common/Loading"
export default {
  name: 'Pic',
  data() {
    return {
      show: false,
      src: ''
    }
  },
  props: {
    url: {
      type: String,
      required: true
    }
  },
  components: {
    Loading
  },
  mounted() {
    var newImg = new Image()
    newImg.src = this.url
    newImg.onload = () => {
      this.src = newImg.src;
      this.show = true;
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
.el-icon-loading {
  display: inline-block;
  font-size: 34px;
  color: #29d;
}
</style>
