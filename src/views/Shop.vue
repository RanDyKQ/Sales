<template>
    <div id="main">
        <!-- 回到顶部_start -->
        <el-backtop :bottom="60"></el-backtop>
        <!-- 回到顶部_end -->
        <headerNav></headerNav>
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
                    <shopItem  v-for="(item,index) in goodsData" :key="index" :item='item'></shopItem>
                </div>
            </div>
            <service></service>
        </div>
        <prompt></prompt>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
import headerNav from '../components/header_nav'
import footerNav from '../components/footer_nav'
import shopItem from '../components/shop_item'
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
      shopItem,
      prompt,
      service,
      headerNav,
      footerNav
  }
}
</script>
