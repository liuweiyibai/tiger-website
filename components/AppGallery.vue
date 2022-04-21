<template>
  <div class="app-gallery">
    <img src="~@/assets/images/头图@3x.png" alt="" />
    <div class="text">
      职虎<br />
      让职业连接人与未来
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin styles() {
  .app-gallery {
    height: 470px;
    margin-top: 80px;
    position: relative;
    &.min-height {
      height: 384px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .text {
      position: absolute;
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
