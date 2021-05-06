<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      res: {}
    };
  },
  mounted() {
    // 本地加载静态json文件的方式mock, public是根目录，所以直接‘/’
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // });

    this.axios.get("/user/login").then(res => {
      this.res = res;
    });
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
</style>
