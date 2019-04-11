<template>
    <article class="login-container">
        <img src="../assets/img/login-bg.png" alt="">
        <div class="login-box">
            <div class="login-box-left">
                <img src="../assets/img/login-box.png" alt="">
            </div>
            <div class="login-box-right">
                <p class="p1">
                    <i class="fa fa-user"></i>
                    <input type="text" name="username" v-model="username">
                </p>
                <p class="p1">
                    <i class="fa fa-key"></i>
                    <input type="password" name="password" v-model="password">
                </p>
                 <p class="p2">
                    <input id="loginStatus" type="checkbox" name="" v-model="loginStatus" ><label for="#loginStatus">保持登陆状态</label>
                </p>
                <router-link to="/" tag="button">登录</router-link>
            </div>
        </div>
    </article>
</template>

<script>

    export default {
        data:function(){
            return {
                username:'demo',
                password:'demo',
                loginStatus:true
            }
        }
    }

</script>

<style scoped lang="less">
*{box-sizing:border-box;}
.login-container{width:100%;height:100%;position:fixed;left:0;top:0;z-index:99;display:flex;justify-content:center;align-items:center;}
.login-container>img{width:100%;height:100%;}
.login-box{width:720px;height:380px;position:absolute;background:#fff;box-shadow:0 10px 30px 0 rgba(0,63,163,.1);}
.login-box-left{width:450px;height:100%;float:left;position:relative;}
.login-box-right{width:270px;height:100%;float:right;position:relative;width:270px;height:100%;padding:0 40px;}
.login-box-left>img{width:100%;height:100%;}
.login-box-left:after{content:"";display:block;position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(0,84,230,.7);}
p.p1{margin:50px 0 10px;border-bottom:1px solid #aaa;}
p.p2{margin:40px 0 20px;text-align:left;}
input{border:none!important;outline:none;}
button{width:190px;height:40px;line-height:38px;text-align:center;margin:0px auto;background:#3685F2;border-radius:20px;overflow:hidden;border:none;outline:none;font-size:16px;color:#fff;}
i{margin-right:6px;}
</style>
