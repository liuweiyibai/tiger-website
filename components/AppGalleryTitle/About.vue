<template>
  <div class="gallery-text gallery-about-text" v-once>公司介绍</div>
</template>
<style lang="scss" scoped>
@mixin styles() {
  .gallery-text {
    position: absolute;
    &.gallery-about-text {
      width: 264px;
      height: 87px;
      font-size: 66px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 87px;
      top: 148px;
      left: 114px;
      word-break: keep-all;
    }
  }
}
@include styles();
@include respond() {
  @include styles();
}
</style>
