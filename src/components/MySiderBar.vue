<template>
  <nav class="my-silder-navbar">
      <ul class="my-nav">
          <router-link v-for="item in list" :to="item.to" tag="li"><i class="fa" :class="item.iconCls"></i>{{item.text}}</router-link>
      </ul>

      <ul class="my-tool">
          <li><i class="fa fa-plus-circle"></i>创建</li>
      </ul>
  </nav>
</template>

<script>
  export default {
    name: 'my-sider-bar',
    props:{
      list:{
        type:Array,
        default:[
          {to:'/contents',iconCls:'fa-th-list',text:'目录'},
          {to:'/dashboard',iconCls:'fa-dashboard',text:'仪表盘'},
          {to:'/datapre',iconCls:'fa-database',text:'数据准备'}
        ]
      }
    }
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
