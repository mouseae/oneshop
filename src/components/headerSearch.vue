<template>
  <div class="header">
    <div class="logo">
      <h1><router-link to="/oneShop" title="1号店"></router-link></h1>
    </div>
    <div class="main">
      <div class="search">
        <input type="search" placeholder="请输入关键字">
        <button>搜索</button>
      </div>
      <div class="hot_words">
        <a class="f_red" href="#">咖啡</a>
        <a href="#">iPhone 6s</a>
        <a href="#">新鲜美食</a>
        <a href="#">蛋糕</a>
        <a href="#">日用品</a>
        <a href="#">连衣裙</a>
      </div>
    </div>

    <div class="shot_car">我的购物车</div>
  </div>
</template>

<script>
export default {
  name: "headerSearch"
}
</script>

<style scoped>
.header {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 115px;
}
.logo {
  width: 210px;
  height: 72px;
}
.logo a {
  display: block;
  width: 210px;
  height: 72px;
  background: url("/public/images/logo.png") no-repeat;
}
.main {
  align-items: center;
  vertical-align: middle;
  /*display: inline-block;*/
  width: 500px;
}
.search {
  width: 500px;
  height: 38px;
  border: 2px solid #ff3c3c;
}
.search input {
  float: left;
  border: 0;
  outline: none;
  height: 38px;
  width: 410px;
  padding-left: 10px;
}
.search button {
  float: left;
  width: 90px;
  height: 38px;
  background-color: #ff3c3c;
  border: 0;
  font-size: 16px;
  color: #fff;
}
.hot_words a {
  margin-right: 10px;
  font-size: 12px;
  color: #555555;
}
.hot_words a:hover {
  color: #ff4e00;
}
.shot_car {
  width: 140px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #d9d9d9;
  background-color: #f6f6f6;
}
.shot_car::before {
  content: url("/public/images/car.png");
  margin-right: 15px;
}

</style>