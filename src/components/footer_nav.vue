<template>
    <div id="footer">
        <div class="footer">
            <div class="container">
                <div class="siteinfo">
                    <ul class="nav-footer">
                        <li class="first_li">
                            <h3>帮助中心</h3>
                            <ul>
                                <!---->
                                <li class="last_li">
                                    <a href="#">账户管理</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">购物指南</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">订单操作</a>
                                </li>
                            </ul>
                        </li>

                        <li class="first_li">
                            <h3>服务支持</h3>
                            <ul>
                                <li class="last_li">
                                    <a href="#">售后服务</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">自助服务</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">相关下载</a>
                                </li>
                            </ul>
                        </li>

                        <li class="first_li">
                            <h3>线下门店</h3>
                            <ul>
                                <!---->
                                <li class="last_li">
                                    <a href="#">小米之家</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">服务网点</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">授权体验店</a>
                                </li>
                            </ul>
                        </li>

                        <li class="first_li">
                            <h3>关于小米</h3>
                            <ul>
                                <!---->
                                <li class="last_li">
                                    <a href="#">了解小米</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">加入小米</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">投资者关系</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">企业社会责任</a>
                                </li>
                            </ul>
                        </li>

                        <li class="first_li">
                            <h3>关注我们</h3>
                            <ul>
                                <!---->
                                <li class="last_li">
                                    <a href="#">新浪微博</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">官方微信</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">联系我们</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">公益基金会</a>
                                </li>
                            </ul>
                        </li>
                        <li class="first_li">
                            <h3>特色服务</h3>
                            <ul>
                                <!---->
                                <li class="last_li">
                                    <a href="#">F码通道</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">礼物码</a>
                                </li>
                                <li class="last_li">
                                    <a href="#">防伪查询</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul class="service">
                        <li class="tel">400-100-5678</li>
                        <li class="time">8:00-18:00（仅收市话费）</li>
                        <li class="online">
                            <a href="#"><span class="smartisan-icon info-question"></span>在线帮助</a>
                        </li>
                    </ul>
                </div>
                <div class="copyright">
                    <h4>Copyright ©, Smartisan Digital Co., Ltd. All Rights Reserved.</h4>
                    <h5 class="company">浙江小米数码科技有限公司</h5>
                    <ul class="privacy">
                        <li>
                            <a href="#">法律声明</a>
                        </li>
                        <li>
                            <a href="#">隐私条款</a>
                        </li>
                        <li>
                            <a href="#">开发者中心</a>
                        </li>
                    </ul>
                    <h6>
                        <a href="#" target="_blank">
                            <span>浙ICP备14041720号-1</span>
                            <span>浙ICP证140622号</span>
                            <span>浙公网安备11010502025474</span>
                        </a>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
.footer{
    background: #fafafa;
    border-top: 1px solid #e6e6e6;
    display: block;
}
.container{
    width: 1220px;
    margin-left: auto;
    margin-right: auto;
}
.footer .siteinfo{
    height: 100px;
    padding: 100px 0 32px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
}
.footer .copyright{
    color: #434d55;
    font-size: 12px;
    padding: 40px 0;
}
.nav-footer h3{
    color: #646464;
    font-size: 12px;
    padding: 0 0 14px;
}
.nav-footer a{
    color: #969696;
}
.first_li {
    width: 149px;
    line-height: 1;
    float: left;
}
.last_li{
    color: #c3c3c3;
    font-size: 12px;
    padding: 6px 0;
}
.service{
    float: right;
    position: absolute;
    right: 0;
    overflow: hidden;
    line-height: 34px;
}
.footer .service .tel{
    text-align: right;
    font-size: 30px;
    line-height: 1;
    cursor: default;
    color: #646464;
    top: -2px;
    position: relative;
}
.service .time{
    clear: both;
    width: 241px;
    font-size: 14px;
    line-height: 18px;
    color: #c3c3c3;
    text-align: right;
}
.footer .service li.online a {
    float: right;
    width: 102px;
    height: 32px;
    line-height: 32px;
    background: linear-gradient(#fcfcfc,#f5f5f5);
    cursor: pointer;
    font-size: 14px;
    padding: 0 0 0 26px;
    margin-top: 8px;
    text-align: left;
    color: #5079d9;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
}
.footer  .copyright  h4 , .footer  .copyright  h5 {
    float: left;
    height: 15px;
    line-height: 15px;
    color: #757575;
}
.footer .privacy{
    float: left;
    margin: 0 0 0 12px;
}
.footer .privacy li{
    float: left;
    line-height: 12px;
    padding: 1px 10px 0;
    border-left: 1px solid #ccc;
}
.footer .privacy li a{
    color: #5079d9;
    cursor: pointer;
    transition: all .15s ease-out;
    text-decoration: none;
}
.footer .copyright h6{
    clear: both;
    padding: 10px 0 0;
    height: 15px;
}
.footer .copyright h6 a{
    color: #bdbdbd;
    font-size: 12px;
    height: 12px;
    line-height: 1;
}
.footer .copyright h6 span{
    margin-right: 20px;
}

</style>
