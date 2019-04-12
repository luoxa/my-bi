<template>
    <div>
        <!-- 头部 -->
        <MyHeader></MyHeader>

        <!-- 侧边栏导航 -->
        <MySiderNavbar></MySiderNavbar>

        <!-- 内容区 -->
        <section class="main">
            <router-view></router-view>
        </section>

    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MySiderNavbar from '@/components/MySiderNavbar.vue'

export default {
  name:'app',
  components:{
    MyHeader,
    MySiderNavbar
  }
}

</script>

<style scoped lang="less">
    html,body{height:100%;margin:0;padding:0;border:0;}
    .main{position:fixed;left:70px;top:40px;right:0px;bottom:0px;}
</style>
