<template>
    <div id="main">
        <!-- 回到顶部_start -->
        <el-backtop :bottom="60"></el-backtop>
        <!-- 回到顶部_end -->
        <headerNav></headerNav>
        <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
        <div class="content">
            <span>首页/个人中心</span>
            <el-container>
                <el-aside width="200px">
                    <ul>
                        <li class="me">个人中心</li>
                        <li><a style="color:orange">我的个人中心</a></li>
                        <li><a><router-link to="/Message">消息通知</router-link></a></li>
                        <li><a>购买资格</a></li>
                        <li><a>现金账户</a></li>
                    </ul>
                </el-aside>
                <el-main>
                    <div class="b1">
                        <div class="touxiang">
                            <img src="../../assets/img/icon.png" alt="" style="width: 150px;height: 150px;">
                        </div>
                        <span>浮生</span>
                        <p>早上好~</p>
                        <a href="#">修改个人信息></a>
                    </div>
                    <div class="b2">
                        <span class="span1">账户安全：<i>普通</i></span>
                        <span class="span2">绑定手机：133******59</span>
                        <span class="span3">绑定邮箱：未绑定</span>
                    </div>
                    <div class="b3">
                        <ul>
                            <li>
                                <img src="//s01.mifile.cn/i/user/portal-icon-1.png" alt="">
                                <h3>待支付的订单</h3>
                                <span>
                                    <router-link to="/Order"><a>查看待支付订单<i>></i></a></router-link>
                                </span>
                            </li>
                            <li>
                                <img src="//s01.mifile.cn/i/user/portal-icon-2.png" alt="">
                                <h3>待收货的订单</h3>
                                <span>
                                    <a href="#">查看待收货订单<i>></i></a>
                                </span>
                            </li>
                            <li>
                                <img src="//s01.mifile.cn/i/user/portal-icon-3.png" alt="">
                                <h3>待评价商品数</h3>
                                <span>
                                    <a href="#">查看待评价商品<i>></i></a>
                                </span>
                            </li>
                            <li>
                                <img src="//s01.mifile.cn/i/user/portal-icon-4.png" alt="">
                                <h3>喜欢的商品</h3>
                                <span>
                                    <a href="#">查看喜欢的商品<i>></i></a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </el-main>
            </el-container>
            <Service></Service>
        </div>
        <footerNav></footerNav>
    </div>
</template>
<script>
import headerNav from '../../components/header_nav'
import footerNav from '../../components/footer_nav'
import Service from '../../components/service'
export default {
    data () {
        return {
            show: false
        }
    },
    components: {
        headerNav,
        footerNav,
        Service
    }
}
</script>
<style>
a:hover {
    color: rgb(255, 115, 0);
}
.el-aside {
    background-color: #fff;
    color: #333;
    margin-top: 2%;
    padding-bottom: 1.5%;
}
.el-aside ul{
    text-align: center;
}
.el-aside ul .me{
    font-size: 16px;
    margin-bottom: 2%;
}
.el-aside ul li{
    padding-top: 8%;
    text-align: center;
}
.el-main {
    background-color: #fff;
    color: #333;
    margin-left: 1%;
    margin-top: 2%;
    position: relative;
    display: flex;
    height: 800px;
}
.touxiang{
    position: absolute;
    left: 8%;
    top: 10%;
    padding: 4px;
    border: 1px solid #e0e0e0;
    border-radius: 150px;
}
.b1 span{
    font-size: 28px;
    position: absolute;
    left: 26%;
    top: 14%;
}
.b1 p{
    position: absolute;
    left: 26%;
    top: 20%;
    color: rgb(141, 141, 141);
}
.b1 a{
    color: rgb(255, 115, 0);
    position: absolute;
    left: 26%;
    top: 24%;
}
.b2 .span1 {
    position: absolute;
    left: 58%;
    top: 15%;
}
.b2 .span1 i{
    color: orange;
}
.b2 .span2 {
    position: absolute;
    left: 58%;
    top: 19%;
}
.b2 .span3 {
    position: absolute;
    left: 58%;
    top: 23%;
}
.b3 ul{
    margin: 0;
    padding: 60px 0 0;
    list-style-type: none;
    color: #757575;
    margin-top: 30%;
    border-top: #dddcdc solid 1px;
}
.b3 ul li{
    position: relative;
    float: left;
    width: 276px;
    height: 65px;
    padding-left: 5%;
    padding-top: 15px;
    margin-left: 14px;
    margin-bottom: 80px;
}
.b3 li h3{
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 18px;
    font-weight: 400;
}
.b3 li span{
    position: absolute;
    left: 50%;
    top: 80%;
}
.b3 li h3{
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 18px;
    font-weight: 400;
}
.b3 li span{
    position: absolute;
    left: 50%;
    top: 80%;
}
.b3 li span i{
    font-weight: 700;
}
.b3 li span a:hover{
    color: rgb(255, 115, 0);
}
</style>
