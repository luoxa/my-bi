<template>
    <div>
        <!-- 顶部导航 -->
        <my-header></my-header>

        <!-- 左侧导航 -->
        <my-sider-bar :list="list"></my-sider-bar>

        <section class="main">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </section>

    </div>
</template>

<script>

  export default {
    name: 'home',
    components:{
      'my-header':()=>import('../components/MyHeader.vue'),
      'my-sider-bar':()=>import('../components/MySiderBar.vue')
    },
    data:function(){
      return {
        list:[
          {to:'/home/contents',iconCls:'fa-th-list',text:'目录'},
          {to:'/home/dashboard',iconCls:'fa-dashboard',text:'仪表盘'},
          {to:'/home/datapre',iconCls:'fa-database',text:'数据准备'}
        ]
      }
    }
  }
</script>

<style scoped>
.main{position:fixed;left:70px;top:40px;right:0px;bottom:0px;}
</style>
