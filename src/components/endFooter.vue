<template>
  <footer class="footer">
<!--    服务模块-->
    <el-row class="mod_server" type="flex" justify="center">
      <el-col :span="6">
        <div>
          <img src="/images/b1.png" alt="server">
        </div>
        <div>
          <p>正品保障</p>
          <span>正品行货 放心购买</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <img src="/images/b2.png" alt="server">
        </div>
        <div>
          <p>满38包邮</p>
          <span>满38包邮 免运费</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <img src="/images/b3.png" alt="server">
        </div>
        <div>
          <p>天天低价</p>
          <span>天天低价 畅选无忧</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <img src="/images/b4.png" alt="server">
        </div>
        <div>
          <p>准时送达</p>
          <span>收货时间由你做主</span>
        </div>
      </el-col>
    </el-row>
<!--    帮助模块-->
    <el-row class="mod_help act_red" type="flex" justify="center" style="padding-top: 0">
      <el-col :span="3">
        <dl>
          <dt>新手上路</dt>
          <dd><a href="#">售后服务</a></dd>
          <dd><a href="#">购物流程</a></dd>
          <dd><a href="#">订购方式</a></dd>
          <dd><a href="#">隐私声明</a></dd>
          <dd><a href="#">推荐分享说明</a></dd>
        </dl>
      </el-col>
      <el-col :span="3">
        <dl>
          <dt>配送与支付</dt>
          <dd><a href="#">货到付款区域</a></dd>
          <dd><a href="#">配送支付查询</a></dd>
          <dd><a href="#">支付方式说明</a></dd>
        </dl>
      </el-col>
      <el-col :span="3">
        <dl>
          <dt>会员中心</dt>
          <dd><a href="#">资金管理</a></dd>
          <dd><a href="#">我的收藏</a></dd>
          <dd><a href="#">我的订单</a></dd>
        </dl>
      </el-col>
      <el-col :span="3">
        <dl>
          <dt>服务保证</dt>
          <dd><a href="#">退换货原则</a></dd>
          <dd><a href="#">售后服务保证</a></dd>
          <dd><a href="#">产品质量保证</a></dd>
        </dl>
      </el-col>
      <el-col :span="3">
        <dl>
          <dt>联系我们</dt>
          <dd><a href="#">网站故障报告</a></dd>
          <dd><a href="#">购物咨询</a></dd>
          <dd><a href="#">投诉与建议</a></dd>
        </dl>
      </el-col>
      <el-col class="con_our" :span="6">
        <div class="tel_con" style="height: 60px">
          <a class="xl" href="#">新浪微博</a>
          <a class="tx" href="#">腾讯微博</a>
          <p>
            服务热线：<br>
            <span class="f_red">400-123-4567</span>
          </p>
        </div>
        <div class="er_con">
          <img src="/images/er.gif" alt="er">
        </div>
        <img style="margin: 10px 0 0 20px" src="/images/ss.png" alt="ss">
      </el-col>
    </el-row>

    <el-row class="mod_copyright" type="flex" justify="center">
      <el-col>
        备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com Copyright&copy; 1号店网上超市 2007-2016，All Rights Reserved. 复制必究 , Technical Support: Dgg Group
        <div>
          <img src="/images/b_1.gif">
          <img src="/images/b_2.gif">
          <img src="/images/b_3.gif">
          <img src="/images/b_4.gif">
          <img src="/images/b_5.gif">
          <img src="/images/b_6.gif">
        </div>
      </el-col>
    </el-row>

  </footer>
</template>

<script>
export default {
  name: "endFooter"
}
</script>

<style scoped>
a {
  color: #888888;
}
.footer .mod_server {
  margin: 50px 10px;
}
.footer .mod_server div {
  text-align: center;
}
.footer .mod_server div:first-child {
  margin-bottom: 5px;
}
.footer .mod_server div:last-child span {
  color: #888888;
  font-size: 14px;
}
.footer .mod_help {
  border-bottom: 1px solid gray;
  padding: 30px 10px;
}
.footer .mod_help dl dd {
  margin-top: 10px;
  font-size: 12px;
}
.footer .mod_help dl dt {
  font-size: 16px;
  margin-bottom: 20px;
}
.con_our div {
  float: right;
}
.con_our .tel_con {
  margin-left: 15px;
}
.con_our .tel_con a {
  height: 30px;
  line-height: 30px;
  display: flex;
  vertical-align: middle;
}
.con_our .tel_con .xl::before {
  content: url("/public/images/b_sh_1.png");
  margin-right: 5px;
}
.con_our .tel_con .tx::before {
  content: url("/public/images/b_sh_2.png");
  margin-right: 5px;
}
.con_our .tel_con p:last-child {
  margin-top: 40px;
  font-size: 12px;
}
.con_our .tel_con p:last-child span {
  color: #ff3c3c;
  font-size: 18px;
}
.mod_copyright {
  font-size: 12px;
  padding: 20px;
  text-align: center;
}
.mod_copyright div img {
  margin: 10px;
  height: 33px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
}
</style>