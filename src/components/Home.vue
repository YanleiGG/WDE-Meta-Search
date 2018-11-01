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
              <router-link to="/manage/collect">
                <el-dropdown-item>采集统计</el-dropdown-item>
              </router-link>
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
          <el-input placeholder="请输入搜索内容" v-model="simple.searchText" class="input-with-select" clearable>
          <el-select v-model="simple.browser" slot="prepend" placeholder="搜索引擎" multiple  :collapse-tags='true'>
            <el-option label="百度" value="baidu"></el-option>
            <el-option label="谷歌" value="google"></el-option>
            <el-option label="必应" value="bing"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="simpleSearch">
          </el-button>
          </el-input>
          <div class="keywords">
            <span @click='tagClick("标签一")'>
              <el-tag>标签一</el-tag>
            </span>
            <span @click='tagClick("标签一")'>
              <el-tag>标签一</el-tag>
            </span>
            <span @click='tagClick("标签一")'>
              <el-tag>标签一</el-tag>
            </span>
            <span @click='tagClick("标签一")'>
              <el-tag>标签一</el-tag>
            </span>
          </div>
        </el-col>
      </el-row>
      <el-dialog
        title="高级搜索"
        :visible.sync="advancedDialog"
        width="80%"
        :collapse-tags='true'>
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
                <el-input style="width:70%" v-model="advanced.allKeys" id="allKeys" @focus="selectedInputId='allKeys'"></el-input>
              </el-col>
            </el-row>
            <el-row style="margin-bottom:15px;">
              <el-col>
                <span style="width:170px;display:inline-block">包含以下的完整关键词：</span>
                <el-input style="width:70%" v-model="advanced.completedKeys" id="completedKeys" @focus="selectedInputId='completedKeys'"></el-input>
              </el-col>
            </el-row>
            <el-row style="margin-bottom:15px;">
              <el-col>
                <span style="width:170px;display:inline-block">包含以下任意一个关键词：</span>
                <el-input style="width:70%" v-model="advanced.arbitKeys" id="arbitKeys" @focus="selectedInputId='arbitKeys'"></el-input>
              </el-col>
            </el-row>
            <el-row style="margin-bottom:15px;">
              <el-col>
                <span style="width:170px;display:inline-block">不包括以下关键词：</span>
                <el-input style="width:70%" v-model="advanced.exKeys" id="exKeys" @focus="selectedInputId='exKeys'"></el-input>
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
                v-model="advanced.datetime"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width:70%">
              </el-date-picker>
            </div>           
          </el-col>
          <el-col :span="7" :offset="1">
            <el-col :span="6" class="keyword">
              <span @click='tagAdvancedClick("标签一")'>
                <el-tag>标签一</el-tag>
              </span>
            </el-col>
            <el-col :span="6" class="keyword">
              <span @click='tagAdvancedClick("标签一")'>
                <el-tag>标签一</el-tag>
              </span>
            </el-col>
            <el-col :span="6" class="keyword">
              <span @click='tagAdvancedClick("标签一")'>
                <el-tag>标签一</el-tag>
              </span>
            </el-col>
            <el-col :span="6" class="keyword">
              <span @click='tagAdvancedClick("标签一")'>
                <el-tag>标签一</el-tag>
              </span>
            </el-col>
            <el-col :span="6" class="keyword">
              <span @click='tagAdvancedClick("标签一")'>
                <el-tag>标签一</el-tag>
              </span>
            </el-col>
            <el-col :span="6" class="keyword">
              <span @click='tagAdvancedClick("标签一")'>
                <el-tag>标签一</el-tag>
              </span>
            </el-col>
          </el-col>   
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="advancedSearch" >高级搜索</el-button>
        </span>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { mapMutations, mapState } from 'vuex'

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
        datetime: ''
      },
      advancedDialog: false
    }
  },
  methods: {
    ...mapMutations([
      'setSimpleBrowsers',
      'setAdvancedBrowsers',
      'setResults',
      'setResultPageQuery',
      'setKeywords',
      'setTaskId'
    ]),
    async simpleSearch() {
      this.$router.push({path: '/result'})
      return
      let res = await axios.post(`${this.path}/search/crawllist`, {
        query: this.simple.searchText,
        se: this.simple.browser
      })
      let id = res.data
      let res2 = await axios.get(`${this.path}/search/getlist?task_id=${id}`)
      this.setTaskId({ taskId: id })
      this.setResults({ results: res2.data.gather_list })
      this.setResultPageQuery({ resultPageQuery: this.simple.searchText })
    },
    async advancedSearch() {
      this.$router.push({path: '/result'})
      this.advancedDialog = false
      return
      let start_time = moment(this.advanced.datetime[0]).unix()
      let end_time = moment(this.advanced.datetime[1]).unix()
      let query = `${this.advanced.allKeys}&${this.advanced.completedKeys}|${this.advanced.arbitKeys}!${this.advanced.exKeys}`
      let res = await axios.post(`${this.path}/search/crawllist_advanced`, {
        query,
        se: this.advanced.browser,
        site: this.advanced.website,
        start_time,
        end_time
      })
      let id = res.data
      let res2 = await axios.get(`${this.path}/search/getlist?task_id=${id}`)
      this.setTaskId({ taskId: id })
      this.setResults({ results: res2.data.gather_list })
      this.setResultPageQuery({ resultPageQuery: query })
    },
    tagClick(content) {
      this.simple.searchText += ' ' + content
    },
    tagAdvancedClick(content) {
      this.advanced[this.selectedInputId] += ' ' + content
    }
  },
  computed: {
    ...mapState({
      path: state => state.path,
      simpleBrowsers: state => state.simpleBrowsers,
      advancedBrowsers: state => state.advancedBrowsers,
      keywords: state => state.keywords,
      resultPageQuery: state => state.resultPageQuery,
    }),  
  },
  async created() {
    return
    // 获取通用搜索引擎
    let res = await axios.get(`${this.path}/se/totalse`)
    this.setSimpleBrowsers({ simpleBrowsers: res.data.se })
    // 获取高级搜索引擎
    let res2 = await axios.get(`${this.path}/se/advancedse`)
    this.setAdvancedBrowsers({ advancedBrowsers: res2.data.se })
    // 获取关键词
    let res3 = await axios.get(`${this.path}/query/get`)
    this.setKeywords({ keywords: res3.data.querys })
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
