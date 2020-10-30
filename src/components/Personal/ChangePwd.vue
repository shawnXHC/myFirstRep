<template>
  <div class="container">
    <nav-bar></nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="旧密码"
        label="旧密码"
        placeholder="旧密码"
        :rules="[{ required: true}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="新密码"
        label="新密码"
        placeholder="新密码"
        :rules="[{ required: true}]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar/index.vue";
export default {
  data() {
    return { username: "", password: "" };
  },
  components: {
    NavBar
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>
<style scoped>
</style>