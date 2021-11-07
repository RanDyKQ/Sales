<template>
    <div id="main">
        <headerNav></headerNav>
        <el-divider></el-divider><!-- 分割线 -->
        <div class="head">
            <p class="title">{{itemInfo.title}}</p>
            <ul>
                <li class="active"><a>用户评价</a></li>
                <li>|</li>
                <li>参数页</li>
                <li>|</li>
                <li>概述页</li>
            </ul>
        </div>
        <el-divider></el-divider>
        <br>
        <div class="gray-box1 clear">
            <div class="title1 columns-title1 pre-title1">
                <h2>热门评价</h2>
            </div>
            <div class="box1">
                <img class="touxiang" :src="itemInfo.image1">
                <p class="qq">{{itemInfo.qq1}}</p>
                <span>{{date}}</span>
                <p class="pingjia">{{itemInfo.pingjia1}}</p>
                <div class="in">
                    <ul>
                        <li v-for="i in itemInfo.im" :key="i">
                            <img class="zhanshi" :src="i">
                        </li>
                    </ul>
                </div>
                <el-input class="textarea" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea"></el-input>
                <el-button class="huifu">回复</el-button>
            </div>
            <div class="box1">
                <img class="touxiang" :src="itemInfo.image2">
                <p class="qq">{{itemInfo.username1}}</p>
                <span>{{itemInfo.time1}}</span>
                <p class="pingjia">{{itemInfo.pingjia2}}</p>
                <div class="in">
                    <ul>
                        <li v-for="i in itemInfo.im1" :key="i">
                            <img class="zhanshi" :src="i">
                        </li>
                    </ul>
                </div>
                <el-input class="textarea" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea"></el-input>
                <el-button class="huifu">回复</el-button>
            </div>
            <div class="box1">
                <img class="touxiang" :src="itemInfo.image">
                <p class="qq">238*****67</p>
                <span>2020-12-23</span>
                <p class="pingjia">外观和包装没话说，很高档大气，而且手机很流畅，很好用。</p>
                <div class="in">
                    <ul>
                        <li v-for="i in itemInfo.im" :key="i">
                            <img class="zhanshi" :src="i">
                        </li>
                    </ul>
                </div>
                <el-input class="textarea" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea"></el-input>
                <el-button class="huifu">回复</el-button>
            </div>
            <div class="box_right">
                <el-progress class="progress" type="circle" :percentage="90"></el-progress>
                <h2 style="color:orange;font-size:18px;font-weight: 700;">满意度</h2>
            </div>
        </div>
        <footerNav></footerNav>
    </div>
</template>
<script>
import headerNav from '../components/header_nav'
import footerNav from '../components/footer_nav'
import itemData from '../lib/newItemsData'
export default {
    data () {
        return {
            itemData,
            itemId: this.$route.query.itemId,
            textarea: '',
            date: new Date()
        }
    },
    mounted () {
        let _this = this/* 声明一个变量指向Vue实例this，保证作用域一致 */
        this.timer = setInterval(() => {
            _this.date = new Date()/* 修改数据date */
        }, 1000)
    },
    beforeDestroy () {
        if (this.timer) {
            clearInterval(this.timer)/* 在Vue实例销毁前，清除我们的定时器 */
        }
    },
    /* 监视 */
    watch: {
        '$route.query.itemId' () {
            this.itemId = this.$route.query.itemId
        }
    },
    computed: {
        itemInfo () {
            let itemInfo = this.itemData.filter((item) => {
                return Number(item.sku_id) === Number(this.itemId)
            })[0]
            return itemInfo
        }
    },
    methods: {

    },
    components: {
        headerNav,
        footerNav
    }
}
</script>
<style>
#main{
    width: 100%;
    overflow: hidden;
}
.title{
    width: 100%;
    height: 40px;
}
.head{
    width: 100%;
    height: 50px;
}
.head .title{
    line-height: 22px;
    font-size: 22px;
    margin-left: 11%;
    padding-top: 10px;
    color:orange;
    font-weight: 800;
}
.head ul{
    margin-right: 11%;
    margin-top: -15px;
}
.head ul li{
    float: right;
    padding-left: 1%;
}
.head .active a{
    color: orange;
    font-weight: 800;
}
.item-box2{
    width: 1100px;
    padding: 60px;
    margin-left: 9%;
    margin-bottom: 20px;
    display: table;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
}
.gray-box1{
    width: 80%;
    position: relative;
    overflow: hidden;
    border: 1px solid #D1D1D1;
    border-color: rgba(0,0,0,.14);
    border-radius: 8px;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    margin-bottom: 30px;
    margin-left: 10%;
}
.gray-box1 .title1 h2{
    font-size: 18px;
    font-weight: 400;
    color: #626262;
}
.gray-box1 .title1{
    height: 60px;
    padding: 0 10px 0 28px;
    background: #F5F5F5;
    background: linear-gradient(#FFF,#F5F5F5);
    border-bottom: 1px solid #DCDCDC;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 1px 7px rgba(0,0,0,.06);
    line-height: 60px;
    color: #646464;
}
.gray-box1 .pre-title1{
    position: relative;
    z-index: 2;
}
.gray-box1 .columns-title1 h2{
    float: left;
}
.box1{
    width: 500px;
    height: 500px;
    background-color: #fff;
    position: relative;
    margin-bottom: 1%;
}
.rate{
    position: absolute;
    left: 50%;
    top: 20%;
}
.box_right{
    position: absolute;
    width: 450px;
    height: 250px;
    top: 3.6%;
    right: 21%;
    background-color: #fff;
}
.box1 .touxiang{
    width: 10%;
    height: 10%;
    position: absolute;
    left: 6%;
    top: 6%;
}
.box1 .qq{
    position: absolute;
    left: 20%;
    top: 6%;
    font-size: 15px;
}
.box1 span {
    position: absolute;
    left: 20%;
    top: 12%;
    font-size: 10px;
    color: rgb(161, 161, 161);
}
.box1 .pingjia{
    position: absolute;
    left: 6%;
    top: 25%;
    font-size: 18px;
}
.box1 ul{
    display: flex;
    position: absolute;
    top: 40%;
    float: left;
    left: 7%;
}
.box1 .zhanshi{
    width: 80%;
    height: 80%;
}
.box1 .textarea{
    position: absolute;
    top: 74%;
    width: 60%;
    left: 6%;
}
.box1 .huifu{
    position: absolute;
    top: 79.8%;
    right: 25%;
}
.gray-box1 .box_right .progress{
    position: absolute;
    top: 30%;
    left: 37%;
}
</style>
