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
                        <li><a><router-link to="/Portal">我的个人中心</router-link></a></li>
                        <li><a style="color:orange">消息通知</a></li>
                        <li><a>购买资格</a></li>
                        <li><a>现金账户</a></li>
                    </ul>
                </el-aside>
                <el-main>
                    <div class="mes">
                        <p class="p1">消息通知</p>
                        <div class="more">
                            <ul>
                                <li>
                                    <a href="#" style="color:orange;">全部消息</a>
                                </li>
                                <li class="line">
                                    <a href="#">物流动态</a>
                                </li>
                                <li class="line">
                                    <a href="#">特惠活动</a>
                                </li>
                            </ul>
                        </div>
                        <p class="sx1">暂无数据</p>
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
    components: {
        headerNav,
        footerNav,
        Service
    }
}
</script>
<style>
.mes{
    position: relative;
}
.mes .sx1{
    position: absolute;
    top:200px;
}
.mes .p1{
    font-size: 30px;
    padding-left: 3%;
    padding-top: 2%;
    color: #757575;
    line-height: 68px;
}
.mes .more{
    border-bottom: 1px solid #e0e0e0;
    line-height: 1.25;
}
.mes .more .line{
    border-left: 1px solid #e0e0e0;
}
.mes .more ul li{
    float: left;
    padding: 0 20px;
    font-size: 16px;
    margin-left: 1%;
    margin-top: 2%;
}
</style>
