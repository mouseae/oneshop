<template>
  <div>
    <nav-bar/>
    <!--        表头-->
    <div class="w">
      <header-search @search="search"/>
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
      <!--        面包屑-->
      <el-breadcrumb class="el-breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">全部</el-breadcrumb-item>
        <el-breadcrumb-item>珠宝饰品</el-breadcrumb-item>
        <el-breadcrumb-item>珍珠项链</el-breadcrumb-item>
        <el-breadcrumb-item class="item">品牌：&nbsp;<i>珠韵首饰</i></el-breadcrumb-item>
      </el-breadcrumb>
<!--      选择框-->
      <div>
        <table class="choice">
          <tr>
            <td>&nbsp; 品牌：</td>
            <td>
              <a href="#" class="now">珠韵首饰/ZHUYUN JEWELLERY</a>
              <a href="#">施华洛世奇/Swarovski</a>
              <a href="#">海瞳</a>
              <a href="#">周大福/CHOW TAI FOOK</a>
              <a href="#">京润珍珠</a>
              <a href="#">佰色传情 /BRI.R</a>
              <a href="#">迈姿/Maizi</a>
              <a href="#">Ginasy Jewelry</a>
              <a href="#">心鑫圆</a>
              <a href="#">银斯妮/yin si ni silver</a>
              <a href="#">迈姿/Maizi</a>
              <a href="#">Ginasy Jewelry</a>
              <a href="#">蛟蓓</a>
              <a href="#">芭比/Barbie</a>
              <a href="#">珍福祥</a>
              <a href="#">珍福祥</a>
            </td>
          </tr>
          <tr>
            <td>&nbsp; 价格：</td>
            <td>
              <a href="#">0-199</a>
              <a href="#" class="now">200-399</a>
              <a href="#">400-599</a>
              <a href="#">600-899</a>
              <a href="#">900-1299</a>
              <a href="#">1300-1399</a>
              <a href="#">1400以上</a>
            </td>
          </tr>
          <tr>
            <td>珍珠颜色：</td>
            <td>
              <a href="#">混彩</a>
              <a href="#">黑色系</a>
              <a href="#">粉色系</a>
              <a href="#">白色系</a>
              <a href="#">金色系</a>
              <a href="#">紫色系</a>
            </td>
          </tr>
          <tr>
            <td>珍珠分类：</td>
            <td>
              <a href="#">天然海水珍珠</a>
              <a href="#">养殖海水珍珠</a>
              <a href="#">养殖淡水珍珠</a>
              <a href="#">天然淡水珍珠</a>
            </td>
          </tr>
        </table>
      </div>
      <div class="below">
        <div class="l_history">
          <div class="his_t">
            <span class="fl">浏览历史</span>
            <span class="fr"><a href="#">清空</a></span>
          </div>
          <ul>
            <li>
              <div class="img"><a href="#"><img src="/images/his_1.jpg" /></a></div>
              <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
              <div class="price">
                <span>￥368.00</span>
              </div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="/images/his_2.jpg" /></a></div>
              <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
              <div class="price">
                <span>￥768.00</span>
              </div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="/images/his_3.jpg" /></a></div>
              <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
              <div class="price">
                <span>￥680.00</span>
              </div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="/images/his_4.jpg" /></a></div>
              <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
              <div class="price">
                <span>￥368.00</span>
              </div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="/images/his_5.jpg" /></a></div>
              <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
              <div class="price">
                <span>￥368.00</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div class="filter">
            <div class="l_span">
              <span>默认</span>
              <span>销量</span>
              <span>价格</span>
              <span>新品</span>
            </div>
            <div>
              共发现120件
            </div>
          </div>
        </div>
<!--        商品-->
        <div class="main_list">
          <div class="card" v-for="(g,index) in array" :key="index">
            <a href="#"><img :src=g.img style="width:210px;height:185px" alt=""/></a>
            <div class="price"><span>￥{{ g.price }}</span></div>
            <a class="title" href="#">{{ g.title }}</a>
            <div class="carbg">
              <a href="#" class="like">收藏</a>
              <a href="#" class="add">加入购物车</a>
            </div>
          </div>
        </div>
      </div>
      <div class="pages">
        <a href="#" class="p_pre">上一页</a><a href="#" class="cur">1</a><a href="#">2</a><a
          href="#">3</a>...<a href="#">20</a><a href="#" class="p_pre">下一页</a>
      </div>
      <end-footer/>
    </div>

  </div>
</template>

