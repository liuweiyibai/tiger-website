<template>
  <div class="gallery-text gallery-product-service-2-text" v-once>
    职业评价支持<br />
    为职业技能等级评价及专项职业能力考核赋能
  </div>
</template>
<style lang="scss" scoped>
@mixin styles() {
  .gallery-text {
    position: absolute;
    &.gallery-product-service-2-text {
      width: 920px;
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
