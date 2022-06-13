<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  watch:{
    // 控制滚动条位置
    '$route':function(to,from){
      console.log(to,from)
      if(to.meta.keepAlive){
        document.body.scrollTop = to.meta.scrollTop;
        document.documentElement.scrollTop = to.meta.scrollTop;
      }
    }
  },
}
</script>

<style>
@import "/public/css/common.css";
#app {
  min-width: 1000px;
}

</style>
