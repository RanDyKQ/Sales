<template>
    <div  class="nav-goods-panel ">
        <ul class="nav-goods-list">
            <li  class="xiaomi10">
                <a>
                    <div  class="item-thumb">
                        <img  alt="" height="160" width="160" src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1596073775.20786486.jpg">
                    </div>
                    <div  class="item-name">小米10</div>
                    <div  class="item-price">¥ 3,499.00 起</div>
                </a>
            </li>
            <li  class="redmik30">
                <a>
                    <div  class="item-thumb">
                        <img  alt="" height="160" width="160" src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597138340.1852584.jpg">
                    </div>
                    <div  class="item-name">Redmi K30 至尊纪念版</div>
                    <div  class="item-price">¥ 2,499.00 起</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
</script>
<style>
.nav-goods-panel{
    height: 0px;
    position: relative;
    overflow: hidden;
    background: #E7E7E7;
    opacity: 0;
}
.active .nav-goods-panel{
    height: 300px;
    position: relative;
    overflow: hidden;
    background: #fff;
    opacity: 1;
}
.nav-goods-list{
    visibility: visible;
    opacity: 1;
    width: 100%;
    height: 270px;
    padding-top: 52px;
    text-align: center;
}
.nav-goods-list li{
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 260px;
    font-size: 14px;
}
</style>
