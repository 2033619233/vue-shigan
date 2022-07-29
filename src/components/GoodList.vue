<template>
  <div class="masonry">
    <div ref="test" class="item" v-for="item in list">
      <img :src="item.wpicture" alt="" />
      <div class="title">
        <span class="text">{{item.wname}}</span>
        <span class="price">￥{{item.wprice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Masonry",
  components: {},
  props: {},
  data() {
    return {
        list:[]
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getData() {
      await axios({
        method: "POST",
        url: "http://192.168.1.105:8080/little-project/wares/findall",
      }).then((res) => {
          res.data.forEach(item => {
              item.wpicture = "http://192.168.1.105:8080/little-project/imge/" + item.wpicture
        });
            console.log(res);
        this.list = res.data
        this.$toast("获取成功");
      });
    },
  },
  created() {
    this.getData();
  },
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="less" scoped>
.masonry {
  column-count: 2;
  column-gap: 10px;
  box-sizing: border-box;
  padding: 10px;
  background-color: #f2f2f2;
}

.masonry .item {
  break-inside: avoid;
  padding-bottom: 20px;
  margin-bottom: 10px;
  /* width: 171px; */
  border-radius: 5px;
  background-color: #fff;
}

.masonry .item img {
  width: 100%;
  margin-bottom: 10px;
}

.masonry .item .title {
  text-align: left;
}
.masonry .item .text {
  margin-left: 12px;
  display: block;
  margin-bottom: 10px;
  color: 14px;
}

.masonry .item .price {
  margin-left: 12px;
  color: #f60;
  color: 16px;
}
</style>
