<template>
  <div>
    <nav-banner></nav-banner>
    <div id="main">
      <table>
        <thead><th colspan="2">1号店注册</th></thead>
        <tbody>
        <tr>
          <td colspan="2"><input v-model="username" type="text" placeholder="手机号"></td>
        </tr>
        <tr>
          <td colspan="1"><input type="text" placeholder="手机号"></td>
          <td colspan="1" style="float: right;"><button class="btn1">获取验证码</button></td>
        </tr>
        <tr>
          <td colspan="2"><input v-model="psssword1" type="text" placeholder="设置密码"></td>
        </tr>
        <tr>
          <td colspan="2"><input v-model="psssword2" type="text" placeholder="确认密码"></td>
        </tr>
        <tr>
          <td colspan="2"><span>点击注册，表示您同意1号店</span><a href="javascript:;">《服务协议》</a></td>
        </tr>
        <tr>
          <td colspan="2"><button @click="submit" class="btn2">同意协定并注册</button></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="footer">
      <p>沪ICP备13044278号 | 合字B1.B2-20130004 | 营业执照</p>
      <p>Copyright&copy;1号店网上超市2007-1016, All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
import NavBanner from "@/components/navBanner";
export default {
  name: "accountRegistration",
  components: {NavBanner},
  data() {
    return {
      username:"",
      psssword1:"",
      psssword2:"",
    }
  },
  methods:{
    submit() {
      if (this.username.trim() === "" && this.psssword1.trim() === "" && this.psssword2.trim() === "") {
        alert("用户名密码不能为空");
        return;
      }
      if (this.psssword1.trim() !== this.psssword2.trim()){
        alert("密码不一致");
        return;
      }
      if (
          !this.username.match(/^(\w{1,})+@([a-zA-Z]{2,3})+((\.[a-zA-Z]{2,3}))$/)
          &&
          !this.psssword1.match(/^\w{6,}$/)
      ) {
        this.$notify({
          message: "用户名格式错误"
        });
        return;
      }
      let users = sessionStorage.users;
      if (users) {
        users = JSON.parse(users);
      } else {
        users = [];
      }
      users.push({
        username: this.username,
        password: this.psssword1
      });
      sessionStorage.users = JSON.stringify(users);

      this.$notify({
        type: "success",
        message: "恭喜您 注册成功！"
      });
      setTimeout(() => {
        this.$router.push({path: "/login"});
      }, 2000);
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
#main table {
  width: 350px;
  margin: 0 auto;
}
#main table thead th {
  font-size: xx-large;
  padding: 20px 0 15px 0;
}
#main table input {
  width: 100%;
  height: 50px;
  border: 1px solid #dedede;
  padding-left: 20px;
  box-sizing: border-box;
  font-size: medium;
  margin-bottom: 10px;
}
#main table tbody td {
  color: #666666;
}
#main table .btn1 {
  height: 50px;
  width: 100px;
  background-color: #57565f;
  color: white;
  border: none;
  font-size: medium;
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
#footer {
  margin-top: 30px;
  text-align: center;
  color: #333333;
}
</style>