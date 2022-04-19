<template>
  <div class="app-footer">
    <div class="footer-1">
      <div class="footer-logo"></div>
    </div>
    <div class="line"></div>
    <div class="footer-2"></div>
    <div class="line"></div>
    <div class="footer-3"></div>
  </div>
</template>

<style lang="scss" scoped>
.app-footer {
  width: 100%;
  height: 621px;
  background: #000000;
  box-sizing: border-box;
  padding: 0 70px;
  .footer-1 {
    padding-top: 47px;
    @include clearfix;
    .footer-logo {
    }
    .footer1-text {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      float: right;
    }
  }
  .footer-line {
    width: 100%;
    height: 1px;
    background: #ffffff;
    opacity: 0.18;
  }
}
</style>
