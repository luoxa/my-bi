<template>
  <nav class="my-silder-navbar">
      <ul class="my-nav">
          <router-link to="/content" tag="li"><i class="fa fa-th-list"></i>目录</router-link>
          <router-link to="/dashboard" tag="li"><i class="fa fa-dashboard"></i>仪表盘</router-link>
          <router-link to="/datapre" tag="li"><i class="fa fa-database"></i>数据准备</router-link>
      </ul>

      <ul class="my-tool">
          <li><i class="fa fa-plus-circle"></i>创建</li>
      </ul>
  </nav>
</template>

<script>
  export default {
    name: 'MySiderBar'
  }
</script>

<style scoped lang="less">
  .my-silder-navbar{position:fixed;left:0px;top:40px;bottom:0px;width:70px;background:#0A1733;}
  ul.my-nav{margin:0;padding:0;}
  ul.my-nav>li{list-style:none;color:#ffffff99;margin:40px 0;text-align:center;font-size:12px;line-height:24px;}
  ul.my-nav>li.active{color:#fff;border-left:3px solid #fff;}
  ul.my-nav>li:hover{color:#fff;}
  ul.my-nav>li>i{width:100%;font-size:20px;}
  ul.my-tool{margin:0;padding:0;border-top:1px solid rgba(255,255,255,.2);}
  ul.my-tool>li{list-style:none;color:#ffffff;margin:40px 0;text-align:center;font-size:12px;line-height:24px;}
  ul.my-tool>li>i{width:100%;font-size:30px;}
</style>
