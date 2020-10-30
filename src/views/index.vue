<template>
  <div>
    <router-view />
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from "@/components/Tabbar";
export default {
  name: "index",
  components: {
    tabbar
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>