<template>
  <div class="container">
    <van-nav-bar title="预约" left-arrow @click-left="onClickLeft" />
    <van-card desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
    <van-card desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
    <van-card desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
</style>