<template>
  <div>
    <van-nav-bar title="商品详情" left-arrow />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="item in list.picture">
        <van-image fit="contain" :src="item.picture || 'https://img01.yzcdn.cn/vant/cat.jpeg'" />
      </van-swipe-item>
      <template #indicator>
        <!-- <div class="custom-indicator">{{ current + 1 }}/4</div> -->
      </template>
    </van-swipe>
    <!-- 轮播图下面第一个 -->
    <van-cell-group inset class="good-baseinfo">
      <van-cell class="baseinfo-item">
        <template #title>
          <span class="price-unit">￥</span>
          <span class="price">{{list.price}}</span>
        </template>
        <template #extra>
          <span class="sales">已售{{list.sales}}万+件</span>
        </template>
      </van-cell>
      <van-cell class="baseinfo-item">
        <template #title>
          <span class="title">
            {{list.sname}}
          </span>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 第二个格子 -->
    <van-cell-group inset>
      <van-field name="switch" label="地址">
        <template #input>
          <span class="sales"
            >{{list.adress  || 100}}</span
          >
        </template>
      </van-field>
      <van-field name="switch" label="描述">
        <template #input>
          <span class="desc"
            >
             {{list.recommendation || '商品是为了出售而生产的劳动成果，是人类社会生产力发展到一定历史阶段的产物，是用于交换的劳动产品。恩格斯对此进行了科学的总结：商品“首先是私人产品。但是，只有这些私人产品不是为自己消费，而是为他人的消费，即为社会的消费而生产时，它们才成为商品；它们通过交换进入社会的消费”。'}}</span
          >
        </template>
      </van-field>
       <van-field name="switch" label="库存">
        <template #input>
          <span class="store"
            >100件</span
          >
        </template>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "home",
  components: {},
  props: {},
  data() {
    return {
      current: 0,
      list:[]
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getData() {
      await axios({
        method: "POST",
        url: "http://192.168.1.105:8080/little-project/shop/findshopid",
        params:{
          id:1
        }
      }).then((res) => {
        console.log(res.data);
        res.data.picture.forEach((item) => {
          item.picture =
            "http://192.168.1.105:8080/little-project/imge/" + item.picture;
        });
        this.list = res.data;
        this.$toast("获取成功");
      });
    },
  },
  created() {
    this.getData()
  },
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="less" scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}

.good-baseinfo {
  margin-top: 15px;
  margin-bottom: 10px;
}

.my-swipe{
  height: 280px;
}
</style>
