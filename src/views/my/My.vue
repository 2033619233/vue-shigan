<template>
  <div>
    <van-nav-bar
      title="个人页面"
    />
    <div class="container" v-if="list">
      <van-image
        class="img"
        round
        width="10rem"
        height="10rem"
        fit="cover"
        :src="img"
      />
      <van-cell-group inset v-for="item in list">
        <van-cell title="用户名" :value="item.uname" />
        <van-cell title="年龄" :value="item.uage" />
        <van-cell title="号码" :value="item.telephone" />
        <van-cell title="email" :value="item.email" />
      </van-cell-group>
      <!-- <button @click="getImg">获取图片</button> -->
    </div>
    <div v-else>未登录</div>
    <GoodList></GoodList>
  </div>
</template>

<script>
import axios from "axios";
import GoodList from '@/components/GoodList.vue'
export default {
  name: "home",
  components: {
    GoodList
  },
  props: {},
  data() {
    return {
      res: {},
      list: [],
      test: [1, 2, 3],
      img:'',
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getData() {
      let id = this.$store.state.id;
      let res = await axios({
        method: "POST",
        url: "http://192.168.1.105:8080/little-project/auser/home",
        params: {
          id,
        },
      });
      console.log(res.data);
      this.list.push(res.data);
      this.img = 'http://192.168.1.105:8080/little-project/imge/' + this.list[0].upictrue
      //   res = this.list.split(';')
      //   console.log(res)
    },
    // async getImg() {
    //   await axios({
    //     method: "GET",
    //     url: "http://192.168.1.105:8080/little-project/auser/login-telephone",
    //   }).then((res) => {
    //     console.log(res);
    //   });

    //   // this.router
    // },
  },
  created() {
    this.getData();
    // console.log(this.list[0].upictrue)
    
  },
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="less" scoped>
.img {
  display: flex;
  justify-content: center;
  // align-items: center;
  margin: 10px 100px;
}
</style>
