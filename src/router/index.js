/* eslint-disable no-undef */
import Vue from 'vue'
import VueRouter from 'vue-router'
/* import Home from '../views/Home.vue' */
import '../assets/css/header.css'
import '../assets/css/reset.css'
import '../assets/css/goodsList.css'
import Home0 from '../views/home0.vue'
import Home from '../views/home.vue'
import shop from '../views/Shop.vue'
import shop0 from '../views/Shop0.vue'
import PageOne from '../views/page_one.vue'
import PageOne0 from '../views/page_one0.vue'
import PageTwo from '../views/page_two.vue'
import PageTwo0 from '../views/page_two0.vue'
import PageThree from '../views/page_three.vue'
import PageThree0 from '../views/page_three0.vue'
import PageFour from '../views/page_four.vue'
import PageFour0 from '../views/page_four0.vue'
import PageFive from '../views/page_five.vue'
import PageFive0 from '../views/page_five0.vue'
import MPhone from '../views/mPhone.vue'
import Item from '../views/item.vue'
import Item0 from '../views/item0.vue'
import Cart from '../views/cart.vue'
import Checkout from '../views/checkout.vue'
import Payment from '../views/payment.vue'
import Account from '../views/account.vue'
import Order from '../views/Account/order.vue'
import Site from '../views/Account/address.vue'
import Login from '../components/login_register.vue'
import Evaluate from '../views/evaluate.vue'
import Portal from '../views/myself/portal.vue'
import Message from '../views/myself/message.vue'
import Business1 from '../views/business1.vue'
import Business2 from '../views/business2.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    /* 重定向 */
    redirect: '/Home0',
    name: Home0
  },
  {
    path: '/Login',
    component: Login,
    name: Login
  },
  {
    path: '/Home0',
    component: Home0
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/MPhone',
    component: MPhone
  },
  {
    path: '/shop',
    component: shop
  },
  {
    path: '/shop0',
    component: shop0
  },
  {
    path: '/PageOne',
    component: PageOne
  },
  {
    path: '/PageOne0',
    component: PageOne0
  },
  {
    path: '/PageTwo',
    component: PageTwo
  },
  {
    path: '/PageTwo0',
    component: PageTwo0
  },
  {
    path: '/PageThree',
    component: PageThree
  },
  {
    path: '/PageThree0',
    component: PageThree0
  },
  {
    path: '/PageFour',
    component: PageFour
  },
  {
    path: '/PageFour0',
    component: PageFour0
  },
  {
    path: '/PageFive',
    component: PageFive,
    name: 'PageFive'
  },
  {
    path: '/PageFive0',
    component: PageFive0,
    name: 'PageFive0'
  },
  {
    path: '/Item',
    name: 'Item',
    component: Item
  },
  {
    path: '/Item0',
    name: 'Item0',
    component: Item0
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/Payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/Evaluate',
    name: 'Evaluate',
    component: Evaluate
  },
  {
    path: '/Portal',
    name: 'Portal',
    component: Portal
  },
  {
    path: '/Message',
    name: 'Message',
    component: Message
  },
  {
    path: '/Account',
    component: Account,
    children: [{
      path: '/Order',
      name: 'Account',
      component: Order
    },
    {
      path: '/Site',
      name: 'Site',
      component: Site
    }]
  },
  {
    path: '/Business1',
    name: 'Business1',
    component: Business1
  },
  {
    path: '/Business2',
    name: 'Business2',
    component: Business2
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'current',
  base: process.env.BASE_URL,
  routes
})
export default router
