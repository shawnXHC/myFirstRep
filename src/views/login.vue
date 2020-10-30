<template>
  <div class="login-container">
    <div class="login-header">Welcome</div>
    <div class="login-content">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          placeholder="请输入用户名"
          left-icon="user-circle-o"
          :rules="[{ required: true}]"
          class="input-field"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          left-icon="records"
          size="30"
          placeholder="请输入密码"
          :rules="[{ required: true}]"
          class="input-field"
        />
        <div style="margin: 30px;">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="login-footer">
      <van-row type="flex" justify="center">
        <van-col span="4">
          <router-link to>忘记密码</router-link>
        </van-col>
        <van-col span="4">
          <router-link to>免费注册</router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      if (this.username && this.password) {
        this.$router.push("/index");
      }
      console.log("submit", values);
    }
  }
};
</script>
<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-header {
  font-size: 30px;
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
}
.input-field {
  width: calc(100% - 60px);
  height: 100%;
  margin: 20px 30px;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 30px;
  border: 1px solid gray;
}
.login-footer {
  font-size: 12px;
}
</style>