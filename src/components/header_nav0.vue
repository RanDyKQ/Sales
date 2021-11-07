<template>
    <div id="header">
        <div class="nav-global">
            <div class="container">
                <h1 class="nav-logo">
                    <a href="#">
                        <img src="../assets/img/logo.png" alt="" style="width:40px; height:40px;">
                    </a>
                </h1>
                <ul class="nav-aside">
                    <li class="nav-user">
                        <a href="javascript:;">个人中心</a>
                        <!-- active -->
                        <div class="nav-user-wrapper">
                            <div class="nav-user-list">
                                <dl class="nav-user-avatar">
                                    <el-avatar class="avatar" :size="40" src="https://empty" @error="errorHandler">
                                        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                                    </el-avatar>
                                </dl>
                                <ul>
                                    <li class="order"><a href="javascript:;">我的订单</a></li>
                                    <li class="support"><a href="javascript:;">售后服务</a></li>
                                    <li class="coupon"><a href="javascript:;">我的优惠</a></li>
                                    <li class="information"><a href="javascript:;">账户资料</a></li>
                                    <li class="address"><a>收货地址</a></li>
                                    <li class="logout"><a href="javascript:;">退出</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <!-- active -->
                    <carPhone></carPhone>
                </ul>
                <ul class="nav-list">
                    <li><router-link to="/Home">在线商城</router-link></li>
                    <li><a href="https://www.xiaomiyoupin.com/">有品</a></li>
                    <li><a href="https://xiaoai.mi.com/">小爱开放平台</a></li>
                    <li><a href="https://qiye.mi.com/">企业团购</a></li>
                    <li><a href="https://i.mi.com/">云服务</a></li>
                    <li><a href="https://www.mi.com/appdownload">app下载</a></li>
                    <li><router-link to="/Login">登陆</router-link></li>
                </ul>
            </div>
        </div>
        <div class="nav-sub" :class="{active:isActive}">
            <div class="nav-sub-wrapper">
                <div class="container">
                    <ul class="nav-list">
                        <li class="active"><router-link to="/Home0">首页</router-link></li>
                        <li><router-link to="">手机</router-link></li>
                        <li><router-link to="/PageOne0">手机抢购</router-link></li>
                        <li><router-link to="/shop0">官方配件</router-link></li>
                        <li><router-link to="PageTwo0">周边产品</router-link></li>
                        <li><router-link to="/PageThree0">第三方配件</router-link></li>
                        <li><router-link to="/PageFour0">全部商品</router-link></li>
                        <li><router-link to="/PageFive0">服务</router-link></li>
                        <li class="search">
                            <!-- fetch-suggestions：返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它 -->
                            <!-- select：点击选中建议项时触发 -->
                            <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
                            <el-button class="button" type='primary' @click="Search">搜索</el-button>
                            <div class="search_menu">
                                <ul class="input_list">
                                    <li v-for="(item,index) in menu" :key="index">{{item}}</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Phone></Phone>
        </div>
    </div>
</template>
<script>
import carPhone from './car_panel'
import Phone from './phone'
import itemData from '../lib/newItemsData'
export default {
    data () {
        return {
            isActive: false,
            input: '',
            itemData,
            restaurants: [],
            state: '',
            timeout: null
        }
    },
    methods: {
        errorHandler () {
            return true
        },
        Search (input) {
            console.log(itemData)
        },
        loadAll () {
            return [
                { value: '小米 10' },
                { value: '小米 10 至尊纪念版' },
                { value: '小米10 青春版 5G' },
                { value: 'Redmi K30 至尊纪念版' },
                { value: 'Redmi K30 5G' },
                { value: 'Redmi 8' },
                { value: 'Redmi K30' },
                { value: 'Redmi 10X' },
                { value: '小米 MIX Alpha' },
                { value: 'Redmi 10X 4G' }
            ]
        },
        querySearchAsync (queryString, cb) {
            var restaurants = this.restaurants
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                cb(results)
            }, 3000 * Math.random())
        },
        createStateFilter (queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
            }
        },
        handleSelect (item) {
            console.log(item)
        }
    },
    mounted () {
        this.restaurants = this.loadAll()
    },
    components: {
        carPhone,
        Phone
    }
}
</script>
<style>
.avatar {
    margin-left: 38%;
    margin-top: -10%;
    margin-bottom: 2%;
}
.search{
    margin-left: 150px;
    margin-top: -8px;
    position: relative;
}
.button{
    position: absolute;
    left: 220px;
}
.search_menu{
    display:none;
    background-color:rgb(202, 202, 201);
    position:absolute;
    top:25;
    width: 100%;
}
 .search_menu ul{
     margin-bottom:0; /* /去除/的能部外边距 . */
 }
 .search_menu li{
     padding:5px;
     font-size:1.1em;
     cursor:pointer;
 }
  .search:hover .search_menu{
      display: block;
  }
  .input_list{
      padding-left: 40px;
  }
</style>
