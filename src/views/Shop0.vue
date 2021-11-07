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
                    <li><a href="javascript:;" class="">销量排序</a></li>
                    <li><a href="javascript:;" class="">价格低到高</a></li>
                    <li><a href="javascript:;" class="">价格高到低</a></li>
                </ul>
            </div>
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
            <service></service>
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
import prompt from '../components/prompt'
import service from '../components/service'
export default {
  data () {
    return {
      goodsData
    }
  },
  /* 组件 */
  components: {
      shopItem0,
      prompt,
      service,
      headerNav0,
      footerNav
  }
}
</script>
