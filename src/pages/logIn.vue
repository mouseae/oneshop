<template>
  <div id="logIn">
    <nav-banner></nav-banner>
    <div id="main">
      <div class="left">
        <img src="/images/loadimg.jpg" alt="posters">
      </div>
      <div class="right">
        <table>
          <thead>
          <tr class="info-text">
            <td><h5>1号店用户注册</h5></td>
            <td><router-link to="/registration">账号注册</router-link></td>
          </tr>
          </thead>
          <tbody>
          <tr class="info-input">
            <td colspan="2"><input v-model="username" class="u" type="text" placeholder="邮箱/手机/用户名"></td>
          </tr>
          <tr class="info-input">
            <td colspan="2"><input v-model="password" class="p" type="text" placeholder="密码"></td>
          </tr>
          <tr class="info-text">
            <td colspan="1" style="color: #999999;"><input type="checkbox" name="" id="">&nbsp;自动登录</td>
            <td colspan="1"><a href="javascript:;" style="color: #999999;">忘记密码？</a></td>
          </tr>
          <tr>
            <td colspan="2"><button @click="login" class="btn2">登录</button></td>
          </tr>
          <tr>
            <td><p style="margin: 10px 0; font-size:small;color: #333333;">更多合作网站账号登录</p></td>
          </tr>
          <tr>
            <td id="link-icon">
              <img @mouseover="onOver(1)" @mouseleave="onLeave(1)" :src=imgSrc1 alt="qq">
              <img @mouseover="onOver(2)" @mouseleave="onLeave(2)" :src=imgSrc2 alt="wb">
              <img @mouseover="onOver(3)" @mouseleave="onLeave(3)" :src=imgSrc3 alt="zfb">
              <img @mouseover="onOver(4)" @mouseleave="onLeave(4)" :src=imgSrc4 alt="wx">
            </td>
            <td>
              <div>
                <span style="color: #999999; float: right;padding-right: 25px; background: no-repeat url('/images/turnb.png') 95% 50%;">更多合作网站</span>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import navBanner from "@/components/navBanner";

export default {
  name: "logIn",
  components:{navBanner},
  data() {
    return {
      imgSrc1: "images/l_1.png",
      imgSrc2: "images/l_2.png",
      imgSrc3: "images/l_3.png",
      imgSrc4: "images/l_4.png",
      username:"",
      password:"",
    }
  },

  methods:{
    // 鼠标上浮图片改变
    onOver(i){
      let src = "imgSrc" + i;
      this[`${src}`] = "/images/l_" + i + "_h.png";
    },
    onLeave(i){
      let src = "imgSrc" + i;
      this[`${src}`] = "/images/l_" + i + ".png";
    },
    // 登录方法
    login() {
      if (this.username.trim() === "") {
        this.$notify({
          message: "用户名不能为空"
        });
        return;
      }

      if (this.password.trim() === "") {
        this.$notify({
          message: "密码不能为空"
        });
        return;
      }

      let userInfo = sessionStorage.users;
      if (userInfo) {
        userInfo = JSON.parse(userInfo);
        let rel = false;
        userInfo.map(item => {
          if (
              this.username === item.username &&
              this.password === item.password
          ) {
            rel = true;
          }
        });

        if (rel) {
          sessionStorage.username = this.username;
          this.$router.push({
            path: "/oneShop"
          });
        } else {
          this.$notify({
            message: "账户或密码输入有误 请确认后再试！"
          });
        }
      }
    }

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration:none;
}
#main .left {
  padding: 20px 0 0 60px;
  width: 50%;
  float: left;
  box-sizing: border-box;
}
#main .left img {
  float: right;
}
#main .right {
  padding: 50px 30px 0 0;
  width: 50%;
  float: right;
  box-sizing: border-box;
}
#main .right table {
  width: 50%;
  margin: 0 auto;
}
#main table .info-input input {
  width: 100%;
  height: 50px;
  border: 1px solid #dedede;
  padding-left: 50px;
  box-sizing: border-box;
  font-size: medium;
  margin-bottom: 10px;
}
#main table .btn2 {
  margin-top: 10px;
  height: 50px;
  width: 100%;
  background-color: #ff3c3c;
  color: white;
  border: none;
  font-size: medium;
}
#main .right table .info-text td:first-child {
  float: left;
}
#main .right table .info-text td:last-child a {
  float: right;
}
#link-icon img {
  padding-right: 15px;
}
#main .right table .u {
  background: no-repeat url("/public/images/userHead.png") 4% 50%;
}
#main .right table .p {
  background: no-repeat url("/public/images/lock.png") 4% 40%;
}
img {
  animation: trans 2s linear infinite;
}
</style>