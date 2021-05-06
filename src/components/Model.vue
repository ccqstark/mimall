<template>
  <transition name="slide">
    <div class="model" v-show="showModel">
      <!-- 遮罩层 -->
      <div class="mask"></div>
      <div class="model-dialog">
        <div class="model-header">
          <span>标题</span>
          <a
            href="javascript:;"
            class="icon-close"
            v-on:click="$emit('cancel')"
          ></a>
        </div>
        <div class="model-body">
          <slot name="body"></slot>
        </div>
        <div class="model-footer">
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 1"
            v-on:click="$emit('submit')"
            >确定</a
          >
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 2"
            v-on:click="$emit('cancel')"
            >确定</a
          >
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')"
              >确定</a
            >
            <a href="javascript:;" class="btn" v-on:click="$emit('cancel')"
              >取消</a
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "model",
  props: {
    //弹框类型:小small、中middle、大large、表单form
    modelType: {
      type: String,
      default: "form"
    },
    // 弹框标题
    title: String,
    //按钮类型:1:确定按钮 2:取消按钮 3:确定取消
    btnType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showModel: Boolean
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/model.scss";
@import "./../assets/scss/button.scss";
</style>
