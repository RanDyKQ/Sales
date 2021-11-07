<template>
    <el-container>
        <el-header class="h">
          <ul class="ttt">
            <li><img src="../assets/img/logo.png"></li>
            <li class="bu">商家后台专用系统</li>
          </ul>
          <ul class="exit">
            <li><a>昵称</a></li>
            <li>|</li>
            <li><router-link to="/Login">退出</router-link></li>
          </ul>
        </el-header>
        <el-container>
            <el-aside width="150px" class="a">
              <el-row class="tac">
                <el-col :span="12" style="width:100%">
                  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu index="1">
                      <template>
                        <span slot="title" style="font-size:12px"><router-link to="/Business1" style="color:#fff">用户管理</router-link></span>
                      </template>
                    </el-submenu>
                    <el-submenu index="2">
                      <template>
                        <span slot="title" style="font-size:12px;color:orange">订单管理</span>
                      </template>
                    </el-submenu>
                    <el-submenu el-submenu index="3">
                      <template slot="title">
                        <span style="font-size:12px">采购单管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item index="1-1" style="min-width:10px;font-size:10px">采购开单</el-menu-item>
                        <el-menu-item index="1-2" style="min-width:10px;font-size:10px">采购单列表</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                      <template slot="title">
                        <span style="font-size:12px">供应商管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item index="3-1" style="min-width:10px;font-size:10px">供应商列表</el-menu-item>
                        <el-menu-item index="3-2" style="min-width:10px;font-size:10px">供应商绩效管理</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                      <template slot="title">
                        <span style="font-size:12px">仓库管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item index="4-1" style="min-width:10px;font-size:10px">仓库列表</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="6">
                      <template slot="title">
                        <span style="font-size:12px">采购商品管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item index="5-1" style="min-width:10px;font-size:10px">商品列表</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                  </el-menu>
                </el-col>
              </el-row>
            </el-aside>
        <el-container>
        <el-main class="m">
          <h5>订单管理</h5>
          <br>
          <div>
            订单号查询：<el-input placeholder="请输入内容" v-model="input" clearable style="width:14%"></el-input>
            <el-button style="margin-left:3px">查询</el-button>
            <span style="margin-left:10px">时间查询：</span><el-date-picker style="margin-left:27px" v-model="value1" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
            <el-button style="margin-left:3px">查询</el-button>
            <span style="margin-left:10px">名称查询：</span><el-input placeholder="请输入内容" v-model="input" clearable style="width:14%"></el-input>
            <el-button style="margin-left:3px">查询</el-button>
          </div>
          <br><br>
          <div>
            数量查询：<el-input placeholder="请输入内容" v-model="input" clearable style="width:14%;margin-left:14px"></el-input>
            <el-button style="margin-left:3px">查询</el-button>
            <span style="margin-left:10px">发货状态查询：</span>
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-button style="margin-left:3px">查询</el-button>
            <span style="margin-left:10px">价格查询：</span><el-input placeholder="请输入内容" v-model="input" clearable style="width:14%"></el-input>
            <el-button style="margin-left:3px">查询</el-button>
          </div>
          <br>
          <el-table :data="tableData1" style="width:100%;margin-top:1%;" max-height="450">
            <el-table-column fixed prop="id" label="订单号" width="180"></el-table-column>
            <el-table-column fixed prop="date" label="交易时间" width="180"></el-table-column>
            <el-table-column fixed prop="name" label="品牌" width="180"></el-table-column>
            <el-table-column fixed prop="color" label="颜色" width="120"></el-table-column>
            <el-table-column fixed prop="specifications" label="规格" width="120"></el-table-column>
            <el-table-column fixed prop="price" label="售价" width="120"></el-table-column>
            <el-table-column fixed prop="num" label="数量" width="120"></el-table-column>
            <el-table-column fixed prop="state" label="状态" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
              <template slot-scope="scope">
                <el-button type="text" size="small">编辑</el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData1)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
    </el-container>
  </el-container>
</el-container>
</template>
<script>
export default {
  data () {
    return {
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
        text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      value: '',
      value1: '',
      tableData1: [{
        id: '1619156627039',
        date: '2021-01-01',
        name: '小米10',
        color: '红色',
        specifications: '裸机',
        price: '1999',
        num: '1',
        state: '待发货'
      },
      {
        id: '1619156627034',
        date: '2021-01-05',
        name: '小米10至尊纪念版',
        color: '绿色',
        specifications: '裸机',
        price: '1899',
        num: '2',
        state: '已发货'
      },
      {
        id: '1619156627035',
        date: '2021-01-10',
        name: '小米10 青春版 5G',
        color: '蓝色',
        specifications: '裸机',
        price: '1999',
        num: '1',
        state: '已发货'
      },
      {
        id: '1619156600765',
        date: '2020-06-23',
        name: 'Redmi K30 至尊纪念版',
        color: '黑色',
        specifications: '裸机',
        price: '3999',
        num: '1',
        state: '已发货'
      },
      {
        id: '1719356960765',
        date: '2020-08-28',
        name: 'Redmi K30 5G',
        color: '红色',
        specifications: '裸机',
        price: '2999',
        num: '2',
        state: '待发货'
      }],
      options: [{
        value: '选项1',
        label: '待发货'
      },
      {
        value: '选项2',
        label: '已发货'
      }]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    /* 移除操作 */
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>
<style>
.h, .f {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .h .ttt {
    display: inline-block;
    margin-left: 20%;
  }
.h .ttt li{
  display: inline;
  float: left;
  margin-left: 40px;
  font-size: 18px;
}
.h li>img{
  width: 85%;
  height: 85%;
  margin-top: 15%;
  margin-left: -600%;
}
.bu{
  margin-left: 20%;
  font-size: 20px;
}
.h .exit{
  display: inline-block;
  margin-left: 48%;
}
.h .exit li{
  display: inline;
  float: left;
  margin-left: 30px;
  font-size: 18px;
}
.a {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}

  .m {
    background-color: #E9EEF3;
    color: #333;
    position: relative;
  }
.m ul li{
  float: left;
}
.m .s{
  position: absolute;
  top: 10%;
  left: 4%;
}
.m .x{
  position: absolute;
  top: 20%;
  left: 4%;
}
  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .m h5{
    font-size: 20px;
  }
  .o{
      margin-top: 200px;
  }
  .o li{
    padding-left: 40px;
  }
  .m .nnn{
    position: absolute;
    top:400px;
    left:140px;
  }
  .m .ppp{
    position: absolute;
    top:400px;
    left:286px;
  }
  .m .hhh{
    position: absolute;
    top:400px;
    left:440px;
  }
    .m .aaa{
    position: absolute;
    top:400px;
    left:600px;
  }
      .m .ccc{
    position: absolute;
    top:400px;
    left:745px;
  }
        .m .ddd{
    position: absolute;
    top:400px;
    left:890px;
  }
  .bbb li{
    margin-left: 100px;
    font-size: 16px;
    margin-top: 20px;
  }
</style>
