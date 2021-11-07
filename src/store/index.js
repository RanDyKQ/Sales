/* 引入vue和vuex */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var VueCookie = require('vue-cookies')
export default new Vuex.Store({
  state: {
    token: VueCookie.get('token'),
    /* 存放数据 */
    carPanelData: [],
    addressData: [],
    /* 是否为最大值 */
    maxOff: false,
    /* 控制隐藏显示 */
    carShow: false,
    show: true,
    /* 地址 */
    receiveInfo: [{
      name: '王某某',
      phone: '15659002441',
      areaCode: '010',
      landLine: '64627856',
      provinceId: 110000,
      province: '北京市',
      cityId: 110100,
      city: '市辖区',
      countyId: 110106,
      county: '海淀区',
      add: '上地十街辉煌国际西6号楼319室',
      default: true
    }, {
      name: '李某某',
      phone: '13831731807',
      areaCode: '010',
      landLine: '64627856',
      provinceId: 110000,
      province: '北京市',
      cityId: 110100,
      city: '市辖区',
      countyId: 110106,
      county: '海淀区',
      add: '上地十街辉煌国际东6号楼350室',
      default: false
    }],
    orderData: [],
    provisionalOrder: []
  },
  /* 购物车中的计算 */
  getters: {
    /* 数量 */
    totalCount (state) {
      let count = 0
      state.carPanelData.forEach(goods => {
        count += goods.count
      })
      return count
    },
    /* 价格计算 */
    totalPrice (state) {
      let price = 0
      state.carPanelData.forEach(goods => {
        price += goods.count * goods.price
      })
      return price
    },
    /* 全选 */
    allChecked (state) {
      let allcheck = true
      state.carPanelData.forEach(goods => {
        if (!goods.check) {
          allcheck = false
          return allcheck
        }
      })
      return allcheck
    },
    /* 购物清单页计算数量 */
    checkedCount (state) {
      let count = 0
      state.carPanelData.forEach(goods => {
        if (goods.check) {
          count += goods.count
        }
      })
      return count
    },
    /* 当前加入商品 */
    checkGoods (state) {
      let checkGoods = []
      state.carPanelData.forEach(goods => {
        if (goods.check) {
          checkGoods.push(goods)
        }
      })
      return checkGoods
    },
    /* 购物清单页计算总金额 */
    checkedPrice (state) {
      let price = 0
      state.carPanelData.forEach(goods => {
        if (goods.check) {
          price += goods.price * goods.count
        }
      })
      return price
    }
  },
  mutations: {
    saveToken (state, token) {
      state.token = token
      // 设置存储
      VueCookie.set('token', token, { expires: '30s' })
    },
    /* 添加商品 */
    addCarpanelData (state, data) {
      /* bOff是判断购物车是否添加过 */
      let bOff = true// eslint-disable-line no-unused-vars
      state.carPanelData.forEach(goods => {
        if (goods.sku_id === data.info.sku_id) {
          goods.count += data.count
          if (goods.count > goods.limit_num) {
            goods.count -= data.count
            state.maxOff = true
            bOff = false
            return
          }
          bOff = false
          state.carShow = true
        }
      })
      if (bOff) {
        state.carShow = true
        let goodsData = data.info
        /* 默认属性 */
        Vue.set(goodsData, 'count', data.count)
        Vue.set(goodsData, 'check', true)
        state.carPanelData.push(goodsData)
      }
    },
    /* 删除购物车商品 */
    delCarpanelData (state, id) {
      state.carPanelData.forEach((goods, index) => {
        if (goods.sku_id === id) {
          state.carPanelData.splice(index, 1)
          return state
        }
      })
    },
    delAddress (state, data) {
      state.addressData.forEach((receiveInfo, index) => {
        if (receiveInfo.data === data) {
          state.Address.splice(index, 1)
          return state
        }
      })
    },
    alertPrompt (state) {
      state.maxOff = true
    },
    /* 关闭弹窗 */
    closePrompt (state) {
      state.maxOff = false
    },
    /* 显示购物车 */
    showCar (state) {
      state.carShow = true
    },
    /* 隐藏购物车 */
    hideCar (state) {
      /* 计时器 */
      setTimeout(() => {
        state.carShow = false
      }, 500)
    },
    /* 收货地址中设为默认地址 */
    checkDefault (state, data) {
      state.receiveInfo.forEach((receive, index) => {
        if (receive === data) {
          receive.default = true
        } else {
          receive.default = false
        }
      })
    },
    /* 购物清单中的增加 */
    plusCartpanelData (state, id) {
        state.carPanelData.forEach((goods, index) => {
          if (goods.sku_id === id) {
            if (goods.count >= goods.limit_num) return
            goods.count++
            return state
          }
        })
    },
    /* 购物清单中的减少 */
    subCartpanelData (state, id) {
      state.carPanelData.forEach((goods, index) => {
        if (goods.sku_id === id) {
          if (goods.count <= 1) return
          goods.count--
          return state
        }
      })
    },
    checkGoods (state, id) {
      state.carPanelData.forEach((goods, index) => {
        if (goods.sku_id === id) {
          goods.check = !goods.check
          return state
        }
      })
    },
    /* 控制全选 */
    allCheckGoods (state, allChecked) {
      state.carPanelData.forEach((goods, index) => {
        goods.check = !allChecked
      })
    },
    /* 删除选中的商品 */
    delCheckGoods (state) {
      /* state.carPanelData.forEach((goods, index) => {
        if (goods.check) {
          state.carPanelData.splice(index, 1)
        }
      }) */
      let i = state.carPanelData.length
      while (i--) {
        if (state.carPanelData[i].check) {
          state.carPanelData.splice(i, 1)
        }
      }
    },
    /* 添加收货人信息 */
    submitInfo (state, data) {
      if (data.default) {
        state.receiveInfo.forEach((receive) => {
          receive.default = false
        })
        state.receiveInfo.push(data)
      }
    },
    /* 提交订单 */
    submitOrder (state, data) {
      state.orderData.unshift(data)/* unshift使数据始终排在最前面 */
      /* 将购物车中的数据全部删掉 */
      let i = state.carPanelData.length
      while (i--) {
        /* 判断是否选中 */
        if (state.carPanelData[i].check) {
          /* 删除 */
          state.carPanelData.splice(i, 1)
        }
      }
    },
    submitReceive (state, data) {
      if (data[0].default) {
        state.receiveInfo.forEach((receive, index) => {
          receive.default = false
          receive.checked = false
        })
      }
      if (data[1] === null) {
        state.receiveInfo.push(data[0])
      } else {
        console.log(data[0])
        state.receiveInfo[data[1]] = data[0]
      }
    },
    /* 支付成功 */
    payNow (state, id) {
      /* 遍历 */
      state.orderData.forEach((order) => {
        if (order.orderId === id) {
          order.isPay = true
          return order.isPay
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
