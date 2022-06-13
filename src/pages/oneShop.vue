<template>
  <div id="oneShop">
    <nav-bar/>
    <el-row type="flex" justify="center">
<!--      <el-col :xs="24" :sm="23" :md="22" :lg="18" :xl="16">-->
      <el-col class="w">
        <header-search/>
        <goods-menu/>
        <hot-content/>
        <img src="/images/mban_2.jpg" style="width: 100%;margin-top: 20px;">
        <example-content :floor="0"/>
        <example-content :floor="1"/>
        <img src="/images/mban_2.jpg" style="width: 100%;margin-top: 20px">
        <example-content :floor="2"/>
        <end-footer/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
import headerSearch from "@/components/headerSearch";
import goodsMenu from "@/components/goodsMenu";
import hotContent from "@/components/hotContent";
import endFooter from "@/components/endFooter";
import exampleContent from "@/components/exampleContent";

export default {
  name: 'oneShop',
  components: {
    navBar,
    headerSearch,
    goodsMenu,
    hotContent,
    endFooter,
    exampleContent
  },
}
</script>

<style>
@import "/public/css/common.css";
#oneShop {
  min-width: 1000px;
  /*max-width: 2300px;*/
}

</style>