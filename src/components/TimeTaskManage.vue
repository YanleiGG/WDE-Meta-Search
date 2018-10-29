<template>
  <el-container>
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <span class="title">定时任务管理</span>
        </el-col>
        <el-col :span="8" :offset="1">
          <el-menu
            :default-active="'1'"
            v-model="activeIndex"
            class="el-menu-demo" 
            mode="horizontal" 
            background-color="#3949AB"
            ext-color="#fff"
            active-text-color="#fff"
            @select="handleSelect">
            <el-menu-item index="1">任务查询</el-menu-item>
            <el-menu-item index="2">任务创建</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="2" :offset="9">
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
              <router-link to="/manage/collect">
                <el-dropdown-item>采集统计</el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-main style="margin:75px 50px">
      <el-row v-if="activeIndex==1">
        <el-col :span="16" :offset="4" style="text-align:center">
          <div class="t-title">定时任务查询</div>
          <div>
            <span style="width:70px;display:inline-block">任务ID：</span>
            <el-input style="width:70%" v-model="taskId"></el-input>
            <el-button style="margin-left:20px" type="primary" @click="queryTask">查询</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row v-if="activeIndex==2">
        <el-col :span="16" :offset="4" style="text-align:center">
          <div class="t-title">创建定时任务</div>
          <span class="inputTitle">搜索内容：</span>
          <el-input style="width:70%" v-model="searchText"></el-input>
          <span style="display:inline-block;width:40px"></span>
          <br/>
          <span  class="inputTitle">执行策略：</span>
          <el-input-number style="width:70%"  v-model="time" :min="0"></el-input-number>
          <span style="display:inline-block;width:40px">小时</span>
          <br/>
          <el-button style="margin-left:80px" type="primary" @click="createTask">创建</el-button>
          <el-button type="primary">取消</el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      activeIndex: '1',
      taskId: '',
      searchText: '',
      time: ''
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key
    },
    async createTask() {
      const h = this.$createElement
      let errMsg = ""
      if (typeof(this.time) !== 'number') errMsg = '执行策略必须为数字！'
      if (this.time === '') errMsg = '执行策略不能为空！'
      if (this.searchText === '') errMsg = '搜索内容不能为空！'
      if (!errMsg) {
        return this.$message({
          message: h('p', null, [
            h('span', null, errMsg)
          ])
        })
      }
      let res = await axios.post(`${this.path}/timing/search`, {
        query: this.searchText,
        hours: Number(time)
      })
      let id = res.data
      this.$alert(`任务ID:${id}`, '创建成功', {
        confirmButtonText: '确定',
      })
    },
    async queryTask() {
      const h = this.$createElement
      if (this.taskId==='') {
        return this.$message({
          message: h('p', null, [
            h('span', null, '任务ID不能为空!')
          ])
        })
      }
      let res = await axios.get(`${this.path}/search/getlist?task_id=${this.taskId}`)
    }
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
.el-menu-item{
  color: white;
}
.t-title{
  font-size: 25px;
  margin-bottom: 50px;
  margin-left:40px;
}
.inputTitle{
  width:80px;
  display:inline-block;
  margin-bottom:35px;
}
</style>
