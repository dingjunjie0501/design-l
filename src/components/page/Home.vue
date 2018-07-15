<template>
  <div class="home">
    <div>
      <ul>
        <li>
          <img src="../../assets/a.png">
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
      msg: "/static/a.webp"
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
