<template>
  <div id="productDetails">
    <nav-bar/>
    <el-row type="flex" justify="center">
      <el-col class="w">
<!--        搜索框和购物车-->
        <header-search/>
<!--        表头-->
        <el-header :height="47+'px'" style="border-bottom: 2px solid #ff3c3c;padding: 0;">
          <div class="nav_items act_red" style="display: flex;justify-content: space-between;width: 100%">
            <ul>
              <li><div style="background-color: #ff3c3c;color: #ffffff;width: 220px;line-height:45px;text-align: center;">全部商品分类</div></li>
              <li><a class="f_red" href="javascript:;">首页</a></li>
              <li><a class="f_red" href="javascript:;">自营超市</a></li>
              <li><a href="javascript:;">1号团</a></li>
              <li><a href="javascript:;">1号超市</a></li>
              <li><a href="javascript:;">女装</a></li>
              <li><a href="javascript:;">美妆</a></li>
              <li><a href="javascript:;">1号海购</a></li>
              <li><a href="javascript:;">团购</a></li>
            </ul>
            <div class="hidden-md-and-down"><a href="#"><img style="margin-top: 10%" src="/images/phone.png" alt="phone"></a></div>
          </div>
        </el-header>
<!--        商品选择-->
        <div>
          <!--        面包屑-->
          <el-breadcrumb class="el-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">所有团购</el-breadcrumb-item>
            <el-breadcrumb-item>包饰</el-breadcrumb-item>
            <el-breadcrumb-item>珠韵首饰&nbsp;<i style="color: red">冰韵 天然白色正园S925银扣珍珠项链</i></el-breadcrumb-item>
          </el-breadcrumb>

          <el-row type="flex" justify="space-between">
            <el-col class="pick" :span="18">
<!--              商品展示-->
              <div class="photo">
                <div class="show">
                  <img :src=pro.img alt="big">
                </div>
                <div class="container">
                  <ul>
                    <li class="last"></li>
                    <li><img src="/images/ps1.jpg" alt=""></li>
                    <li><img src="/images/ps2.jpg" alt=""></li>
                    <li><img src="/images/ps3.jpg" alt=""></li>
                    <li><img src="/images/ps4.jpg" alt=""></li>
                    <li class="next"></li>
                  </ul>
                </div>
              </div>
<!--                商品选择-->
              <div class="goodsInfo">
                <div class="title">
                  <h3>{{ pro.title }}</h3>
                  <span>全国包邮 送妈妈，正圆级淡水珍珠，白色S925银链扣，使用方便，尊贵礼物。</span>
                </div>
                <br><br>
                <div class="price">
                  <p>本店价格：<span>￥{{ pro.price }}</span></p>
                  <p>参考价：<i>￥3886</i></p>
                </div>
                <div class="size">
                  <div>
                    <ul>
                      <li><i>尺码：</i></li>
                      <li><a class="checked" href="#">43cm</a></li>
                      <li><a href="#">45cm</a></li>
                      <li><a href="#">50cm</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li><i>颜色选择：</i></li>
                      <li><a class="checked" href="#">43cm</a></li>
                      <li><a href="#">45cm</a></li>
                      <li><a href="#">50cm</a></li>
                    </ul>
                  </div>
                  <div class="more">
                    <ul>
                      <li class="share"></li>
                      <li>分享</li>
                      <li class="care"></li>
                      <li>关注商品</li>
                    </ul>
                  </div>

                  <div class="join" style="display: flex;">
                    <table>
                      <tr>
                        <td class="num" rowspan="2">
                          <input type="number" value="1"/>
                        </td>
                        <td class="add"></td>
                      </tr>
                      <tr>
                        <td class="sub"></td>
                      </tr>
                    </table>
                    <div style="margin-left: 20px">
                      <a href="#"><img src="/images/j_car.png" alt="car"></a>
                    </div>
                  </div>

                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="right_card">
                <div>
                  <img style="width: 188px" src="/images/sbrand.jpg" alt="brand">
                </div>
                <div class="brand act_red" style="text-align: center;">
                  <a href="#" style="color: #555555;">进入品牌专区</a>
                </div>
              </div>
            </el-col>
          </el-row>

        </div>
        <common-content/>
        <end-footer/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import headerSearch from "@/components/headerSearch";
