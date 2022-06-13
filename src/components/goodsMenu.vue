<template>

  <el-container style="margin-top: 20px">
    <el-aside width="220px">
      <div class="dropdown">
        <div class="dt">全部商品分类</div>
        <div class="dd">
          <ul style="display: flex;flex-direction: column">
            <li><div><img src="/images/nav1.png" alt="icon"></div><span class="ft">进口食品、生鲜</span></li>
            <li><div><img src="/images/nav2.png" alt="icon"></div><span class="ft">食品、饮料、酒</span></li>
            <li><div><img src="/images/nav3.png" alt="icon"></div><span class="ft">母婴、玩具、童装</span></li>
            <li><div><img src="/images/nav4.png" alt="icon"></div><span class="ft">家居、家庭清洁、纸巾</span></li>
            <li><div><img src="/images/nav5.png" alt="icon"></div><span class="ft">美妆、个人护理、洗护</span></li>
            <li><div><img src="/images/nav6.png" alt="icon"></div><span class="ft">女装、内衣、中老年</span></li>
            <li><div><img src="/images/nav7.png" alt="icon"></div><span class="ft">鞋靴、箱包、腕表配饰</span></li>
            <li><div><img src="/images/nav8.png" alt="icon"></div><span class="ft">男装、运动</span></li>
            <li><div><img src="/images/nav9.png" alt="icon"></div><span class="ft">手机、小家电、电脑</span></li>
            <li><div><img src="/images/nav10.png" alt="icon"></div><span class="ft">礼品、充值</span></li>
          </ul>
        </div>
      </div>
    </el-aside>
    <el-container>
      <el-header :height="47+'px'" style="border-bottom: 2px solid #ff3c3c">
        <div class="nav_items act_red" style="display: flex;justify-content: space-between;width: 100%">
          <ul>
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
      <el-main style="display: flex;padding: 0;justify-content: space-between;">
        <div style="width: 700px;">
          <el-carousel :interval="5000" :height="400+'px'" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item" style="height: 100%">
              <h3></h3>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div id="rightNews" class="hidden-md-and-down" style="width: 210px">
          <div class="rightTitle redAct fontGray" id="newsTitle">
            <h3 style="display: inline">快讯</h3>
            <a style="float: right" href="javascript:;">更多></a>
          </div>
          <ul id="msg" class="fontGray">
            <li><span>【特惠】</span><a href="#">掬一轮明月 表无尽惦念</a></li>
            <li><span>【公告】</span><a href="#">好奇金装成长裤新品上市</a></li>
            <li><span>【特惠】</span><a href="#">大牌闪购·抢！</a></li>
            <li><span>【公告】</span><a href="#">发福利 买车就抢千元油卡</a></li>
            <li><span>【公告】</span><a href="#">家电低至五折</a></li>
          </ul>
          <div id="wallet">
            <h3 class="rightTitle">1号钱包</h3>
            <div class="fontGray">
              <a class="fontGray" style="padding: 0 5%">收益日结，收益赚High！</a>
              <img style="width: 90%;padding: 3px 5%" src="/images/oneAD.jpg" alt="oneAD">
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>

<!--  <el-container id="main">-->
<!--    <div style="margin: 0 auto">-->
<!--      <el-container>-->
<!--        <el-aside width="220px">-->
<!--          <ul class="leftNav">-->
<!--            <li style="background-color: #ff3c3c;"><span style="font-size: 16px;color: #fff;padding-left: 30px;">全部商品分类</span></li>-->
<!--            <li><div class="navIcon"><img src="../assets/images/nav1.png" alt="icon"></div><span class="ft">进口食品、生鲜</span></li>-->
<!--            <li><div class="navIcon"><img src="../assets/images/nav2.png" alt="icon"></div><span class="ft">食品、饮料、酒</span></li>-->
<!--            <li><div class="navIcon"><img src="../assets/images/nav3.png" alt="icon"></div><span class="ft">母婴、玩具、童装</span></li>-->
<!--            <li><div class="navIcon"><img src="../assets/images/nav4.png" alt="icon"></div><span class="ft">家居、家庭清洁、纸巾</span></li>-->
<!--            <li><div class="navIcon"><img src="../assets/images/nav5.png" alt="icon"></div><span class="ft">美妆、个人护理、洗护</span></li>-->
<!--            <li><div class="navIcon"><img src="../assets/images/nav6.png" alt="icon"></div><span class="ft">女装、内衣、中老年</span></li>-->
<!--            <li><div class="navIcon"><img src="../assets/images/nav7.png" alt="icon"></div><span class="ft">鞋靴、箱包、腕表配饰</span></li>-->
<!--            <li><div class="navIcon"><img src="../assets/images/nav8.png" alt="icon"></div><span class="ft">男装、运动</span></li>-->
<!--            <li><div class="navIcon"><img src="../assets/images/nav9.png" alt="icon"></div><span class="ft">手机、小家电、电脑</span></li>-->
<!--            <li><div class="navIcon"><img src="../assets/images/nav10.png" alt="icon"></div><span class="ft">礼品、充值</span></li>-->
<!--          </ul>-->
<!--        </el-aside>-->
<!--        <el-container>-->
<!--          <el-header style="border-bottom: 2px solid red;height: 40px">-->
<!--            <div>-->
<!--              <ul id="topMenu" class="redAct">-->
<!--                <li><a class="fontRed" href="javascript:;">首页</a></li>-->
<!--                <li><a class="fontRed" href="javascript:;">自营超市</a></li>-->
<!--                <li><a href="javascript:;">1号团</a></li>-->
<!--                <li><a href="javascript:;">1号超市</a></li>-->
<!--                <li><a href="javascript:;">女装</a></li>-->
<!--                <li><a href="javascript:;">美妆</a></li>-->
<!--                <li><a href="javascript:;">1号海购</a></li>-->
<!--                <li><a href="javascript:;">团购</a></li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <a href="#" style="float: right"><img src="../assets/images/phone.png" alt="phone"></a>-->
<!--          </el-header>-->

