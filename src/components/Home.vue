<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :offset="23">
          <el-dropdown style="margin-top: 15px;">
            <span class="el-dropdown-link">
              <i class="el-icon-more el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/manage/keywords">关键词管理</router-link>
              </el-dropdown-item>
              <el-dropdown-item>定时任务管理</el-dropdown-item>
              <el-dropdown-item>采集统计</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row style="text-align: center;margin-top:5%;">
        <span class="title">WDE Meta Search</span>
      </el-row>
      <el-row justify="space-around" class="search">
        <el-col :span="16" :offset="4">
          <el-tabs v-model="tabsActiveName" class="searchTabs">
            <el-tab-pane label="简单搜索" name="simple">
              <el-input placeholder="请输入搜索内容" v-model="simple.searchText" class="input-with-select">
                <el-select v-model="simple.browser" slot="prepend" placeholder="请选择">
                  <el-option label="百度" value="baidu"></el-option>
                  <el-option label="谷歌" value="google"></el-option>
                  <el-option label="必应" value="bing"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-tab-pane>
            <el-tab-pane label="高级搜索" name="advanced">
              <el-input placeholder="请输入搜索内容" v-model="advanced.searchText" class="input-with-select">
                <el-select v-model="advanced.browser" slot="prepend" placeholder="请选择">
                  <el-option label="百度" value="baidu"></el-option>
                  <el-option label="谷歌" value="google"></el-option>
                  <el-option label="必应" value="bing"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              <div class="timePicker">
                <span class="demonstration">时间段：</span>
                <el-date-picker
                  v-model="advanced.date"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="keywords">
            <el-tag>标签一</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag>标签一</el-tag>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      simple: {
        searchText: '',
        browser: '',
      },
      advanced: {
        searchText: '',
        browser: '',
        date: ''
      },
      tabsActiveName: 'simple',
      inputVisible: false
    }
  }
}
</script>

<style scoped>
.search{
  margin-top: 25px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.input-with-select{
  margin-bottom: 30px;
}
.title{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 30px;
}
.searchTabs{
  text-align: center;
}
.el-dropdown-link{
  cursor: pointer;
}
.keywords{
  text-align: left;
}
.keywords .el-tag{
  margin-right: 5px;
  cursor: pointer;
}
.timePicker{
  text-align: left;
  margin-top: 35px;
  margin-bottom: 20px;
}
a{
  text-decoration: none;
  color: inherit;
}
</style>
