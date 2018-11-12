<template>
  <el-col :span="14" :offset="1">
    <div class="result" v-loading="resultLoading">
      <el-collapse v-for="(item, index) in showResults" :key="index+'results'" v-model="activeNames[index]" style="margin-bottom: 30px">
        <el-collapse-item :name="index">
          <template slot="title">
            <div>
              <span class="link" @click="toDetail(item.source_url)">{{item.title}}</span>
            </div>
          </template>
          <div v-for="(i,key) in item.se" :key="key+'resultsSe'">
            {{key}}：第 <span>{{i}}</span> 位
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalCount"
      class="resultPagination"
      :current-page='page'
      @current-change='pageChange'>
    </el-pagination>
  </el-col>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      activeNames: ['','','','','','','','','','','','','',''],
      page: 1
    }
  },
  methods: {
    ...mapMutations([
      'setDetail',
    ]),
    toDetail(source_url) {
      let res = axios.post(`${this.path}/search/details`, {
        task_id: this.taskId,
        source_url
      })
      this.setDetail({ detail: res.data })
      this.$router.push({path: '/detail'})
    },
    pageChange(value) {
      this.page = value
    },
  },
  computed: { 
    ...mapState({
      path: state => state.path,
      keywords: state => state.keywords,
      taskId: state => state.taskId,
      resultLoading: state => state.resultLoading,
      results: state => state.results,
      totalCount: state => state.totalCount
    }),
    showResults() {
      return this.results.slice((this.page-1)*10, this.page*10)
    },
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
.resultPagination{
  text-align: center;
  margin-top: 40px;
}
</style>
