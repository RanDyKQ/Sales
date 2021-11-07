<template>
    <div id="main">
        <!-- 回到顶部_start -->
        <el-backtop :bottom="60"></el-backtop>
        <!-- 回到顶部_end -->
        <headerNav0></headerNav0>
        <div class="sku-box store-content">
            <div class="sort-option">
                <ul class="line clear">
                    <li><a href="javascript:;" class="active">综合排序</a></li>
                </ul>
            </div>
            <!-- 轮播图 -->
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in slideList" :key="item">
                    <img :src="item.image" style="height:100%;width:100%;">
                </el-carousel-item>
            </el-carousel>
            <!--手机配件-->
            <div class="gray-box">
                <header class="title-header">
                    <h5 class="title">热门商品</h5>
                </header>
                <div class="item-box">
                                                                              <!-- 传递 -->
                    <shopItem0  v-for="(item,index) in goodsData" :key="index" :item='item'></shopItem0>
                </div>
            </div>
            <div class="gray-box">
                <header class="title-header">
                    <h5 class="title">官方精选</h5>
                </header>
                <div class="item-box">
                                                                              <!-- 传递 -->
                    <shopItem0  v-for="(item,index) in goodsData1" :key="index" :item='item'></shopItem0>
                </div>
            </div>
        </div>
        <prompt></prompt>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
import headerNav0 from '../components/header_nav0'
import footerNav from '../components/footer_nav'
import shopItem0 from '../components/shop_item0'
import goodsData from '../lib/newGoodsData'
import goodsData1 from '../lib/newGoodsData1'
import prompt from '../components/prompt'
export default {
  data () {
    return {
      goodsData,
      slideList: [
                    {
                        clickUrl: '#',
                        desc: '第一张图',
                        image: require('../assets/img/lunbotu1.jpg')
                    },
                    {
                        clickUrl: '#',
                        desc: '第二张图',
                        image: require('../assets/img/lunbotu2.jpg')
                    },
                    {
                        clickUrl: '#',
                        desc: '第三张图',
                        image: require('../assets/img/lunbotu3.jpg')
                    },
                    {
                        clickUrl: '#',
                        desc: '第四张图',
                        image: require('../assets/img/lunbotu4.jpg')
                    }
                ],
      goodsData1
    }
  },
  /* 组件 */
  components: {
      shopItem0,
      prompt,
      headerNav0,
      footerNav
  }
}
</script>
