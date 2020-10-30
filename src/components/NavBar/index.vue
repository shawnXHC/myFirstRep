<template>
  <van-nav-bar title=" 修改密码" left-arrow @click-left="onClickLeft" />
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.van-nav-bar {
  height: 4rem;
}
</style>