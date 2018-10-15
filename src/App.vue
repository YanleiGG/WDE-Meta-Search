<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
