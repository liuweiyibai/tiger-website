<template>
  <div class="gallery-text gallery-product-service-4-text" v-once>
    点点招聘<br />
    带你探索职场的无限可能
  </div>
</template>
<style lang="scss" scoped>
@mixin styles() {
  .gallery-text {
    position: absolute;
    &.gallery-product-service-4-text {
      width: 506px;
      height: 138px;
      font-size: 46px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 69px;
      top: 114px;
      left: 114px;
    }
  }
}
@include styles();
@include respond() {
  @include styles();
}
</style>
