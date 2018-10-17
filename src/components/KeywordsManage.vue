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
              <router-link to="/manage/collect">
                <el-dropdown-item>采集统计</el-dropdown-item>
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
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加</el-button>      
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      dynamicTags: [
        { name: '标签一', deletePop: false },
        { name: '标签二', deletePop: false },
        { name: '标签三', deletePop: false },
        { name: '标签四', deletePop: false },
        { name: '标签五', deletePop: false },
        { name: '标签六', deletePop: false },
        { name: '标签七', deletePop: false },
        { name: '标签八', deletePop: false },
        { name: '标签九', deletePop: false },
      ],
      inputVisible: false,
      inputValue: '',
      deletePop: true
    }
  },
  methods: {
      handleClose(index) {
        this.dynamicTags[index].deletePop = true
      },
      deleteTag(index) {
        this.dynamicTags.splice(index, 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push({ name: inputValue, deletePop: false });
        }
        this.inputVisible = false;
        this.inputValue = '';
      }    
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
