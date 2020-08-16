<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-button type="info" @click="logout">退出登录</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
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
.el-header{
  background: red;
}
.el-aside{
  background: green;
}
.el-main{
  background: greenyellow;
}
</style>
