<template>
  <div class="container">
    <div class="header">
      <van-card desc="描述信息" :title="name" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #desc>
          <div>账号：{{ accountInfo }}</div>
        </template>
        <template #thumb>
          <van-image square width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </template>
      </van-card>
    </div>
    <div class="main">
      <van-cell title="个人信息" is-link to="/index/changeinfo">
        <template #icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-geren" />
          </svg>
        </template>
      </van-cell>
      <van-cell title="密码修改" is-link to="/index/changepwd">
        <template #icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bianji" />
          </svg>
        </template>
      </van-cell>
      <van-cell title="注销登录" is-link to="/login">
        <template #icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gongsichenglibiangengzhuxiaoshenqingliucheng" />
          </svg>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "谁的青春不奋斗",
      accountInfo: "x15850683927"
    };
  }
};
</script>
<style scoped>
.container {
  height: calc(100vh - 3rem);
}
.main {
  display: flex;
  font-size: 1rem;
  flex-direction: column;
}
.van-cell {
  margin: 1px 0px;
}
.van-card__content {
  font-size: 1rem;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
}

.van-card__title,
.van-card__desc {
  margin-bottom: 0.3rem;
  text-align: left;
  font-size: 16px;
}
.van-cell__title {
  text-align: left;
  margin-left: 1rem;
}
.van-card__thumb {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>