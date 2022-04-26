<template>
  <div class="index-ecology__layout">
    <h2>生态全景图</h2>
    <div class="des">
      打造新职业“选职+培训+评价+就业+终身职业发展”全链条服务
    </div>
    <div class="circle-box circle-box-1">
      <span>自有流量招聘服务和点点SaaS服务备份</span>
      <div class="circle">选职</div>
    </div>
    <div class="circle-box circle-box-2">
      <span>对公共实训基地、院校一体化运营解决方案</span>
      <div class="circle">培训</div>
    </div>
    <div class="circle-box circle-box-3">
      <div class="circle">发展</div>
      <span>再对职业的选职 升职服务</span>
    </div>
    <div class="circle-box circle-box-4">
      <div class="circle">就业</div>
      <span>自有流量招聘服务和点点SaaS服务</span>
    </div>
    <div class="circle-box circle-box-5">
      <div class="circle">评价</div>
      <span>通过课程、软硬件形成第三方评价组织协会</span>
    </div>
    <div class="animate-box">
      <div class="box">
        <div
          class="circle-container"
          v-for="(item, index) in images"
          :key="index"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image1 from '@/assets/images/星星左1@3x.png'
import Image2 from '@/assets/images/星星左2上方@3x.png'
import Image3 from '@/assets/images/星星左3下方@3x.png'
import Image4 from '@/assets/images/星星中间上方@3x.png'
import Image5 from '@/assets/images/星星右1长@3x.png'
import Image6 from '@/assets/images/星星右2下@3x.png'
import Image7 from '@/assets/images/星星左3下方@3x.png'

export default {
  data() {
    return {
      images: [Image1, Image2, Image3, Image4, Image5, Image6, Image7],
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .index-ecology__layout {
    width: 100%;
    height: 868px;
    padding-top: 93px;
    box-sizing: border-box;
    background-image: url(~@/assets/images/img_生态底图@3x.png);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    h2 {
      font-size: 50px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 70px;
      margin: 0;
      padding: 0;
      text-align: center;
      margin-bottom: 20px;
    }
    .des {
      font-size: 24px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #ffffff;
      line-height: 33px;
      text-align: center;
    }
    .circle-box {
      position: absolute;
      bottom: 10px;
      > span {
        display: block;
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
      }
      &.circle-box-1 {
        top: 384px;
        left: 495px;
        > span {
          width: 147px;
          margin-left: -33px;
          margin-bottom: 13px;
        }
      }
      &.circle-box-2 {
        top: 373px;
        right: 475px;
        > span {
          width: 161px;
          margin-left: -55px;
          margin-bottom: 11px;
        }
      }
      &.circle-box-3 {
        bottom: 160px;
        left: 338px;
        > span {
          width: 108px;
          margin-left: -22px;
          margin-bottom: 0;
          margin-top: 12px;
        }
      }
      &.circle-box-4 {
        bottom: 90px;
        left: 678px;
        > span {
          width: 147px;
          margin-left: -40px;
          margin-bottom: 0;
          margin-top: 10px;
        }
      }
      &.circle-box-5 {
        bottom: 128px;
        right: 290px;
        > span {
          width: 161px;
          margin-left: -54px;
          margin-bottom: 0;
          margin-top: 12px;
        }
      }
      .circle {
        width: 80px;
        height: 80px;
        background-image: url(~@/assets/images/圆形@3x.png);
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
        overflow: hidden;
        font-size: 26px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        text-align: center;
        line-height: 80px;
      }
    }
    .animate-box {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      right: 0;
      top: 0;
      > div {
        position: relative;
        width: 100%;
        height: 100%;
      }
    }

    .circle-container {
      position: absolute;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    $stars: (
      (
          fromX: 284px,
          fromY: 479px,
          toX: 284px,
          toY: -30px,
          width: 28px,
          height: 178px,
        )
        (
          fromX: 386px,
          fromY: 391px,
          toX: 386px,
          toY: -30px,
          width: 27px,
          height: 67px,
        )
        (
          fromX: 524px,
          fromY: 792px,
          toX: 524px,
          toY: -30px,
          width: 23px,
          height: 100px,
        )
        (
          fromX: 719px,
          fromY: 349px,
          toX: 719px,
          toY: -30px,
          width: 21px,
          height: 53px,
        )
        (
          fromX: 1111px,
          fromY: 428px,
          toX: 1111px,
          toY: -30px,
          width: 23px,
          height: 144px,
        )
        (
          fromX: 1182px,
          fromY: 524px,
          toX: 1182px,
          toY: -30px,
          width: 28px,
          height: 124px,
        )
        (
          fromX: 883px,
          fromY: 749px,
          toX: 883px,
          toY: -30px,
          width: 23px,
          height: 100px,
        )
    );

    @for $i from 1 through length($stars) {
      $item: nth($stars, $i);
      $fromX: randomNum(20, 80) + vw;
      .circle-container:nth-child(#{$i}) {
        width: map-get($item, width);
        height: map-get($item, height);
        animation-name: move-frames-#{$i};
        animation-duration: randomNum(8, 16) + s;
        animation-delay: randomNum(2, 6) + s;
        transform: translate(map-get($item, fromX), map-get($item, fromY));
      }

      @keyframes move-frames-#{$i} {
        0% {
          transform: translate(map-get($item, fromX), map-get($item, fromY));
          opacity: 1;
        }
        33% {
          transform: translate(map-get($item, fromX), map-get($item, toY));
          opacity: 0;
        }
        66% {
          transform: translate(map-get($item, fromX), 1000px);
          opacity: 0;
        }
        100% {
          transform: translate(map-get($item, fromX), map-get($item, fromY));
          opacity: 1;
          animation-delay: 20s;
        }
      }
    }
  }
}

@include styles();

@include respond() {
  @include styles();
}
</style>
