<template>
  <div class="main">
    <div class="main-container">
      <router-link to="/index/subscribe">
        <div class="main-item item1">
          <van-icon name="chat-o" size="40" />
          <span>立即预约</span>
        </div>
      </router-link>
      <router-link to="/index/search">
        <div class="main-item item2">
          <van-icon name="description" size="40" />
          <span>预约记录</span>
        </div>
      </router-link>
      <router-link to="/index">
        <div class="main-item item3">
          <van-icon name="scan" size="40" />
          <span>现场排号</span>
        </div>
      </router-link>
      <router-link to="/index">
        <div class="main-item item4">
          <van-icon name="apps-o" size="40" />
          <span>更多服务</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {};
  }
};
</script>
<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 4rem);
}
.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 100%;
  margin-top: 0rem;
}
.main-item {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  background-color: gray;
  margin: 1rem 1rem 2rem 1rem;
  border-radius: 1rem;
  box-shadow: 0rem 0.1rem 0.1rem;
}
.van-icon {
  margin-bottom: 1rem;
}
.main-item:active {
  top: 0.2rem;
}
.item1 {
  background-color: #fb571e;
}
.item2 {
  background-color: #00a0ea;
}
.item3 {
  background-color: #17c295;
}
.item4 {
  background-color: #d4d4d5;
}
</style>