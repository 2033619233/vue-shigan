<template>
  <div>
    <div class="container">
      <van-cell-group class="input">
        <van-field class="input-item" v-model="wname" label="商品名:" />
        <van-field
          class="input-item"
          v-model="wprice"
          label="商品价格:"
          type="number"
        />
        <van-field
          class="input-item"
          v-model="recommendation"
          label="商品详情:"
        />
      </van-cell-group>

      <van-field class="input-item" v-model="test" label="填充:" />
      <van-field class="input-item" v-model="test" label="填充:" />
      <van-field class="input-item" v-model="test" label="填充:" />
      <van-field class="input-item" v-model="test" label="填充:" />
      <van-field class="input-item" v-model="test" label="填充:" />
      <van-field class="input-item" v-model="test" label="填充:" />
      <van-field class="input-item" v-model="test" label="填充:" />
      <van-field class="input-item" v-model="test" label="填充:" />
      <van-field class="input-item" v-model="test" label="填充:" />
      <van-field class="input-item" v-model="test" label="填充:" />
      <van-field class="input-item" v-model="test" label="填充:" />
      <van-field class="input-item" v-model="test" label="填充:" />

      <van-field name="uploader" label="图片上传">
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
import axios from 'axios'
export default {
  name: "home",
  components: {},
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
       async submit() {
      await axios({
        method: "POST",
        url: "http://192.168.1.105:8080/little-project/wares/upload",
        params: {
          wname: this.wname,
          wprice: this.wprice,
          recommendation: this.recommendation,
          wevalate: this.wevalate,
          wtype: this.wtype,
          wvolume: this.wvolume,
          wsales: this.wsales,
        },
        data: this.imgFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res);
        this.$toast("上传成功");
        // this.$router.push("/home");
      });
    },
     afterRead(file) {
      file = file.file;
      this.imgFormData.append("photo", file);
    },
  },
  created() {},
  mounted() {},
  beforeMount() {},
};
</script>

<style lang="less" scoped>
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
</style>
