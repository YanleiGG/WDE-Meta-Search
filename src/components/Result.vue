<template>
  <el-container class="resultPage">
    <el-header class="searchHeader">
      <el-row justify="space-around" class="search">
        <el-col :span="13" :offset="1">
          <el-input placeholder="请输入搜索内容" v-model="simple.searchText" class="input-with-select">
            <el-select style="width:150px" v-model="simple.browser" slot="prepend" placeholder="搜索引擎" multiple :collapse-tags='true'>
              <el-option label="百度" value="baidu"></el-option>
              <el-option label="谷歌" value="google"></el-option>
              <el-option label="必应" value="bing"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="3" :offset="7">
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
              <el-dropdown-item>采集统计</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>

      <el-dialog
        title="高级搜索"
        :visible.sync="advancedDialog"
        width="80%">
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
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="14" :offset="1">
          <div class="result">
            <el-collapse v-model="activeNames[0]" style="margin-bottom: 30px">
              <el-collapse-item name="1">
                <template slot="title">
                  <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
                </template>
                <div><a href="" class="link">http://baidu.com</a></div>
                <div><a href="" class="link">http://google.com</a></div>
                <div><a href="" class="link">http://bing.com</a></div>
              </el-collapse-item>
            </el-collapse>
            <el-collapse v-model="activeNames[1]" style="margin-bottom: 30px">
              <el-collapse-item name="1">
                <template slot="title">
                  <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
                </template>
                <div><a href="" class="link">http://baidu.com</a></div>
                <div><a href="" class="link">http://google.com</a></div>
                <div><a href="" class="link">http://bing.com</a></div>
              </el-collapse-item>
            </el-collapse>
            <el-collapse v-model="activeNames[2]" style="margin-bottom: 30px">
              <el-collapse-item name="1">
                <template slot="title">
                  <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
                </template>
                <div><a href="" class="link">http://baidu.com</a></div>
                <div><a href="" class="link">http://google.com</a></div>
                <div><a href="" class="link">http://bing.com</a></div>
              </el-collapse-item>
            </el-collapse>
            <el-collapse v-model="activeNames[3]" style="margin-bottom: 30px">
              <el-collapse-item name="1">
                <template slot="title">
                  <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
                </template>
                <div><a href="" class="link">http://baidu.com</a></div>
                <div><a href="" class="link">http://google.com</a></div>
                <div><a href="" class="link">http://bing.com</a></div>
              </el-collapse-item>
            </el-collapse>
            <el-collapse v-model="activeNames[4]" style="margin-bottom: 30px">
              <el-collapse-item name="1">
                <template slot="title">
                  <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
                </template>
                <div><a href="" class="link">http://baidu.com</a></div>
                <div><a href="" class="link">http://google.com</a></div>
                <div><a href="" class="link">http://bing.com</a></div>
              </el-collapse-item>
            </el-collapse>
            <el-collapse v-model="activeNames[5]" style="margin-bottom: 30px">
              <el-collapse-item name="1">
                <template slot="title">
                  <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
                </template>
                <div><a href="" class="link">http://baidu.com</a></div>
                <div><a href="" class="link">http://google.com</a></div>
                <div><a href="" class="link">http://bing.com</a></div>
              </el-collapse-item>
            </el-collapse>
            <el-collapse v-model="activeNames[6]" style="margin-bottom: 30px">
              <el-collapse-item name="1">
                <template slot="title">
                  <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
                </template>
                <div><a href="" class="link">http://baidu.com</a></div>
                <div><a href="" class="link">http://google.com</a></div>
                <div><a href="" class="link">http://bing.com</a></div>
              </el-collapse-item>
            </el-collapse>
            <el-collapse v-model="activeNames[7]" style="margin-bottom: 30px">
              <el-collapse-item name="1">
                <template slot="title">
                  <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
                </template>
                <div><a href="" class="link">http://baidu.com</a></div>
                <div><a href="" class="link">http://google.com</a></div>
                <div><a href="" class="link">http://bing.com</a></div>
              </el-collapse-item>
            </el-collapse>
            <el-collapse v-model="activeNames[8]" style="margin-bottom: 30px">
              <el-collapse-item name="1">
                <template slot="title">
                  <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
                </template>
                <div><a href="" class="link">http://baidu.com</a></div>
                <div><a href="" class="link">http://google.com</a></div>
                <div><a href="" class="link">http://bing.com</a></div>
              </el-collapse-item>
            </el-collapse>
            <el-collapse v-model="activeNames[9]" style="margin-bottom: 30px">
              <el-collapse-item name="1">
                <template slot="title">
                  <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
                </template>
                <div><a href="" class="link">http://baidu.com</a></div>
                <div><a href="" class="link">http://google.com</a></div>
                <div><a href="" class="link">http://bing.com</a></div>
              </el-collapse-item>
            </el-collapse>            
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-row justify="space-around">
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
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
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
      advancedDialog: false,
      activeNames: ['','','','','','','','','','','','','',''],
      results: []
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
.searchHeader{
  background-color:#fafafa;
  height: 75px !important;
  box-shadow: 1px 1px 1px #ddd
}
.el-dropdown-link{
  font-size: 18px;
  cursor: pointer;
}
.link{
  color:#1a0dab;
  cursor: pointer;
}
.result .link:hover{
  text-decoration: underline;
}
.result .link{
  font-size: 15px;
  overflow: hidden;
}
.keyword{
  margin-bottom:10px;
  cursor: pointer;
}
.el-select .el-input{
  width: 150px;
}
.el-select__tags{
  max-width: 150px;
}
</style>