import commonContent from "@/components/commonContent";
import endFooter from "@/components/endFooter";
import axios from "axios";
export default {
  name: "productDetails",
  components: {
    NavBar,
    headerSearch,
    commonContent,
    endFooter,
  },
  data() {
    return {
      pro:{}
    }
  },
  mounted() {
    let pid = this.$route.query.pid;
    axios.get("/json/product.json").then(g=>{
      // console.log(666)
      for(let pro of g.data){
        if(pro.pid == Number(pid)){
          this.pro = pro;
        }
      }
      // console.log(this.pro)
    });
  }
}
</script>

<style scoped>
/*activate-class*/
.nav_items ul li {
  float: left;
  font-weight: bold;
  overflow: hidden;
}
.nav_items ul li a {
  display: block;
  height: 45px;
  line-height: 45px;
  color: #555555;
  font-size: 16px;
  padding: 0 20px;
}
.el-breadcrumb {
  line-height: 50px;
  font-size: 12px;
  color: #555555;
}
.pick {
  height: 495px;
  display: flex;
}
.photo {
  float: left;
}
.photo .show img {
  width: 390px;
  height: 390px;
  border: 1px solid #eaeaea;
}
.photo .container ul {
  margin-top: 8px;
  height: 90px;
  width: 390px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.photo .container ul li {
  /*float: left;*/
  width: 90px;
}
.photo .container ul li img {
  width: 80px;
  height: 80px;
  padding: 2px;
  border: 1px solid #eaeaea;
}
.photo .container .last {
  background: url("/public/images/r_left.png") no-repeat center;
  width: 15px;
  height: 90px;
  margin-right: 3px;
}
.photo .container .next {
  background: url("/public/images/r_right.png") no-repeat center;
  width: 15px;
  height: 90px;
  margin-left: 3px;
}
.goodsInfo {
  margin-left: 20px;
  float: left;
}
.goodsInfo .title h3 {
  color: #3e3e3e;
}
.goodsInfo .title span {
  color: #888888;
  font-size: 14px;
}
.goodsInfo .price p {
  font-size: 12px;
  color: #555555;
  margin-top: 10px;
}
i {
  font-style: normal;
  font-size: 12px;
}
.goodsInfo .price span {
  font-size: 18px;
  color: #ff3c3c;
}
.goodsInfo .size {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.goodsInfo .size ul li {
  display: inline-block;
  line-height: 30px;
  text-align: center;
}
.goodsInfo .size ul li a {
  width: 60px;
  height: 30px;
  display: block;
  border: 1px solid #cccccc;
  font-size: 14px;
  color: #555555;
  margin: 5px 6px;
}
.checked {
  background: url("/public/images/ch.png") no-repeat bottom right;
  border: 2px solid #ff3c3c!important;
}
.more ul li {
  font-size: 12px;
  color: #555555;
  line-height: 20px;
  margin-top: 40px;
}
.share {
  width: 14px;
  line-height: 20px;
  height: 14px;
  margin-right: 5px;
  background: url("/public/images/sh.png") no-repeat center;
}
.care {
  width: 18px;
  height: 15px;
  line-height: 20px;
  margin-right: 5px;
  background: url("/public/images/care.png") no-repeat center;
  margin-left: 50px;
}
.join table input {
  width: 75px;
  height: 45px;
  border: 0;
  text-align: center;
  font-size: 18px;
}
.join table td {
  border: 1px solid #eaeaea;
}
.add {
  width: 21px;
  height: 21px;
  background: url("/public/images/jia.gif") no-repeat;
}
.sub {
  width: 21px;
  height: 21px;
  background: url("/public/images/jian.gif") no-repeat;
}
table{
  border-collapse:collapse;
  border-spacing:0;
}
th,td{
  padding:0;
}
.right_card {
  border: 1px solid #eaeaea;
  width: 188px;
  height: 188px;
  float: right;
}
.brand {
  height: 55px;
  line-height: 55px;
  overflow: hidden;
  background-color: #f6f6f6;
}
</style>