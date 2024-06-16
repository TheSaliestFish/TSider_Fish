<template>
  <div id="app">
    <router-view />
    <div class="input">
      <el-input type="textarea" :rows="5" placeholder="输入消息"> </el-input>
      <router-link to="/chat">
        <el-button type="primary" icon="el-icon-right" circle></el-button
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("./assets/css/reset.css");
#app {
  width: 385px;
  height: 879px;
}
</style>
