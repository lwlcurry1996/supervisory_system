<template>
  <div class="home">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div class="photo">
          <img src="../assets/timg.jpg" alt="">
          <span>换糖记后台管理系统</span>
        </div>
        <el-button type="info" @click="logout" icon="el-icon-switch-button">退出登录</el-button>
      </el-header>
      <!-- 左边导航区域 -->
      <el-container>
        <el-aside :width="collapseFlag? '64px': '200px'">
          <div class="toggleMenu" @click="collapseFlag=!collapseFlag"><i class="el-icon-open"></i></div>
          <!-- <div class="toggleMenu" @click="collapseFlag=!collapseFlag"><i class="el-icon-turn-off"></i></div> -->
          <el-menu
            router
            :collapse-transition="false"
            :collapse="collapseFlag"
            unique-opened
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409eff">
            <!-- 一级菜单 -->
            <el-submenu :index="item.id + ''" v-for="item in menus" :key="item.id">
              <template slot="title">
                <!-- 字体图标 -->
                <i :class="iconsList[item.id]"></i>
                <!-- 标题 -->
                <span>{{item.authName}}</span>
              </template>
              <!-- 二级模板 -->
              <el-menu-item :index="'/'+ item2.path" v-for="item2 in item.children" :key="item2.id">
                <!-- 字体图标 -->
                <i class="el-icon-s-unfold"></i>
                <!-- 标题 -->
                <span>{{item2.authName}}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 主题内容部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [],
      iconsList: {
        125: 'iconfont icon-users',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      },
      collapseFlag: false,
      activeIndex: ''
    }
  },

  created () {
    this.getlist()
    this.activeIndex = this.$route.path
  },

  methods: {
    // 点击按钮退出
    logout () {
      // console.log(111)
      sessionStorage.removeItem('token')
      // 编程式导航到login
      this.$router.push('/login')
    },
    // 获取左边导航栏数据
    async getlist () {
      // 获取数据并且解构赋值给res
      var { data: res } = await this.$axios.get('menus')
      console.log(res)
      if (res.meta.status === 200) {
        this.menus = res.data
        console.log(this.menus)
      }
    }
  }
}
</script>

<style scoped lang='less'>
.el-container,.home{
  height: 100%;
  user-select: none;
    .el-header{
    background: #2980b9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    .photo{
      display: flex;
      align-items: center;
      img{
        height: 60px;
        width: 60px;
        border-radius: 50%;
        border: 1px solid blue;
        box-shadow: 0px 0px 10px yellow;
      }
      span{
        font-size: 25px;
        margin-left: 20px;
        color: #fff;
      }
    }
  }
  .el-aside{
    background: #3d3d3d;
    height: 100%;
    .toggleMenu{
      width: 100%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      font-size: 35px!important;
      .el-icon-open{
        color: #545c64!important;
      }
    }
    .iconfont{
      margin-right: 10px;
    }
    span{
      font-size: 15px;
    }
  }
  .el-main{
    background: #f7f1e3;
    height: 100%;
  }
  .el-menu{
    border-right: 0;
  }
}

</style>
