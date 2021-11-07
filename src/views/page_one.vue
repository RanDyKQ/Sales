<template>
    <div class="main">
        <!-- 回到顶部_start -->
        <el-backtop :bottom="60"></el-backtop>
        <!-- 回到顶部_end -->
        <headerNav></headerNav>
        <div class="store-content ng-scope">
            <div class="sku-box">
                <div class="gray-box clearfix">
                    <div class="cover">
                        <a href="#/item/100030901">
                            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597067517.99598950.jpg">
                        </a>
                    </div>
                    <div class="story-content">
                        <div class="share">
                            <h2 class="hide-row"><a href="#" class="ng-binding">小米10 至尊纪念版</a></h2>
                            <h4 ng-if="item.subtitle" class="ng-binding ng-scope">按键、开孔精准，贴合保护机身 / 开盖即唤醒，合盖即熄屏 / 无线充电时，无需取下保护壳</h4>
                        </div>
                        <div class="story">
                            <p class="ng-scope">
                                <span class="ng-binding">为小米10 至尊纪念版量身打造，精选环保PU，质地柔和坚韧，配以碳纤维文理，整体尽显细腻高雅，手感也更加温润舒适。</span>
                            </p>
                            <p class="ng-scope">
                                <span class="ng-binding">翻开即唤醒，合盖即熄屏，高灵敏感应翻盖状态，避免误触及无谓亮屏，省电又省心！</span>
                            </p>
                            <p class="ng-scope">
                                <span class="ng-binding">无线充电时，无需取下保护壳，放上即充上，便捷更高效！</span>
                            </p>
                            <p class="ng-scope">
                                <span class="ng-binding">划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由...</span>
                                <a href="#" class="ng-scope" @click="visible = !visible">阅读全文></a>
                            </p>
                            <el-popover placement="bottom" title="划线价:" width="400px" trigger="manual" content="商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在小米商城/小米有品/天猫小米官方旗舰店曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。" v-model="visible">
                            </el-popover>
                        </div>
                        <div class="info">
                            <div class="price discount ng-scope">
                                <span class="normal">限时秒杀</span>
                                <span class="highlight">¥ <i class="ng-binding">49.00</i></span>
                                <span class="origin">¥ <i class="ng-binding">99.00</i></span>
                                <div class="daojishi">
                                    <jiShi></jiShi>
                                </div>
                            </div>
                            <span class="jianguo-blue-main-btn big-main-btn">
                                <router-link to="/PageThree" class="ng-scope">现在购买</router-link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <service></service>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
import headerNav from '../components/header_nav'
import footerNav from '../components/footer_nav'
import service from '../components/service'
import jiShi from '../components/daojishi'
export default {
    data () {
        return {
            visible: false
        }
    },
    components: {
        service,
        headerNav,
        footerNav,
        jiShi
    }
}
</script>
<style>
/*弹出层*/
#popBox {
    display: none;
    background-color: #FFFFFF;
    z-index: 11;
    width: 700px;
    height: 350px;
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    margin:auto;
}
.main{
    min-height: calc(100vh - 454px);
    background: #ededed;
    overflow: hidden;
    width: 100%;
}
.store-content{
    clear: both;
    width: 1220px;
    padding: 0 0 25px;
    margin: 0 auto;
}
.gray-box {
    padding: 30px 0 20px;
    overflow: hidden;
    margin-bottom: 20px;
    padding: 30px 0 30px;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0,0,0,.14);
    -webkit-box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
}
.gray-box .cover{
    float: left;
    margin: -12px 0 0 28px;
    width: 38%;
    height: 38%;
}
    .story-content {
    float: right;
    width: 640px;
    margin: 30px 60px 0 23px;
}
.story-content .share{
    padding-bottom: 18px;
    overflow: hidden;
}
.story-content h2 {
    font-size: 24px;
    color: #000;
}
.story-content h2 a{
    color: #000;
}
.story-content h4{
    color: #999;
    float: left;
    margin-top: 14px;
}
.story-content .story{
    padding: 26px 0;
    line-height: 30px;
    border-top: 1px solid #EEE;
    border-bottom: 1px solid #EEE;
}
.discount span{
    color: #d44d44;
}
.story-content .info{
    padding: 26px 0 0 0;
    overflow: hidden;
    line-height: 40px;
}
.story-content .price {
    float: left;
    margin-top: 5px;
}
.story-content .price .normal{
    margin-right: 7px;
}
.story-content .story a {
    margin-left: 6px;
    color: #5079d9;
    cursor: pointer;
}
.story-content .price .highlight {
    font-weight: 700;
    margin-left: -3px;
    color: #d44d44;
    font-size: 18px;
}
.story-content .price i {
    font-size: 26px;
}
.story-content .price.discount .origin {
    position: relative;
    margin-left: 8px;
    font-size: 18px;
    color: #999;
}
.story-content .price.discount .origin i {
    font-size: 18px;
}
.story-content .price.discount .origin:after {
    position: absolute;
    content: '';
    border-top: 2px solid #d44d44;
    width: 100%;
    top: 46%;
    left: 0;
}
.info .big-main-btn {
    float: right;
    width: 139px;
}
.big-main-btn {
    height: 48px;
    background: linear-gradient(#799CEA,#567CE6);
    box-shadow: 0 1px 3px rgba(0,0,0,.1), inset 0 -1px 2px rgba(0,0,0,.2);
    display: block;
    padding: 1px;
    margin: 0 auto;
    border-radius: 9px;
    background: #015e94;
    background: linear-gradient(#5598c9,#2a6da2);
    text-align: center;
    text-shadow: rgba(255,255,255,.496094) 0 1px 0;
    cursor: pointer;
}
.info .big-main-btn a {
    font-size: 16px;
    height: 44px;
    line-height: 45px;
    font-size: 18px;
    color: #FFF;
}
</style>
