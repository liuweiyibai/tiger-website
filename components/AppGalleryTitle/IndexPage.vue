<template>
  <div class="gallery-text gallery-text-index" v-once>
    职虎<br />
    让职业连接人与未来
  </div>
</template>
<style lang="scss" scoped>
@mixin styles() {
  .gallery-text {
    position: absolute;
    &.gallery-text-index {
      width: 594px;
      height: 174px;
      font-size: 66px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 87px;
      text-shadow: 0px 2px 9px rgba(0, 0, 0, 0.23);
      top: 84px;
      left: 140px;
    }
  }
}
@include styles();
@include respond() {
  @include styles();
}
</style>
