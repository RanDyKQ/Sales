<template>
    <div class="carousel-wrap" id="carousel">
        <transition-group tag="ul" class="slide-ul" name="list">
            <li v-for="(list,index) in slideList" :key="(list,index)" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
                <a :href="list.clickUrl">
                    <img :src="list.image" :alt="list.desc">
                </a>
            </li>
        </transition-group>
        <div class="carousel-items">
            <span v-for="(item,index) in slideList.length" :key="(item,index)" :class="{'active':index===currentIndex}" @mouseover="change(index)">
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
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
                currentIndex: 0,
                timer: ''
            }
        },
        methods: {
            /* 开始 */
            go () { /*           定时器 */
                this.timer = setInterval(() => {
                    this.autoPlay()
                }, 2500)
            },
            /* 停止 */
            stop () {
                clearInterval(this.timer)
                this.timer = null
            },
            /* 改变 */
            change (index) {
                this.currentIndex = index
            },
            /* 自动 */
            autoPlay () {
                this.currentIndex++
                if (this.currentIndex > this.slideList.length - 1) {
                    this.currentIndex = 0
                }
            }
        },
        /* 生命周期钩子函数 */
        created () {
            /* 异步处理 */
            this.$nextTick(() => {
                this.timer = setInterval(() => {
                    this.autoPlay()
                }, 2500)
            })
        }
    }
</script>

<style>
.carousel-wrap {
   height: 453px;
   width: 100%;
   overflow: hidden;
   background-color: #fff;
   border-radius: 10px;
}

.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 380px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
</style>
