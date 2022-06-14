<template>
  <el-row type="flex" justify="center" style="margin-top: 20px">
    <el-col class="left_img" :span="4">
      <img src="/images/l_img.jpg" alt="l">
      <div>
        <span class="l_price">￥53.00</span>
        <span class="l_rr">16R</span>
      </div>
    </el-col>
    <el-col class="goods_list" :span="20">
      <div v-for="(i,index) in array" :key="index">
        <router-link class="card" :to="{
                  path:'/product',
                  query:{
                    pid:i.pid,
                  }
                }">
          <div><img :src=i.img alt="hot"></div>
          <div class="info">
            <h2>{{ i.title }}</h2>
            <a href="#">{{ i.msg }}</a>
            <div>
              <span class="price">￥{{ i.price }}</span>
              <span class="rr">{{ i.rr }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </el-col>
  </el-row>


<!--      <div style="flex-grow: 4;display: flex">-->
<!--        <div style="flex-grow: 1" v-for="(i,index) in array" :key="index">-->
<!--          <el-card :body-style="{ padding: '0px' }">-->
<!--            <img height="136px" :src=i.img class="image">-->
<!--            <div style="text-align: center;margin-top: 10px">-->
<!--              <span style="background-color: #ff4e00;color: #ffffff;margin-right: 15px">￥ {{i.price}}</span>-->
<!--              <span>16R</span>-->
<!--            </div>-->
<!--          </el-card>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
<!--  </div>-->
</template>

<script>
import axios from "axios";

export default {
  name: "topContent",
  data() {
    return {
      array: []
    }
  },
  mounted() {
    // 通过axios异步获取json数据
    axios.get("/json/hotContent.json").then(a=>{
      this.array = a.data;
    });
  },
}
</script>

<style scoped>
.left_img {
  background-color: #d8eefc;
  height: 230px;
  text-align: center;
  margin-right: 10px
}
.left_img div {
  display: flex;
  justify-content: space-between;
  padding: 5px 50px;
  align-items: center;
}
.left_img div .l_price {
  background-color: #ff4e00;
  padding: 2px 3px;
  color: #ffffff;
  font-size: 14px;
}
.left_img div .l_rr {
  color: #ff4e00;
  font-size: 12px;
}
.goods_list {
  display: flex;
}
.goods_list>div {
  flex: 1;
  border: 1px solid #eaeaea;
}
.card {
  text-align: center;
}
.info {
  margin-top: 18px;
}
.card .info h2 {
  color: #555555;
  font-size: 16px;
}
.card .info a {
  font-size: 12px;
  color: #555555;
}
.card .info div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
}
.card .info div .price {
  font-size: 20px;
  color: #ff4e00;
  margin-right: 15px;
}
.card .info div .rr {
  font-size: 12px;
  color: #999999;
}
</style>