<template>
  <el-container>
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <span class="title">详情</span>
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
    <el-main>
      <el-row>
        <el-col :span="18" :offset="3" v-loading='detailLoading'>
          <el-card shadow="never">
            <el-row class="collectMsg">
              <span class="detailTitle">文档标题：</span>
               {{ detail.title }}
            </el-row>
            <el-row class="collectMsg">
              <span class="detailTitle">文档作者：</span>
              {{ detail.author }}
            </el-row>
            <el-row class="collectMsg">
              <span class="detailTitle">阅读数：</span>
              {{ detail.nrd }}
            </el-row>
            <el-row class="collectMsg">
              <span class="detailTitle">评论数：</span>
              {{ detail.nrply }}
            </el-row>
            <el-row class="collectMsg">
              <span class="detailTitle">发布时间：</span>
              {{ detail.pt }}
            </el-row>
            <el-row class="collectMsg">
              <span class="detailTitle">文档URL：</span>
              <a href="" target="_blank" class="link">{{ detail.url }}</a>
            </el-row>
            <el-row class="collectMsg">
              <span class="detailTitle">图片URL：</span>
              <span style="inline-bolck;">
                <template v-for="(item, index) in detail.lpic">
                  <a href="" target="_blank" class="link" :class='{ left95px: index!=0 }' :key="'lpic'+index">{{ item }}</a>
                  <br :key="'lpicbr'+index">
                </template>
              </span>
            </el-row>
            <el-row class="collectMsg">文档正文：</el-row>
            <el-row>
              {{ detail.cont }}
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      path: state => state.path,
      detail: state => state.detail,
      detailLoading: state => state.detailLoading
    }),  
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
.collectMsg{
  margin-top:10px;
  font-size: 18px;
  margin-bottom: 20px;
}
.detailTitle{
  display: inline-block;
  width: 90px;
}
.link{
  color:#1a0dab;
  cursor: pointer;
}
.link:hover{
  text-decoration: underline;
}
.left95px{
  margin-left: 95px;
}
</style>
