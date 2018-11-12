<template>
  <el-container>
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <span class="title">关键词管理</span>
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
    <el-main style="margin:50px">
      <el-popover
        placement="top"
        width="160"
        v-for="(tag, index) in dynamicTags"
        v-model="tag.deletePop"
        :key="index">
        <p>确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="dynamicTags[index].deletePop = false">取消</el-button>
          <el-button type="primary" size="mini" @click="deleteTag(index)">确定</el-button>
        </div>
        <el-tag
          closable
          :disable-transitions="false"
          @close="handleClose(index)"
          slot="reference"
          style="margin-right:15px;">
          {{tag.name}}
        </el-tag>
      </el-popover>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="addTag"
        @blur="addTag"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加</el-button>      
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
      inputVisible: false,
      inputValue: '',
      deletePop: true,
      dynamicTags: []
    }
  },
  methods: {
    ...mapMutations([
      'setKeywords'
    ]),
    handleClose(index) {
      this.dynamicTags[index].deletePop = true
    },
    async deleteTag(index) {
      let query = this.dynamicTags[index].name
      let res = await axios.post(`${this.path}/query/remove`, { query })
      // 这里还需要根据实际header判断是否删除成功(暂时未完成！！！！！)
      this.dynamicTags.splice(index, 1);
      // 更新keywords
      let res2 = await axios.get(`${this.path}/query/get`)
      this.setKeywords({ keywords: res2.data.querys })
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    async addTag() {
      if (this.inputValue=='') return this.inputVisible = false
      let inputValue = this.inputValue;
      let res = await axios.post(`${this.path}/query/add`,{ query: inputValue })
      // 这里还需要根据实际header判断是否添加成功(暂时未完成！！！！！)
      if (inputValue) {
        this.dynamicTags.push({ name: inputValue, deletePop: false });
      }
      this.inputVisible = false;
      this.inputValue = '';
      // 更新keywords
      let res2 = await axios.get(`${this.path}/query/get`)
      this.setKeywords({ keywords: res2.data.querys })
    }
  },
  computed: {
    ...mapState({
      path: state => state.path,
      keywords: state => state.keywords,
    }),
  },
  async created() {
    let res = await axios.get(`${this.path}/query/get`)
    this.setKeywords({ keywords: res.data.querys })
    this.dynamicTags = this.keywords.map(item => {
      return { name: item, deletePop: false }
    })
  }
}
</script>
<style scope>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
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
</style>
