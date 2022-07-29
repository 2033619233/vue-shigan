<template>
  <div class="upload">
     <van-nav-bar
      title="首页"
    />
    <view class="cu-list grid col-5 no-border" >
				<view class="cu-item">
					<view class="cuIcon-cardboardfill text-red">
						<view class="cu-tag badge" ><block>99+</block></view>
					</view>
					<text>VR</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-recordfill text-orange">
						<view class="cu-tag badge"></view>
					</view>
					<text>录像</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-picfill text-yellow">
					</view>
					<text>图像</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-noticefill text-olive">
						<view class="cu-tag badge" ><block>22</block></view>
					</view>
					<text>通知</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-upstagefill text-cyan">
					</view>
					<text>排行榜</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-clothesfill text-blue">
					</view>
					<text>皮肤</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-discoverfill text-purple">
					</view>
					<text>发现</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-questionfill text-mauve">
					</view>
					<text>帮助</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-commandfill text-purple">
					</view>
					<text>问答</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-brandfill text-mauve">
					</view>
					<text>版权</text>
				</view>
			</view>
   <GoodList></GoodList>
  </div>
</template>

<script>
import axios from "axios";
import GoodList from '@/components/GoodList'
export default {
  name: "home",
  components: {
    GoodList
  },
  props: {},
  data() {
    return {
      name: "",
      shop: "",
      nation: "",
      number: "",
      address: "",
      radio: "",
      fileList: [],
      imgFormData: new FormData(),
    };
  },
  computed: {},
  watch: {},
  methods: {
    afterRead(file) {
      file = file.file;
      this.imgFormData.append("photo", file);
      console.log(this.imgFormData.getAll("file"));
    },
      async submit() {
      let res = await axios({
        method: "POST",
        url: "http://192.168.1.105:8080/little-project/auser/upload",
        data: 
           this.imgFormData
        ,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res);
      });
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
