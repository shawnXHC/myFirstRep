<template>
  <div class="container">
    <van-nav-bar
      title="修改个人信息"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <van-uploader>
        <!-- 这地方应该写一些头像和显示当前头像 -->
        <van-cell title="头像">
          <template #default>
            <van-image
              round
              width="2.5rem"
              height="2.5rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </template>
        </van-cell>
      </van-uploader>
      <van-field v-model="name" label="昵称" input-align="right"></van-field>
      <div class="gender-select van-field">
        <van-field
          readonly
          clickable
          label="性别"
          :value="gender"
          @click="showPicker = true"
          input-align="right"
        />
        <van-popup v-model="showPicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="genderselect"
          />
        </van-popup>
      </div>
      <!-- 这是生日选择 -->
      <!-- <van-cell title="生日" :value="date" @click="show = true" />
      -->
      <van-field
        readonly
        clickable
        label="生日"
        :value="date"
        @click="show = true"
        input-align="right"
      />
      <van-calendar
        v-model="show"
        @confirm="birthdayselect"
        :show-confirm="false"
        :min-date="new Date(1900,1)"
      />
      <!-- 生日选择结束 -->
      <van-field v-model="tel" label="手机号码" input-align="right"></van-field>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gender: "男",
      showPicker: false,
      columns: ["男", "女"],
      date: "1995-05-05",
      show: false,
      name: "谁的青春不奋斗",
      tel: "13333333333"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      //这地方应该写axios请求将修改的信息提交给后台。
    },
    genderselect(value) {
      this.gender = value;
      this.showPicker = false;
    },
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    birthdayselect(date) {
      this.show = false;
      this.date = this.formatDate(date);
    }
  }
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.gender-select {
  display: flex;
  justify-content: space-between;
}
.van-cell__title {
  text-align: left;
}
.van-cell {
  width: 100vw;
  line-height: 2rem;
}
.van-field__control {
  text-align: right;
}
.van-nav-bar {
  /* background-color: blue; */
}
</style>