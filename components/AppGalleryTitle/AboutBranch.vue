<template>
  <div class="gallery-text gallery-about-branch-text" v-once>
    分支机构<br />职虎业务遍布全国
  </div>
</template>
<style lang="scss" scoped>
@mixin styles() {
  .gallery-text {
    position: absolute;
    &.gallery-about-branch-text {
      width: 184px;
      font-size: 46px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 69px;
      top: 105px;
      left: 141px;
      word-break: keep-all;
    }
  }
}
@include styles();
@include respond() {
  @include styles();
}
</style>