<!--          <el-main style="padding: 0;">-->
<!--            &lt;!&ndash; 走马灯 &ndash;&gt;-->
<!--            <div style="width: 700px; float: left">-->
<!--              <el-carousel :interval="5000" :height="400+'px'" arrow="always">-->
<!--                <el-carousel-item v-for="item in 4" :key="item" style="height: 100%">-->
<!--                  <h3></h3>-->
<!--                </el-carousel-item>-->
<!--              </el-carousel>-->
<!--            </div>-->

<!--            &lt;!&ndash; 右侧快讯 &ndash;&gt;-->
<!--            <div id="rightNews" style="float: right;width: 210px">-->
<!--              <div class="rightTitle redAct" id="newsTitle">-->
<!--                <h3 style="display: inline">快讯</h3>-->
<!--                <a class="fontGray" style="float: right" href="javascript:;">更多></a>-->
<!--              </div>-->
<!--              <ul id="msg">-->
<!--                <li><span>【特惠】</span><a class="fontGray" href="#">掬一轮明月 表无尽惦念</a></li>-->
<!--                <li><span>【公告】</span><a class="fontGray" href="#">好奇金装成长裤新品上市</a></li>-->
<!--                <li><span>【特惠】</span><a class="fontGray" href="#">大牌闪购·抢！</a></li>-->
<!--                <li><span>【公告】</span><a class="fontGray" href="#">发福利 买车就抢千元油卡</a></li>-->
<!--                <li><span>【公告】</span><a class="fontGray" href="#">家电低至五折</a></li>-->
<!--              </ul>-->
<!--              <div id="wallet">-->
<!--                <h3 class="rightTitle">1号钱包</h3>-->
<!--                <div>-->
<!--                  <span class="fontGray" style="padding: 0 5%">收益日结，收益赚High！</span>-->
<!--                  <img style="width: 90%;padding: 3px 5%" src="../assets/images/oneAD.jpg" alt="oneAD">-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </el-main>-->
<!--        </el-container>-->
<!--      </el-container>-->
<!--    </div>-->

<!--  </el-container>-->
</template>

<script>
export default {
  name: "goodsMenu"
}
</script>

<style scoped>
.nav .dropdown {
  float: left;
  width: 220px;
  height: 45px;
  background-color: #ff3c3c;
}

.dropdown .dt {
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;
  line-height: 45px;
  font-size: 16px;
  border-bottom: 2px solid #ff3c3c;
  background-color: #ff3c3c;
}
.dropdown .dd {
  width: 220px;
  background-color: #b01d1d;
  height: 400px;
}
.dropdown .dd ul li {
  height: 40px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  background: url("/public/images/n_arrow.gif") no-repeat 204px center;
}
.dropdown .dd ul li:hover {
  background-color: #fff;
}
.dropdown .dd ul li div {
  width: 50px;
  text-align: center;
  float: left;
}
.dropdown .dd ul li a {
  font-size: 14px;
  color: #fff;
}
.dropdown .dd ul li span {
  color: #fff;
  font-size: 14px;
}
.dropdown .dd ul li:hover span {
  color: #b01d1d;
}
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


/* 走马灯 */
.el-carousel__item:nth-child(2n+1) {
  background: no-repeat url("/public/images/ban1.jpg");
  background-size: cover;
}

.el-carousel__item:nth-child(2n) {
  background: no-repeat url("/public/images/ban1.jpg");
  background-size: cover;
}

#rightNews {
  border: 1px solid #d9d9d9;
  height: 400px;
  width: 210px;
  box-sizing: border-box;
}

.fontGray a {
  color: #888888;
  font-size: 12px;
  padding-left: 50px;
  white-space: nowrap;
  overflow: hidden;
}
#rightNews #msg {
  height: 150px;
  font-size: 12px;
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
}
#rightNews #msg li {
  height: 30px;
  list-style: none;
  display: flex;
}
#rightNews #msg span {
  font-weight: bold;
  white-space: nowrap;
  display: block;
  width: 4px;
}

.rightTitle {
  line-height: 40px;
  border-bottom: 1px solid #d9d9d9;
  padding: 0 10px;
}


</style>