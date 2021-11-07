<template>
    <div class="time-remind">
        <count-down v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(1)" :currentTime= "new Date().getTime()" :startTime="startTime" :endTime="endTime" :dayTxt="'天'" :hourTxt="'小时'" :minutesTxt="'分钟'" :secondsTxt="'秒'">
        </count-down>
    </div>
</template>
<script>
import CountDown from 'vue2-countdown'
export default {
    data () {
        return {
            startTime: new Date('2021/4/21 00:00:00').getTime(), /* 剩余开始时间 */
            endTime: new Date('2021/4/25 23:59:59').getTime() /* 剩余结束时间 */
        }
    },
    methods: {
        countDownS_cb (value) {
            console.log('callBack--' + value + '--开始倒计时结束回调')
        },
        countDownE_cb (value) {
            console.log('callBack--' + value + '--活动剩余倒计时结束回调')
            if (this.endTime <= 0) {
                // eslint-disable-next-line no-useless-return
                return
            }
        }
    },
    components: {
        CountDown
    }
}
</script>
<style>
.time-remind {
    width: 272px;
    height: 34px;
    line-height: 34px;
    float: left;
    display: inline;
    position: absolute;
    bottom: 0;
    right: 0;
    font-family: "Microsoft YaHei";
    text-align: center;
}
.time-remind i{
    color: black;
    font-size: 20px !important;
}
.time-remind span{
    font-size: 26px;
}
</style>
