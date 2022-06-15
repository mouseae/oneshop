<template>
  <section style="margin-top: 20px">
    <el-row>
      <el-col>
        <div class="floorTitle">
          <div>
            <ul class="fl">
              <li>{{ index }}</li>
              <li>{{ title }}</li>
            </ul>
          </div>
          <div>
            <ul class="fr" v-for="(more,index) in mores" :key="index">
              <li>{{ more }}</li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>

        <div style="height: 441px;display: flex;justify-content: space-between;">
          <el-col class="hidden-md-and-down">
            <div>
              <div class="left_img">
                <img :src=left_img alt="baby">
              </div>
              <div :style="bg" class="txt_line">
                <a href="#">{{ text[0] }}</a>
                <a href="#">{{ text[1] }}</a>
                <a href="#">{{ text[2] }}</a>
                <a href="#">{{ text[3] }}</a>
                <a href="#">{{ text[4] }}</a>
                <a href="#">{{ text[5] }}</a>
                <a href="#">{{ text[6] }}</a>
                <a href="#">{{ text[7] }}</a>
                <a href="#">{{ text[8] }}</a>
              </div>
            </div>
          </el-col>

          <!-- todo 换成for循环 -->
          <el-col v-for="(mod,index) in g_mod" :key="index">
            <div class="mod_goods">
              <div>
                <router-link :to="{
                  path:'/product',
                  query:{
                    pid:mod.up.pid,
                  }
                }">
                  <a>{{ mod.up.title }}</a>
                  <p>￥{{ mod.up.price }}.00</p>
                  <img :src=mod.up.img>
                </router-link>
              </div>
              <div>
                <router-link :to="{
                  path:'/product',
                  query:{
                    pid:mod.down.pid,
                  }
                }">
                  <a>{{ mod.down.title }}</a>
                  <p>￥{{ mod.down.price}}.00</p>
                  <img :src=mod.down.img>
                </router-link>
              </div>
            </div>
          </el-col>



          <el-col class="hidden-md-and-down">
            <div class="right_img" style="flex: 6">
              <div>
                <a href="#">
                  <img :src=right_img[0]>
                </a>
              </div>
              <div>
                <a href="#">
                  <img :src=right_img[1]>
                </a>
              </div>
            </div>
          </el-col>

        </div>

    </el-row>


  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "exampleContent",
  data() {
    return {
      myFloor:{},
      index:"",
      title:"",
      left_img:"",
      bg:"",
      mores:[],
      text:[],
      g_mod:[],
      right_img:"",
    }
  },
  props:["floor"],
  mounted() {
    axios.get("/json/exampleContent.json").then(goods=>{
      this.myFloor = goods.data[this.floor];
      this.index=this.myFloor.index;
      this.title=this.myFloor.title;
      this.left_img=this.myFloor.left_img;
      this.bg="background-color:"+this.myFloor.bg;
      this.mores=this.myFloor.mores;
      this.text=this.myFloor.text;
      this.g_mod=this.myFloor.g_mod;
      this.right_img=this.myFloor.right_img
    })
  }

}
</script>

<style scoped>
.floorTitle {
  display: flex;
  justify-content: space-between;
  height: 39px;
  line-height: 39px;
  border-bottom: 2px solid #ff4e00;
}
.fl li, .fr li {
  float: left;
  margin-right: 20px;
}
.fl li:first-child {
  background: url("/public/images/floor.png") no-repeat center top;
  width: 33px;
  text-indent: 5px;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
}
.fl li:nth-child(2) {
  color: #ff4e00;
  font-size: 18px;
}
.fr li {
  font-size: 12px;
}
.txt_line {
  height: 155px;
  width: 211px;
  background-image: url("/public/images/s_txt.png");
  background-repeat: no-repeat;
  background-position-x: left;
  line-height: 30px;
  padding-top: 8px;
  box-sizing: border-box;
}

.txt_line a {
  display: inline-block;
  color: #555555;
  font-size: 12px;
  margin: 0 15px 0 15px;
}
.left_img img {
  height: 286px;
  width: 211px;
}
.mod_goods {
  flex: 7;
  text-align: center;
  margin: 0;
  padding: 0;
}
.mod_goods div{
  height: 100%;
  border-left: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}
.mod_goods div a a {
  display: block;
  font-size: 14px;
  color: #555555;
  padding-top: 15px;
  padding-bottom: 5px;
  box-sizing: border-box;
  overflow: hidden;
}
.mod_goods div a img {
  max-width: 185px;
  max-height: 155px;
  overflow: hidden;
}
.mod_goods div a p {
  font-size: 18px;
  color: #ff4e00;
}
.right_img div {
  text-align: center;
  flex: 8;
  height: 50%;
  width: 100%;
  overflow: hidden;
}
.right_img div img {
  object-fit:cover;
  overflow: hidden;
}


</style>