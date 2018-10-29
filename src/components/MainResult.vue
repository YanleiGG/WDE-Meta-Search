<template>
  <el-col :span="14" :offset="1" v-loading="loading">
    <div class="result">
      <el-collapse v-model="activeNames[0]" style="margin-bottom: 30px">
        <el-collapse-item name="1">
          <template slot="title">
            <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
          </template>
          <div>
            百度：第 <span style="font-weight:bold">{{1}}</span> 位
          </div>
          <div style="margin-top:15px">发布时间：2011年3月2日 12:00:01</div>
        </el-collapse-item>
      </el-collapse>
      <el-collapse v-model="activeNames[1]" style="margin-bottom: 30px">
        <el-collapse-item name="1">
          <template slot="title">
            <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
          </template>
        </el-collapse-item>
      </el-collapse>
      <el-collapse v-model="activeNames[2]" style="margin-bottom: 30px">
        <el-collapse-item name="1">
          <template slot="title">
            <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
          </template>
        </el-collapse-item>
      </el-collapse>
      <el-collapse v-model="activeNames[3]" style="margin-bottom: 30px">
        <el-collapse-item name="1">
          <template slot="title">
            <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
          </template>
        </el-collapse-item>
      </el-collapse>
      <el-collapse v-model="activeNames[4]" style="margin-bottom: 30px">
        <el-collapse-item name="1">
          <template slot="title">
            <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
          </template>
        </el-collapse-item>
      </el-collapse>
      <el-collapse v-model="activeNames[5]" style="margin-bottom: 30px">
        <el-collapse-item name="1">
          <template slot="title">
            <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
          </template>
        </el-collapse-item>
      </el-collapse>
      <el-collapse v-model="activeNames[6]" style="margin-bottom: 30px">
        <el-collapse-item name="1">
          <template slot="title">
            <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
          </template>
        </el-collapse-item>
      </el-collapse>
      <el-collapse v-model="activeNames[7]" style="margin-bottom: 30px">
        <el-collapse-item name="1">
          <template slot="title">
            <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
          </template>
        </el-collapse-item>
      </el-collapse>
      <el-collapse v-model="activeNames[8]" style="margin-bottom: 30px">
        <el-collapse-item name="1">
          <template slot="title">
            <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
          </template>
        </el-collapse-item>
      </el-collapse>
      <el-collapse v-model="activeNames[9]" style="margin-bottom: 30px">
        <el-collapse-item name="1">
          <template slot="title">
            <a href="" class="link">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</a>
          </template>
        </el-collapse-item>
      </el-collapse>            
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </el-col>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      loading: false,
      activeNames: ['','','','','','','','','','','','','',''],
    }
  },
  computed: { 
  },
}
</script>
<style scoped>
.link{
  color:#1a0dab;
  cursor: pointer;
}
.result .link:hover{
  text-decoration: underline;
}
.result .link{
  font-size: 17px;
  overflow: hidden;
}
</style>
