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
        { url: require("../../assets/20180715162041.jpg") },
        { url: require("../../assets/20180715162116.jpg") },
        { url: require("../../assets/20180715162126.jpg") },
        { url: require("../../assets/20180715162135.jpg") },
        { url: require("../../assets/20180715162144.jpg") },
        { url: require("../../assets/20180715162153.jpg") }
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