<script>
  import navBar from "@/components/navBar";
  import headerSearch from "@/components/headerSearch";
  import endFooter from "@/components/endFooter";
  import axios from "axios";

  export default {
    name: "goodsSearch",
    components: {
      navBar,
      headerSearch,
      endFooter
    },
    data() {
      return {
        array:[]
      }
    },
    methods:{

      search(sech) {
        console.log(sech)
        if (sech !== "") {
          axios.get("/json/product.json").then(a=>{
            let data = [];
            for(let pro of a.data){
              if(pro.title.includes(sech)){
                data.push(pro)
              }
            }
            this.array = data;
          });
        }else {
          axios.get("/json/goodsSearch.json").then(a=>{
            this.array = a.data;
          });
        }
      }
    },
    mounted() {
      console.log(this.$route.query.data)
      let sech = this.$route.query.sech
      console.log("sech,"+sech)
      if (sech == undefined) {

        axios.get("/json/goodsSearch.json").then(a=>{
          this.array = a.data;
        });
      }else {
        axios.get("/json/product.json").then(a=>{
          let data = [];
          for(let pro of a.data){
            if(pro.title.includes(sech)){
              data.push(pro)
            }
          }
          this.array = data;
        });
      }
    }
  }
</script>

<style scoped>
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
    line-height: 20px;
    margin: 10px 0;
    font-size: 12px;
    color: #555555;
  }
  .el-breadcrumb .item {
    border: 1px dashed #ff4e00;
    padding: 0 5px;
  }
  .el-breadcrumb .item i {
    color: #ff4e00;
  }
  table.choice {
    border-collapse: collapse;
    border: 2px solid #cccccc;
    width:100%;
    margin:0 auto;
  }
  table.choice tr{
    vertical-align: top;
  }
  table.choice tr td {
    font-size: 12px;
    line-height: 25px;
    border-bottom: 1px solid #cccccc;
    padding: 10px;
  }
  table.choice tr td:last-child {
    color: #888888;
  }
  table.choice tr td:last-child a {
    display: inline-block;
    margin: 0 11px;
    color: #888888;
  }
  table.choice tr td:first-child{
    width: 70px;
  }
  table.choice tr td:last-child a:hover, table.choice tr td:last-child a.now {
    color: #ff4e00;
  }
  .l_history {
    width: 209px;
    overflow: hidden;
    float: left;
    border: 1px solid #eaeaea;
    display: inline-block;
  }
  .his_t {
    height: 38px;
    line-height: 38px;
    overflow: hidden;
    background: url("/public/images/h_t.gif") no-repeat 10px center;
    color: #ff4e00;
    font-size: 16px;
    padding-left: 22px;
    padding-right: 10px;
    border-bottom: 1px solid #eaeaea;
  }
  .his_t a {
    color: #888888;
    font-size: 14px;
  }
  .l_history ul li {
    height: 240px;
    overflow: hidden;
    border-bottom: 1px solid #eaeaea;
  }
  .l_history ul li .img {
    width: 185px;
    height: 162px;
    overflow: hidden;
    margin-top: 10px;
  }
  .l_history ul li .name {
    height: 25px;
    line-height: 25px;
    overflow: hidden;
    font-size: 14px;
    text-align: center;
    margin-top: 5px;
  }
  .l_history ul li .price {
    height: 25px;
    line-height: 25px;
    overflow: hidden;
    color: #999999;
    text-align: center;
    text-transform: uppercase;
  }
  .l_history ul li .price {
    color: #B00504;
    font-size: 18px;
  }
  .below {
    margin-top: 15px;
  }
  .below .filter {
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    border-bottom: 1px solid #eaeaea;
  }
  .below .filter .l_span span {
    padding: 3px 30px;
    border: 1px solid #cccccc;

  }
  .main_list {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
  .main_list .card {
    flex: 1;
    height: 315px;
    width: 230px;
    text-align: center;
    margin-top: 10px;
  }
  .main_list .card:hover {
    box-shadow: 0 0 5px #e0e0e0;
  }
  .main_list .card a {
    font-size: 14px;
    color: #888888;
  }
  .main_list .card .price {
    color: #ff4e00;
    font-size: 18px;
    margin: 8px 0;
  }
  .main_list .card .title {
    font-size: 14px;
    color: #555555;
  }
  .main_list .card>a:hover {
    color: #ff4e00;
  }
  .main_list .card .carbg {
    margin-top: 10px;
  }
  .main_list .card .carbg>a {
    padding: 4px 8px;
    border: 1px solid #cccccc;
    line-height: 28px;
  }
  .main_list .card .carbg .like::before {
    content: url("/public/images/heart.png");
    margin-right: 5px;
  }
  .main_list .card .carbg .add::before {
    content: url("/public/images/cars.png");
    margin: 3px 10px 0 10px;
  }
  .main_list .card .carbg .like:hover::before {
    content: url("/public/images/heart.png");
  }
  .pages {
    overflow: hidden;
    color: #888888;
    padding: 20px 10px;
    text-align: right;
    font-size: 16px;
    margin-top: 20px;
  }
  .pages span{
    height: 36px;
    line-height: 36px;
    display: inline-block;
    overflow: hidden;

  }

  .pages a {
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    color: #666666;
    font-size: 16px;
    text-align: center;
    display: inline-block;
    padding: 0 12px;
    margin: 0 4px;
    border: 1px solid #cccccc;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }

  .pages a:hover, .pages a.cur {
    color: #FFF;
    background-color: #ff4e00;
    border: 1px solid #ff4e00;
  }

  .pages a.p_pre:hover {
    background-color: #eaeaea;
    color: #555555;
    border: 1px solid #cccccc;
  }
</style>