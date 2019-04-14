<template>
    <div id="#app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>


export default {
  name:'app',
  components:{
  }
}

</script>

<style scoped lang="less">
#app{position:fixed;left:0;right:0;top:0;right:0;}
</style>
