<template>
  <div class="container">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入预约号/手机号"
      @search="onSearchCode"
      shape="round"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" key="one" />
      <van-dropdown-item v-model="value2" :options="option2" key="two" />
    </van-dropdown-menu>

    <van-cell-group>
      <van-cell v-for="(item,index) in items" :value="item.value" :key="index" is-link>
        <template #title>
          <span>排号：{{ item.title }}</span>
        </template>
        <template #label>
          <span>{{item.date}}</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      value1: 0,
      value2: "a",
      option1: [
        { text: "当前最新", value: 0 },
        { text: "过去一天", value: 1 },
        { text: "过去三天", value: 2 }
      ],
      option2: [
        { text: "待处理", value: "a" },
        { text: "办理中", value: "b" },
        { text: "已完成", value: "c" },
        { text: "已作废", value: "d" }
      ],
      items: [
        { title: "A001", value: "待处理", date: "2020-01-02" },
        { title: "A002", value: "待处理", date: "2020-01-02" },
        { title: "A003", value: "待处理", date: "2020-01-02" },
        { title: "A004", value: "待处理", date: "2020-01-02" }
      ]
    };
  },
  methods: {
    onSearchCode() {
      console.log("点击搜索");
    },
    onSearch() {
      console.log("点击搜索");
    },
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>
<style scoped>
</style>