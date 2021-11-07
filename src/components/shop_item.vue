<template>
    <div class="item">
        <div>
            <div class="item-img">
                <img :alt="item.name_title" :src="item.sku_info[itemIndex].ali_image" style="opacity: 1;">
            </div>
            <h6>{{item.name}}<!-- 差值表达式 --></h6>
            <h3>{{item.name_title}}</h3>
            <div class="params-colors">
                <ul class="colors-list">
                    <li v-for="(item,index) in item.sku_info" :key="(item,index)">
                        <a href="javascript:;" :title="item.spec_json.show_name" @click="tab(index)">
                            <img :src="item.spec_json.image">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="item-btns clearfix">
                <span class="item-gray-btn">
                    <router-link :to="{name:'Evaluate',query:{itemId:item.sku_info[itemIndex].sku_id}}">用户评价</router-link>
                </span>
                <span class="item-blue-btn" @click="addCarpanelData(item.sku_info[itemIndex])">加入购物车 </span>
            </div>
            <div class="item-price clearfix">
                <i>¥</i><span>{{item.price}}</span>
            </div>
            <div class="discount-icon">false</div>
            <div class="item-cover">
                <router-link :to="{name:'Item',query:{itemId:item.sku_info[itemIndex].sku_id}}"></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            itemIndex: 0
        }
    },
    /* 接收父组参数 */
    props: {
        item: Object
    },
    /* 方法 */
    methods: {
        tab (index) {
            this.itemIndex = index
            console.log(index)
        },
        /* 添加购物车的方法 */
        addCarpanelData (data) {
            let itemData = { info: data, count: 1 }
            this.$store.commit('addCarpanelData', itemData)
        }
    }
}
</script>
