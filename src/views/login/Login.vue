<template>
  <div>
    <van-nav-bar
      title="登录"
      right-text="注册"
       @click-right="onClickRight"
    />
    <van-form>
      <van-field
        v-model="telephone"
        label-width="50"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="upassword"
        type="password"
        label-width="50"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button @click="login" round block type="info">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  components: {},
  props: {},
  data() {
    return {
      telephone: "",
      upassword: "",
      id:''
    };
  },
  computed: {},
  watch: {},
  methods: {
    async login() {
      let res = await axios({
        method: "POST",
        url: "http://192.168.1.105:8080/little-project/auser/login-telephone",
        params: {
          telephone:this.telephone,
          upassword:this.upassword,
        },
      }).then((res) => {
        console.log(res);
        this.id = res.data
        this.$store.commit('updateId',this.id)
        this.$router.replace('my')
      });

      // this.router
    },
    onClickRight(){
      this.$router.push('/upload')
    }
  },
  created() {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="less" scoped></style>
