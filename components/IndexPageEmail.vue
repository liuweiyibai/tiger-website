<template>
  <div class="index-email__layout">
    <div class="text">开启合作 <br />了解更多精彩</div>
    <div class="form">
      <form>
        <input type="text" placeholder="请输入您的姓名" />
        <input type="text" placeholder="请输入企业名称" />
        <input type="text" placeholder="请输入您的手机号" />
      </form>
      <div type="button" class="button"></div>
    </div>
    <img class="gallery" src="~@/assets/images/img_开启合作@3x.png" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@mixin styles() {
  .index-email__layout {
    width: 100%;
    height: 420px;
    // background-image: url();
    // background-size: 100% 100%;
    // background-position: center;
    // background-repeat: no-repeat;
    background: #fcd02d;
    margin-top: 63px;
    position: relative;
    > .gallery {
      position: absolute;
      top: 0;
      left: 0;
      width: 690px;
      height: 100%;
    }
    .text {
      width: 240px;
      height: 112px;
      font-size: 40px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.8);
      line-height: 56px;
      position: absolute;
      top: 154px;
      left: 233px;
      word-break: keep-all;
    }
    .form {
      width: 440px;
      height: 334px;
      background: linear-gradient(143deg, #362500 0%, #000000 100%);
      box-shadow: 0px 2px 22px 0px rgba(218, 172, 2, 0.16);
      border-radius: 8px;
      position: absolute;
      top: 43px;
      right: 261px;
      box-sizing: border-box;
      padding: 30px 25px;
      form {
        width: 100%;
      }

      input {
        width: 390px;
        height: 56px;
        background: #ffffff;
        border-radius: 6px;
        border: 1px solid #979797;
        margin-bottom: 13px;
        box-sizing: border-box;
        padding: 20px 18px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        &:focus,
        &:focus-visible {
          outline: 1px solid $primary-color;
        }
        &:last-child {
          margin-bottom: 24px;
        }
        &::placeholder {
          color: #666666;
        }
      }
      .button {
        width: 390px;
        height: 56px;
        border-radius: 6px;
        overflow: hidden;
        opacity: 0.5;
        cursor: pointer;
        background-image: url(~@/assets/images/bt_提交按钮@3x.png);
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}

@include styles();
@include respond() {
  @include styles();
}
</style>
