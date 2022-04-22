<template>
  <div class="gallery-text gallery-product-service-1-text" v-once>
    职虎学习平台<br />
    新职业选职学习评价就业，一站式服务
  </div>
</template>
<style lang="scss" scoped>
@mixin styles() {
  .gallery-text {
    position: absolute;
    &.gallery-product-service-1-text {
      width: 782px;
      height: 138px;
      font-size: 46px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 69px;
      left: 141px;
      top: 141px;
    }
  }
}
@include styles();
@include respond() {
  @include styles();
}
</style>
