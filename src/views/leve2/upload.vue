<template>
  <div class="upload">
    <!-- 导航栏 -->
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="nav"
    />
    <!-- input输入框 -->
    <div class="container">
      <van-cell-group class="input">
        <van-field class="input-item" v-model="uname" label="用户名:" />
        <van-field
          class="input-item"
          v-model="uage"
          label="年龄:"
          type="number"
        />
        <van-field class="input-item" v-model="email" label="email:" />
        <van-field class="input-item" v-model="upassword" label="密码:" />
        <van-field
          class="input-item"
          v-model="telephone"
          type="number"
          label="号码:"
        />
        <van-cell class="input-item">
          <van-radio-group class="usex" v-model="usex" direction="horizontal">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
        </van-cell>

        <van-radio-group class="usex" v-model="date" direction="horizontal">
          <van-cell title="生日" :value="formatDate" @click="show = true" />
          <van-action-sheet v-model="show">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              title="选择年月日"
              @confirm="confirmDate"
              @cancel="cancelDate"
            />
          </van-action-sheet>
        </van-radio-group>
      </van-cell-group>
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader v-model="fileList" :after-read="afterRead" />
        </template>
      </van-field>
      <van-button type="primary" @click="submit" class="btn-upload">
        提交
      </van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "upload",
  components: {},
  props: {},
  data() {
    return {
      date: "",
      show: false,
      uname: "werrwer",
      usex: "男",
      uage: "232",
      email: "sdfsa",
      telephone: "34324",
      upassword: "3224324",
      fileList: [],
      imgFormData: new FormData(),
      currentDate: new Date(2021, 0, 17),
      formatDate: "",
    };
  },
  computed: {},
  watch: {
    date() {
      let d = this.date;
      let date = new Date(d);
      let month = parseInt(date.getMonth()) + 1;
      console.log(date.getFullYear() + "-" + month + "-" + date.getDate());
      this.formatDate = date.getFullYear() + "-" + month + "-" + date.getDate();
    },
  },
  methods: {
    afterRead(file) {
      file = file.file;
      this.imgFormData.append("photo", file);
      // console.log(this.imgFormData.getAll("file"));
    },
    async submit() {
      await axios({
        method: "POST",
        url: "http://192.168.1.105:8080/little-project/auser/upload",
        params: {
          uname: this.uname,
          usex: this.usex,
          uage: this.uage,
          email: this.email,
          telephone: this.telephone,
          upassword: this.upassword,
        },
        data: this.imgFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log("2", res);
        this.$toast("注册成功");
        this.$router.push("/login");
      });
    },
    onClickLeft() {
      this.$router.go("-1");
    },
    confirmDate(value) {
      this.show = false;
      this.date = value;
      console.log(this.date);
    },
    cancelDate() {
      this.show = false;
    },
    // change(){
    //     console.log(this.currentDate)

    // }
  },
  created() {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="less" scoped>
.upload {
  background-color: #f7f8fa;
  .nav {
    margin-bottom: 20px;
  }
  .container {
    padding: 0 10px;
    .input {
      margin-bottom: 10px;
      background-color: #f7f8fa;
      .input-item {
        margin-bottom: 4px;
      }
      .sex {
        padding-left: 20px;
        height: 40px;
        background-color: #fff;
        margin-bottom: 5px;
      }
    }
    .uploadImg {
      background-color: #fff;
      padding: 5px;
      display: flex;
      .text {
        width: 100px;
        position: relative;
        margin-top: 10px;
        height: 100px;
      }
      .upload {
        background-color: #fff;
      }
    }
    .btn-upload {
      width: 100px;
      display: block;
      margin: 10px auto;
    }
  }
}
</style>
