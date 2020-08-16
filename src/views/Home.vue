<template>
  <div class="home">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div class="photo">
          <img src="../assets/logo.png" alt="">
          <span>换糖记后台管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出登录</el-button>
      </el-header>
      <!-- 左边导航区域 -->
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <!-- 字体图标 -->
                <i class="el-icon-location"></i>
                <!-- 标题 -->
                <span>导航一</span>
              </template>
              <!-- 二级模板 -->
              <el-menu-item index="1-4-1">
                <!-- 字体图标 -->
                <i class="el-icon-location"></i>
                <!-- 标题 -->
                <span>导航一</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
              <!-- 主题内容部分 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  created () {

  },

  methods: {
    logout () {
      // console.log(111)
      sessionStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang='less'>
.el-container,.home{
  height: 100%;
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
    background: #006266;
    height: 100%;
  }
  .el-main{
    background: #f7f1e3;
    height: 100%;
  }
}

</style>
