<template>
    <div>
        <!-- 顶部导航 -->
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark fixed-top my-navbar">
          <a class="navbar-brand" href="#">
            <img class="my-img" style="" src="../assets/img/login-ico.png" alt="Logo"/>
          </a>
          <!-- Links -->
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">FineBI商业智能</a>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                <i class="fa fa-user my-fa-user"></i>demo
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/login">退出</a>
              </div>
            </li>
          </ul>
        </nav>


        <!-- 左侧导航 -->
        <nav class="my-silder-navbar">
            <ul class="my-nav">
                <router-link to="/content" tag="li"><i class="fa fa-th-list"></i>目录</router-link>
                <router-link to="/dashbord" tag="li"><i class="fa fa-th-list"></i>仪表盘</router-link>
                <router-link to="/datapre" tag="li"><i class="fa fa-th-list"></i>数据准备</router-link>
            </ul>

            <ul class="my-tool">
                <li><i class="fa fa-plus-circle"></i>创建</li>
            </ul>
        </nav>

        <section class="main">
            <router-view></router-view>
        </section>

    </div>
</template>

<script>

  export default {
    name: 'home'
  }
</script>

<style scoped>
html,body{height:100%;margin:0;padding:0;border:0;}
.main{position:fixed;left:70px;top:40px;right:0px;bottom:0px;}
.my-fa-user{width:22px;height:22px;margin-left:5px;margin-right:5px;background-color:#3296F5;color:#ffffff;border-radius:50%;text-align:center;line-height:22px;}
.my-navbar{background-color:#1972C6!important;height:40px;color:#ffffff;}
.my-img{width:20px;vertical-align:baseline;margin-left:10px;}
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
