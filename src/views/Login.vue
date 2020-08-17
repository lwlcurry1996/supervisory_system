<template>
  <div class="login">
    <!-- 登录框 -->
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar">
        <img src="../assets/log0.jpg" alt="">
      </div>
      <!-- 用户信息区域 -->
      <el-form class="login_form" :model="loginForm" :rules="loginFormRules" ref='loginForm'>
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-s-custom" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" prefix-icon="el-icon-lock" v-model="loginForm.password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单的验证规则
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },

  created () {

  },

  methods: {
    // 重置表单
    resetForm () {
      this.$refs.loginForm.resetFields()
    },
    login () {
      // console.log(11)
      // 在登录之前先验证用户名和密码是否合法
      this.$refs.loginForm.validate(async flag => {
        if (!flag) return
        const { data: res } = await this.$axios.post('/login', this.loginForm)
        // console.log(this.$axios)
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        this.$message.success('登录成功')
        sessionStorage.setItem('token', res.data.token)
        // 编程式导航
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style scoped lang='less'>
  .login{
    width: 100%;
    height: 100%;
    background: url('../assets/cscode.jpg');
    position: relative;
    .login_box{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 450px;
      height: 300px;
      background: rgba(41, 128, 185,0.6);
      border-radius: 10px;
      .avatar{
        width: 100px;
        height: 100px;
        border: 1px solid blueviolet;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        background: rgba(108, 92, 231, 0.8);
        top: -50px;
        box-shadow: 0px 0px 10px blueviolet;

        img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        }
      }
      .login_form{
        padding: 80px 50px 0 50px;
        .btn{
          display: flex;
          justify-content: center;
        }
      }
    }
  }
</style>
