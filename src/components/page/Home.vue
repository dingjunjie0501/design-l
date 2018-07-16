<template>
  <div class="home">
    <div>
      <ul>
        <li v-for="pic in picList" :key="pic.url">
          <pic :url="pic.url"></pic>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Pic from "@/components/common/Pic"
export default {
  name: "Home",
  data() {
    return {
      picList: [
        {
          url: "http://oty82poui.bkt.clouddn.com/20180715162041.jpg?imageslim"
        },
        {
          url: "http://oty82poui.bkt.clouddn.com/20180715162116.jpg?imageslim"
        },
        {
          url: "http://oty82poui.bkt.clouddn.com/20180715162126.jpg?imageslim"
        },
        {
          url: "http://oty82poui.bkt.clouddn.com/20180715162135.jpg?imageslim"
        },
        {
          url: "http://oty82poui.bkt.clouddn.com/20180715162144.jpg?imageslim"
        },
        {
          url: "http://oty82poui.bkt.clouddn.com/20180715162153.jpg?imageslim"
        }
      ]
    };
  },
  components: {
    Pic
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
</style>
