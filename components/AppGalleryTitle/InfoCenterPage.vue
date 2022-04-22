<template>
  <div class="gallery-text gallery-info-center-text" v-once>资讯中心</div>
</template>
<style lang="scss" scoped>
@mixin styles() {
  .gallery-text {
    position: absolute;
    &.gallery-info-center-text {
      width: 264px;
      height: 87px;
      font-size: 66px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 87px;
      top: 192px;
      left: 141px;
    }
  }
}
@include styles();
@include respond() {
  @include styles();
}
</style>
