<template>
  <div class="picture">
      <loading :show='!show'></loading>
      <img :src="src" v-show='show'>
  </div>
</template>

<script>
import Loading from "@/components/common/Loading"
export default {
  name: 'Picture',
  data() {
    return {
      show: false
    }
  },
  props: {
    url: {
      type: String
    }
  },
  components: {
    Loading
  },
  mounted() {
    var newImg = new Image()
    newImg.src = this.url
    newImg.onerror = () => {    // 图片加载错误时的替换图片
    }
    newImg.onload = () => { // 图片加载成功后把地址给原来的img
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
</style>
