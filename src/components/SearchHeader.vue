<template>
  <div>
    <el-row justify="space-around" class="search">
      <el-col :span="14" :offset="1">
        <el-input clearable placeholder="请输入搜索内容" v-model="resultPageQuery" class="input-with-select">
          <el-select style="width:150px" v-model="simple.browser" slot="prepend" placeholder="搜索引擎" multiple :collapse-tags='true'>
            <el-option v-for="item in simpleBrowsers" :key='item' :label="item" :value="item"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="simpleSearch"></el-button>
        </el-input>
      </el-col>
      <el-col :span="3" :offset="6">
        <el-button type="text" class="advancedSearch" @click="advancedDialog = true">高级搜索</el-button>
        <el-dropdown style="margin-top: 5px;">
          <span class="el-dropdown-link">
            <i  style="color: black;" class="el-icon-more el-icon--right"></i>
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
              <el-input clearable style="width:70%" v-model="advanced.allKeys" id="allKeys" @focus="selectedInputId='allKeys'"></el-input>
            </el-col>
          </el-row>
          <el-row style="margin-bottom:15px;">
            <el-col>
              <span style="width:170px;display:inline-block">包含以下的完整关键词：</span>
              <el-input clearable style="width:70%" v-model="advanced.completedKeys" id="completedKeys" @focus="selectedInputId='completedKeys'"></el-input>
            </el-col>
          </el-row>
          <el-row style="margin-bottom:15px;">
            <el-col>
              <span style="width:170px;display:inline-block">包含以下任意一个关键词：</span>
              <el-input clearable style="width:70%" v-model="advanced.arbitKeys" id="arbitKeys" @focus="selectedInputId='arbitKeys'"></el-input>
            </el-col>
          </el-row>
          <el-row style="margin-bottom:15px;">
            <el-col>
              <span style="width:170px;display:inline-block">不包括以下关键词：</span>
              <el-input clearable style="width:70%" v-model="advanced.exKeys" id="exKeys" @focus="selectedInputId='exKeys'"></el-input>
            </el-col>
          </el-row>
          <el-row style="margin-bottom:15px;">
            <el-col>
              <span style="width:170px;display:inline-block">站内搜索：</span>
              <el-input clearable style="width:70%" v-model="advanced.website"></el-input>
            </el-col>
          </el-row>   
          <div class="timePicker">
            <span style="width:170px;display:inline-block" class="demonstration">时间段：</span>
            <el-date-picker
              v-model="advanced.date"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width:70%"
              clearable>
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
        <el-button type="primary" @click="advancedSearch">高级搜索</el-button>
      </span>
    </el-dialog>    
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      simple: {
        browser: [],
        searchText: ''
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
      advancedDialog: false,
      selectedInputId: '',
    }
  },
  methods: {
    ...mapMutations([
      'setResults',
      'setResultPageQuery',
      'setTaskId',
      'setResultLoading'
    ]),
    async simpleSearch() {
      this.simple.searchText = this.resultPageQuery
      if (this.simple.searchText=='') {
        return this.$notify({
          title: '警告',
          message: '请输入搜索内容',
          type: 'warning'
        });
      }
      this.setResultLoading({ resultLoading: true })
      let res = await axios.post(`${this.path}/search/crawllist`, {
        query: this.simple.searchText,
        se: this.simple.browser
      })
      let id = res.data
      let res2 = await axios.get(`${this.path}/search/getlist?task_id=${id}`)
      this.setResultLoading({ resultLoading: false })
      this.setTaskId({ taskId: id })
      this.setResults({ results: res2.data.gather_list })
    },
    async advancedSearch() {
      let query = ''
      if (this.advanced.allKeys!='') query +=this.advanced.allKeys
      if (this.advanced.completedKeys!='') query += '&' + this.advanced.completedKeys
      if (this.advanced.arbitKeys!='') query += '|' + this.advanced.arbitKeys
      if (this.advanced.exKeys!='') query += '!' + this.advanced.exKeys
      if (query=='') {
        return this.$notify({
          title: '警告',
          message: '请输入搜索内容',
          type: 'warning'
        });
      }
      this.setResultLoading({ resultLoading: true })
      this.setResultPageQuery({ resultPageQuery: query })
      this.$router.push({path: '/result'})
      this.advancedDialog = false
      let start_time = moment(this.advanced.datetime[0]).unix()
      let end_time = moment(this.advanced.datetime[1]).unix()
      let res = await axios.post(`${this.path}/search/crawllist_advanced`, {
        query,
        se: this.advanced.browser,
        site: this.advanced.website,
        start_time,
        end_time
      })
      let id = res.data
      let res2 = await axios.get(`${this.path}/search/getlist?task_id=${id}`)
      this.setResultLoading({ resultLoading: false })
      this.setTaskId({ taskId: id })
      this.setResults({ results: res2.data.gather_list })
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
    }),
    resultPageQuery: {
      get() {
        return this.$store.state.resultPageQuery
      },
      set(value) {
        this.setResultPageQuery({ resultPageQuery: value })
      }
    }
  }
}
</script>
<style scoped>
.search{
  margin-top: 15px;
}
.advancedSearch{
  font-size: 15px;
  margin-right: 25px;
  cursor: pointer;
}
.el-dropdown-link{
  font-size: 18px;
  cursor: pointer;
}
</style>
