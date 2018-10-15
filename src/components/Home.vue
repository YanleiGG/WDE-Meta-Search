<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :offset="21" :span="3">
          <el-button type="text" class="advancedSearch" @click="advancedDialog = true">高级搜索</el-button>
          <el-dropdown style="margin-top: 15px;">
            <span class="el-dropdown-link">
              <i class="el-icon-more el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/manage/keywords">
                <el-dropdown-item>关键词管理</el-dropdown-item>
              </router-link>
              <router-link to="/manage/timeTask">
                <el-dropdown-item>定时任务管理</el-dropdown-item>
              </router-link>
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
          <el-input placeholder="请输入搜索内容" v-model="simple.searchText" class="input-with-select">
            <el-select v-model="simple.browser" slot="prepend" placeholder="搜索引擎" multiple  :collapse-tags='true'>
              <el-option label="百度" value="baidu"></el-option>
              <el-option label="谷歌" value="google"></el-option>
              <el-option label="必应" value="bing"></el-option>
            </el-select>
              <el-button slot="append" icon="el-icon-search" @click="toResult">
                <router-link to="/result" id="toResult"></router-link>
              </el-button>
          </el-input>
          <div class="keywords">
            <el-tag>标签一</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag>标签一</el-tag>
            <el-tag>标签一</el-tag>
          </div>
        </el-col>
      </el-row>
      <el-dialog
        title="高级搜索"
        :visible.sync="advancedDialog"
        width="80%"
        style="margin-top:-5vh">
        <el-row>
          <el-col :span="15">
            <el-row style="margin-bottom:15px;">
              <el-col>
                <span style="width:170px;display:inline-block">搜索引擎：</span>
                <el-select class="browserSelect" v-model="advanced.browser" multiple>
                  <el-option label="百度" value="baidu"></el-option>
                  <el-option label="谷歌" value="google"></el-option>
                  <el-option label="必应" value="bing"></el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row style="margin-bottom:15px;">
              <el-col>
                <span style="width:170px;display:inline-block">包含以下全部的关键词：</span>
                <el-input style="width:70%" v-model="advanced.allKeys"></el-input>
              </el-col>
            </el-row>
            <el-row style="margin-bottom:15px;">
              <el-col>
                <span style="width:170px;display:inline-block">包含以下的完整关键词：</span>
                <el-input style="width:70%" v-model="advanced.completedKeys"></el-input>
              </el-col>
            </el-row>
            <el-row style="margin-bottom:15px;">
              <el-col>
                <span style="width:170px;display:inline-block">包含以下任意一个关键词：</span>
                <el-input style="width:70%" v-model="advanced.arbitKeys"></el-input>
              </el-col>
            </el-row>
            <el-row style="margin-bottom:15px;">
              <el-col>
                <span style="width:170px;display:inline-block">不包括以下关键词：</span>
                <el-input style="width:70%" v-model="advanced.exKeys"></el-input>
              </el-col>
            </el-row>
            <el-row style="margin-bottom:15px;">
              <el-col>
                <span style="width:170px;display:inline-block">站内搜索：</span>
                <el-input style="width:70%" v-model="advanced.website"></el-input>
              </el-col>
            </el-row>   
            <div class="timePicker">
              <span style="width:170px;display:inline-block" class="demonstration">时间段：</span>
              <el-date-picker
                v-model="advanced.date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width:70%">
              </el-date-picker>
            </div>           
          </el-col>
          <el-col :span="7" :offset="1">
            <el-col :span="6" class="keyword">
              <el-tag>标签一</el-tag>
            </el-col>
            <el-col :span="6" class="keyword">
              <el-tag>标签一</el-tag>
            </el-col>
            <el-col :span="6" class="keyword">
              <el-tag>标签一</el-tag>
            </el-col>
            <el-col :span="6" class="keyword">
              <el-tag>标签一</el-tag>
            </el-col>
            <el-col :span="6" class="keyword">
              <el-tag>标签一</el-tag>
            </el-col>     
            <el-col :span="6" class="keyword">
              <el-tag>标签一</el-tag>
            </el-col>    
            <el-col :span="6" class="keyword">
              <el-tag>标签一</el-tag>
            </el-col>          
          </el-col>          
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="advancedDialog = false">高级搜索</el-button>
        </span>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      simple: {
        searchText: '',
        browser: [],
      },
      advanced: {
        allKeys: '',
        completedKeys: '',
        arbitKeys: '',
        exKeys: '',
        website: '',
        browser: [],
        date: ''
      },
      advancedDialog: false
    }
  },
  methods: {
    toResult() {
      document.getElementById('toResult').click()
    }
  }
}
</script>

<style scoped>
.search{
  margin-top: 25px;
}
.input-with-select{
  margin-bottom: 30px;
}
.title{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 30px;
  color: black;
}
.searchTabs{
  text-align: center;
}
.el-dropdown-link{
  font-size: 18px;
  cursor: pointer;
  color: black;
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
  margin-bottom: 20px;
}
.advancedSearch{
  font-size: 15px;
  margin-right: 25px;
  cursor: pointer;
}
.modalKeys{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.el-select .el-input{
  width: 150px;
}
.el-select__tags{
  max-width: 150px;
}
.keyword{
  margin-bottom:10px;
  cursor: pointer;
}
</style>
