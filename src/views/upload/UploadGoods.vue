<template>
  <div class="upload">
    <van-icon name="arrow-down" @click="downClik" class="down" />
    <!-- 导航栏 -->
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="nav"
    />

    <div class="link-nav">
      <router-link to="/uploadgood/" class="btn">按钮1</router-link>
      <router-link to="/uploadgood/2" class="btn">按钮2</router-link>
    </div>

    <router-view></router-view>
    <!-- input输入框 -->

   
  </div>
</template>

<script>
import axios from "axios";
import Test from './childComponents/Test.vue'
import Input from './childComponents/Input.vue'
export default {
  name: "upload",
  components: {
    Input,
    Test
  },
  props: {},
  data() {
    return {
      wname: "hkj",
      wprice: 1.0,
      recommendation: "hhhh",
      wevalate: 0,
      wtype: "qwq",
      wvolume: 100,
      wsales: 0,
      fileList: [],
      imgFormData: new FormData(),
      test: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
 
    onClickLeft() {
      this.$router.go("-1");
    },

    downClik() {
      window.scrollTo(0, 300);
    },
  },
  created() {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="less" scoped>
.upload {
  background-color: #f7f8fa;
  position: relative;
  .down {
    font-size: 20px;
    position: fixed;
    bottom: 100px;
    right: 30px;
    z-index: 2;
    border: 1px solid #333;
    border-radius: 50%;
  }
  .nav {
    margin-bottom: 20px;
  }
  .link-nav {
    margin: 0 auto;
    width: 200px;
    text-align: center;
    margin-bottom: 5px;
    .btn {
      background-color: rgb(52, 215, 66);
      color: #fff;
      display: inline-block;
      padding: 5px;
      border-radius: 4px;
      margin-left: 10px;
    }
    span {
      margin: 0 5px;
    }
  }
 
}
</style>
