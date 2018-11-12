<template>
  <el-container class="resultPage">
    <el-header class="searchHeader">
      <search-header></search-header>
    </el-header>
    <el-main>
      <el-row>
        <main-result></main-result>
        <el-col :span="7" :offset="1">
          <el-row justify="space-around">
            <el-col :span="6" class="keyword" v-for="(item, index) in keywords" :key="item+index+'results'">
              <span @click='tagClick(item)'>
                <el-tag>{{item}}</el-tag>
              </span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import SearchHeader from './SearchHeader.vue'
import MainResult from './MainResult.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    'search-header': SearchHeader,
    'main-result': MainResult
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'setResults',
      'setResultPageQuery'
    ]),
    tagClick(content) {
      let resultPageQuery = this.resultPageQuery
      resultPageQuery += ' ' + content
      this.setResultPageQuery({ resultPageQuery })
    }
  },
  computed: {
    ...mapState({
      path: state => state.path,
      keywords: state => state.keywords,
      resultPageQuery: state => state.resultPageQuery,
    })
  }
}
</script>
<style scoped>
.searchHeader{
  background-color:#fafafa;
  height: 75px !important;
  box-shadow: 1px 1px 1px #ddd
}
.el-select .el-input{
  width: 150px;
}
.el-select__tags{
  max-width: 150px;
}
</style>
