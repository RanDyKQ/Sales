<template>
    <div class="main">
        <!-- 回到顶部_start -->
        <el-backtop :bottom="60"></el-backtop>
        <!-- 回到顶部_end -->
        <headerNav0></headerNav0>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="tt"></div>
        <div class="content">
            <problem></problem>
            <contact></contact>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
import headerNav0 from '../components/header_nav0'
import footerNav from '../components/footer_nav'
import problem from '../components/problem'
import contact from '../components/contact'
export default {
    components: {
        problem,
        contact,
        headerNav0,
        footerNav
    }
}
</script>
<style>
.tt{
    display: flex;
    height: 620px;
    background-size: auto 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background: url(http://i8.mifile.cn/v1/a1/c6628d2a-e845-2ab2-5e38-392bf3becabf!1226x460.jpg) no-repeat;
    position: relative;
    top: -90px;
    left: 9.8%;
    margin-bottom: -230px;
}
.content {
    clear: both;
    width: 1220px;
    min-height: 400px;
    padding: 0 0 25px;
    margin: 0 auto;
}
</style>
