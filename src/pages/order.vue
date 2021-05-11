<template>
  <div>
    <order-header v-bind:title="title">
      <template v-slot:tip>
        <span>{{ tip }}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader.vue";
import ServiceBar from "../components/ServiceBar.vue";
import NavFooter from "../components/NavFooter.vue";
export default {
  name: "order",
  data() {
    return {
      title: "",
      tip: ""
    };
  },
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar
  },
  mounted() {
    let path = this.$route.path;
    if (path == "/order/confirm") {
      this.title = "订单确认";
      this.tip = "请认真填写收📦 地址";
    } else if (path == "/order/list") {
      this.title = "订单列表";
      this.tip = "请谨防钓鱼链接";
    } else if (path == "/order/pay") {
      this.title = "订单支付";
      this.tip = "请谨防钓鱼链接";
    }
  }
};
</script>

<style lang="scss" scoped></style>
