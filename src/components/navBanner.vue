<template>
  <div id="navBanner">
    <div class="logo">
      <router-link to="/oneShop"><img src="images/logo.png" alt="logo"/></router-link>
    </div>
    <div class="welcome">
      <span>您好，欢迎光临1号店！</span><router-link to="/logIn">请登录</router-link>&nbsp;&nbsp;
      <select name="pets" id="pet-select">
        <option value="">帮助中心</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBanner"
}
</script>

<style scoped>
#navBanner {
  height: 82px;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
}
#navBanner .logo {
  float: left;
  margin: 5px 0 0 50px;
}
#navBanner .welcome {
  float: right;
  margin: 15px 50px 0 0;
  color: #999999;
}
#navBanner .welcome select {
  padding: 5px 10px;
  border: 1px solid #cccccc;
  background: no-repeat 5% 50% url("/public/images/runbun.png");
  padding-left: 25px;
}

</style>