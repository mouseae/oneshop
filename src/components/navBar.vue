<template>
  <section class="shortcut">
    <div class="fl">
      <span>送货至：四川</span>
    </div>
    <div class="fr">
      <ul>
        <li class="act_red">你好&nbsp;<router-link to="/login"><span>{{ username }}</span>&nbsp;</router-link></li>
        <li><router-link v-show="isSuc" class="f_red" to="/registration">免费注册</router-link></li>
        <li class="v_line"></li>
        <li>我的订单</li>
        <li class="v_line"></li>
        <li>收藏夹&nbsp;</li>
        <li class="drop"></li>
        <li>客户服务&nbsp;</li>
        <li class="drop"></li>
        <li>网站导航&nbsp;</li>
        <li class="drop"></li>
        <li class="v_line"></li>
        <li>关于我们&nbsp;&nbsp;</li>
        <li class="wb"></li>
        <li class="wx"></li>
        <li>手机版</li>
        <li class="mobile"></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      username:"请登录",
      isSuc:true
    }
  },
  mounted() {
    if (sessionStorage.username) {
      // console.log(999)
      this.isSrc=false
      this.username = sessionStorage.username;
    }
  }

}
</script>

<style>
.shortcut {
  height: 35px;
  line-height: 35px;
  background-color: #f4f4f4;
  color: #555555;
  font-size: 12px;
}
.shortcut ul li {
  float: left;
}
.shortcut .fl span {
  margin-left: 50px;
}
.shortcut .fr ul {
  margin-right: 50px;
}
.wb, .wx, .mobile {
  width: 30px;
  height: 35px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
}
.wb {
  background-image: url("/public/images/sh1.png");
}
.wx {
  background-image: url("/public/images/sh2.png");
}
.mobile {
  background-image: url("/public/images/s_tel.png");
}
.drop {
  width: 10px;
  height: 35px;
  margin-right: 10px;
  background: url("/public/images/t_arrow.gif") no-repeat center;
}

</style>

