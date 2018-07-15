<template>
  <div class="home">
    <div>
      <ul>
        <li v-for="pic in picList" :key="pic.url">
          <img :src="pic.url">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}
img {
  max-width: 100%;
  max-height: 100%;
}
</style>
