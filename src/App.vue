<template>
  <div id="app">
    <router-view class="ccc"/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "./views/tabbar/Tabbar.vue";
export default {
  components: {
    Tabbar,
  },
  mounted() {
  },
};
</script>

<style lang="less">
.ccc{
  margin-bottom: 50px;
}
</style>
