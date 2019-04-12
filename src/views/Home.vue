<template>
    <div>
        <!-- 顶部导航 -->
        <MyHeader></MyHeader>

        <!-- 左侧导航 -->
        <MySiderBar></MySiderBar>

        <section class="main">
            <router-view></router-view>
        </section>

    </div>
</template>

<script>

  export default {
    name: 'home',
    components:{
      MyHeader:()=>import('../components/MyHeader.vue'),
      MySiderBar:()=>import('../components/MySiderBar.vue')
    }
  }
</script>

<style scoped>
.main{position:fixed;left:70px;top:40px;right:0px;bottom:0px;}
</style>
