<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './store'

export default {
  name: 'App',
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin: 0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
a{
  text-decoration: none;
  color: inherit;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-select .el-input {
  width: 150px;
}
.browserSelect{
  width: 70%;
}
.browserSelect .el-input{
  width: 100%;
}
.el-dialog{
  margin-top: 10vh !important;
}
.keyword{
  margin-bottom:10px;
  cursor: pointer;
}
.el-collapse-item__content{
  padding-bottom: 15px;
}
</style>
