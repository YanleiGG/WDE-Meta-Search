<template>
  <el-container>
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <span class="title">采集统计</span>
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
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-main style="margin:15px">
      <el-row>
        <main-result></main-result>
        <el-col :span="6" :offset="2">
          <el-card shadow="never">
            <el-row class="collectMsg">任务执行次数： {{ task.exec_times }}</el-row>
            <el-row class="collectMsg">总采集量： {{ task.res_nums }}</el-row>
            <el-row class="collectMsg">去重后的采集量： {{ task.uniq_res }}</el-row>
            <el-row>
              <el-button type="danger" style="width:100%" @click="stopTask" :loading="loading">停止任务</el-button>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import MainResult from './MainResult.vue'
import { mapMutations, mapState } from 'vuex'
import axios from 'axios'

export default {
  components: {
    'main-result': MainResult
  },
  data() {
    return {
      activeIndex: '1',
      loading: false
    }
  },
  methods: {
    stopTask() {
        this.$confirm('确定停止该任务吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          this.loading = true
          let res = await axios.get(`${this.path}/timing/stop?task_id=${this.taskId}`)
          // 根据header判断状态 (此处还未完善!!!!!!!)
          this.$notify({
            title: '停止成功',
            message: `任务ID：${this.taskId}`,
            type: 'success'
          })
          this.loading = false
        }).catch((err) => {})
    }
  },
  computed: {
    ...mapState({
      task: state => state.task,
      taskId: state => state.taskId,
      path: state => state.path
    }), 
  }
}
</script>
<style scope>
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
.collectMsg{
  margin-top:10px;
  font-size: 18px;
  margin-bottom: 20px;
}
</style>
