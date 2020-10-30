<template>
  <van-tabbar route active-color="#07c160" inactive-color="#000" v-model="active">
    <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/index/search">查询</van-tabbar-item>
    <van-tabbar-item icon="setting-o">管理</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/index/personal">个人</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: "Tabbar",
  data() {
    return { active: 0 };
  }
};
</script>
<style scoped>
.van-tabbar {
  height: 3rem;
}
</style>