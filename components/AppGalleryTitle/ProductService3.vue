<template>
  <div class="gallery-text gallery-product-service-3-text" v-once>
    院校合作<br />
    共建新职业人才培训评价及就业服务高质量发展生态
  </div>
</template>
<style lang="scss" scoped>
@mixin styles() {
  .gallery-text {
    position: absolute;
    &.gallery-product-service-3-text {
      width: 1058px;
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
