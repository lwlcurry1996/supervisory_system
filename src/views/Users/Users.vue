<template>
  <div >
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片区域 -->
    <el-card class="box-card">
      <!-- 搜索框 -->
      <el-row :gutter="18">
        <el-col :span="7">
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-loading"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" plain icon="el-icon-circle-plus-outline">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 表格区域 -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="#">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="email" label="邮箱">
        </el-table-column>
        <el-table-column prop="phone" label="电话">
        </el-table-column>
        <el-table-column prop="role" label="角色">
        </el-table-column>
        <el-table-column prop="state" label="状态">
          <el-switch v-model="value">
          </el-switch>
        </el-table-column>
        <el-table-column prop="operation" label="操作" width="200px">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
          <el-button type="warning" icon="el-icon-setting" circle></el-button>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '1',
        name: 'uzi',
        email: '2526341@qq.com',
        phone: '4008625'
      }, {
        date: '2',
        name: 'faker',
        email: '2526341@qq.com',
        phone: '4008625'
      }]
    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style scoped lang='less'>
.el-pagination{
  margin-top: 15px;
}
</style>
