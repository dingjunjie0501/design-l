<template>
  <div class="home">
    <ul>
      <li v-for="pic in picList" :key="pic.id">
        <router-link :to="{name:'Column', params:{id:pic.id}}">
          <pic :url="pic.url" v-if="pic.url"></pic>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Api from "@/api/api.json"
import Pic from "@/components/common/Pic"
export default {
  name: "Home",
  data() {
    return {
      picList: Api.picList
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
li {
  margin-bottom: 60px;
}
@media (max-width: 1366px) {
  li {
    margin-bottom: 24px;
  }
}
@media (max-width: 1024px) {
  li {
    margin-bottom: 18px;
  }
}
@media (max-width: 812px) {
  li {
    margin-bottom: 12px;
  }
}
</style>
