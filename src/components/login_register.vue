<template>
    <div id="login-register">
        <div class="contain">
            <div class="big-box" :class="{active:isLogin}">
                <div class="big-contain" v-if="isLogin">
                    <div class="btitle">账户登录</div>
                    <div class="bform">
                        <input type="email" placeholder="邮箱" id="email" v-model="form.useremail">
                        <span class="errTips" v-if="emailError">* 邮箱填写错误 *</span>
                        <input type="password" id="password" placeholder="密码" v-model="form.userpwd2">
                        <span class="errTips" id="password" v-if="emailError">* 密码填写错误 *</span>
                    </div>
                    <div style="width:75%;text-align: center;">
                        <button class="bbutton" @click="login"><router-link to="/Home" style="color:#fff">用户登录</router-link></button>
                        <button class="bbutton" @click="login" style="margin-left:30%"><router-link to="/Business1" style="color:#fff">商家登录</router-link></button>
                    </div>
                </div>
                <div class="big-contain" v-else>
                    <div class="btitle">创建账户</div>
                    <div class="bform">
                        <input type="text" placeholder="用户名" v-model="form.username">
                        <span class="errTips" v-if="existed">* 用户名未填写！ *</span>
                        <input type="email" placeholder="邮箱" v-model="form.useremail">
                        <span class="errTips" v-if="email">* 邮箱未填写！ *</span>
                        <input type="password" placeholder="密码" v-model="form.userpwd1">
                        <span class="errTips" v-if="password1">* 密码未填写！ *</span>
                        <span class="errTips" v-if="passwordEr">* 两次密码输入不一致！ *</span>
                        <input type="password" placeholder="确认密码" v-model="form.userpwd2">
                        <span class="errTips" v-if="password2">* 密码未填写！ *</span>
                    </div>
                    <button class="bbutton" @click="register">注册</button>
                </div>
            </div>
            <div class="small-box" :class="{active:isLogin}">
                <div class="small-contain" v-if="isLogin">
                    <div class="stitle">你好，朋友!</div>
                    <p class="scontent">开始注册，和我们一起购物</p>
                    <button class="sbutton" @click="changeType">注册</button>
                </div>
                <div class="small-contain" v-else>
                    <div class="stitle">欢迎回来!</div>
                    <p class="scontent">与我们保持联系，请登录你的账户</p>
                    <button class="sbutton" @click="changeType">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login-register',
    data () {
        return {
            isLogin: false,
            emailError: false,
            email: false,
            passwordError: false,
            password1: false,
            password2: false,
            existed: false,
            passwordEr: false,
            form: {
                username: '',
                useremail: '',
                userpwd1: '',
                userpwd2: ''
            },
            user: {
                email: '123',
                password: '123'
            }
        }
    },
    methods: {
        changeType () {
            this.isLogin = !this.isLogin
            this.form.username = ''
            this.form.useremail = ''
            this.form.userpwd1 = ''
            this.form.userpwd2 = ''
        },
        /* 手机登录方法 */
        login () {
        },
        /* 手机注册方法 */
        register () {
            if (this.form.username === '') {
                this.existed = true
            } else {
                this.existed = ''
            }
            if (this.form.useremail === '') {
                this.email = true
            } else {
                this.email = ''
            }
            if (this.form.userpwd1 === '') {
                this.password1 = true
            } else {
                this.password1 = ''
            }
            if (this.form.userpwd2 === '') {
                this.password2 = true
            } else {
                this.password2 = ''
            }
            if (this.form.userpwd1 !== this.form.userpwd2) {
                this.passwordEr = true
            } else {
                this.passwordEr = ''
            }
            if (this.existed === '' && this.email === '' && this.password1 === '' && this.password2 === '' && this.passwordEr === '') {
                console.log(this.form.useremail)
                /* 提示 */
                this.$notify({
                    title: '注册成功',
                    type: 'success'
                })
            }
        }
    }
}
</script>

<style scoped="scoped">
#login-register{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background: url(../assets/img/banner_slide_01.jpg) no-repeat;
}
.contain{
    width: 60%;
    height: 60%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 3px #f0f0f0,
    0 0 6px #f0f0f0;
}
.big-box{
    width: 70%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 30%;
    transform: translateX(0%);
    transition: all 1s;
}
.big-contain{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.btitle{
    font-size: 1.5em;
    font-weight: bold;
    color: rgb(57,167,176);
}
.bform{
    width: 100%;
    height: 40%;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.radio{
    position: relative;
    width: 100%;
}
.radio .radio1 {
    position: absolute;
    left: 25%;
    width: 20px;
    height: 20px;
}
.radio .text1{
    position: absolute;
    left: 24%;
    top: 23px;
}
.radio .radio2 {
    position: absolute;
    right: 25%;
    width: 20px;
    height: 20px;
}
.radio .text2{
    position: absolute;
    right: 23.5%;
    top: 23px;
}
.bform .errTips{
    display: block;
    width: 50%;
    text-align: left;
    color: red;
    font-size: 0.7em;
    margin-left: 1em;
}
.bform input{
    width: 50%;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding-left: 2em;
    background-color: #f0f0f0;
}
.bbutton{
    width: 20%;
    height: 40px;
    border-radius: 24px;
    border: none;
    outline: none;
    background-color: rgb(57,167,176);
    color: #fff;
    font-size: 0.9em;
    cursor: pointer;
}
.small-box{
    width: 30%;
    height: 100%;
    background: linear-gradient(135deg,rgb(57,167,176),rgb(56,183,145));
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0%);
    transition: all 1s;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
}
.small-contain{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.stitle{
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
}
.scontent{
    font-size: 0.8em;
    color: #fff;
    text-align: center;
    padding: 2em 4em;
    line-height: 1.7em;
}
.sbutton{
    width: 60%;
    height: 40px;
    border-radius: 24px;
    border: 1px solid #fff;
    outline: none;
    background-color: transparent;
    color: #fff;
    font-size: 0.9em;
    cursor: pointer;
}
.big-box.active{
    left: 0;
    /* 过渡 */
    transition: all 0.5s;
}
.small-box.active{
    left: 100%;
    /* 左上角边框的形状 */
    border-top-left-radius: 0;
    /* 左下角边框的形状 */
    border-bottom-left-radius: 0;
    /* 右上角边框的形状 */
    border-top-right-radius: inherit;
    /* 右下角边框的形状 */
    border-bottom-right-radius: inherit;
    /* 定义转换，只是用 X 轴的值 */
    transform: translateX(-100%);
    /* 过渡 */
    transition: all 1s;
}
</style>
