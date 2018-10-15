<template>
  <el-container>
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <span class="title">定时任务管理</span>
        </el-col>
        <el-col :span="2" :offset="18">
          <el-tooltip content="搜索" placement="top">
            <span class="el-dropdown-link">
              <router-link to='/'>
                <i class="el-icon-search el-icon--right"></i>
              </router-link>
            </span>
          </el-tooltip>
          <el-dropdown style="margin-top: 20px;">
            <span class="el-dropdown-link">
              <i class="el-icon-more el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/manage/keywords">关键词管理</router-link>
              </el-dropdown-item>
              <router-link to="/manage/timeTask">
                <el-dropdown-item>定时任务管理</el-dropdown-item>
              </router-link>
              <el-dropdown-item>采集统计</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-main style="margin:50px">
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.header{
  padding: 0;
  background-color:#3949AB;
  color: white;
}
.el-dropdown-link{
  cursor: pointer;
  color: white;
  font-size: 18px;
  margin-right: 20px;
}
.title{
  color: white;
  font-size: 20px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  display: inline-block;
  margin: 15px 30px;
}
</style>
