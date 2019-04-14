<template>
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
</template>

<script>
    export default {
        name:'my-header'
    }

</script>

<style scoped lang="less">
  .my-fa-user{width:22px;height:22px;margin-left:5px;margin-right:5px;background-color:#3296F5;color:#ffffff;border-radius:50%;text-align:center;line-height:22px;}
  .my-navbar{background-color:#1972C6!important;height:40px;color:#ffffff;}
  .my-img{width:20px;vertical-align:baseline;margin-left:10px;}
</style>