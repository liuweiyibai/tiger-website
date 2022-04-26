<template>
  <div class="index-yewu__layout">
    <h2 class="title">业务布局</h2>
    <div class="description">
      <span
        >大变局时代，新技术、新产业、新业态和新模式集中涌现，加速新旧职业的更迭</span
      >
    </div>
    <div class="description highlight">
      <span>职虎致力于整合国内外前沿职业培训与就业资源</span>
    </div>
    <div class="service-list">
      <div
        class="service-item"
        v-for="(item, index) in yeWuLayoutList"
        :key="item.id"
      >
        <div class="item-box" :class="[`item-box-${index + 1}`]">
          <div class="image-box">
            <img :src="item.image" />
          </div>
          <div class="text-box">
            <h3>{{ item.title }}</h3>
            <div>
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import YeWuLayout1 from '@/assets/images/img_用户端@3x.png'
import YeWuLayout2 from '@/assets/images/img_企业端@3x.png'
import YeWuLayout3 from '@/assets/images/img_政府端@3x.png'
export default {
  data() {
    return {
      yeWuLayoutList: [
        {
          image: YeWuLayout1,
          title: '用户端',
          text: '为职业人才“选职、培训、评价、就业、发展备份',
          id: 'random1',
        },
        {
          image: YeWuLayout2,
          title: '企业端',
          text: '为评价组织、培训机构等市场主体在技术、品牌、运营等方面赋能',
          id: 'random2',
        },
        {
          image: YeWuLayout3,
          title: '政府端',
          text: '为政府推进人才发展体制改革、规划职业结构和制定相关政策等提供决策参考',
          id: 'random3',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .index-yewu__layout {
    // height: 512px;
    width: 100%;
    overflow: hidden;
    .title {
      height: 70px;
      font-size: 50px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.8);
      line-height: 70px;
      margin-top: 60px;
      text-align: center;
    }

    .description {
      width: 873px;
      height: 33px;
      font-size: 24px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.8);
      line-height: 33px;
      text-align: center;
      margin: 0 auto;
      margin-top: 15px;
      font-weight: 200;
      &.highlight {
        width: 524px;
        height: 33px;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
        line-height: 33px;
        margin-top: 10px;
      }
    }

    .service-list {
      margin: 0 110px;
      margin-top: 76px;
      margin-bottom: 88px;
      margin-left: 116px;
      @include clearfix;
      .service-item {
        width: 396px;
        height: 460px;
        float: left;
        position: relative;
        box-sizing: border-box;
        border-right: 6px solid #fff;
        &:last-child {
          border: 0 none;
        }
        .item-box {
          width: 390px;
          height: 460px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.6s;
          overflow: hidden;
          .image-box {
            height: 210px;
            width: 100%;
            transition: height linear 0.6s;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .text-box {
            width: 100%;
            height: 250px;
            padding-top: 56px;
            padding-left: 47px;
            box-sizing: border-box;
            transition: all 0.3s;
            background: #1b1a18;
            h3 {
              width: 72px;
              height: 33px;
              font-size: 24px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #ffffff;
              line-height: 33px;
              margin: 0;
              padding: 0;
              margin-bottom: 16px;
            }
            div {
              font-size: 18px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #ffffff;
              line-height: 28px;
            }
          }
          &.item-box-1 .text-box div {
            width: 305px;
          }
          &.item-box-2 .text-box div {
            width: 287px;
          }
          &.item-box-3 .text-box div {
            width: 275px;
          }
        }
        &:hover,
        .active {
          .item-box {
            z-index: 2;
            width: 408px;
            height: 536px;
            box-shadow: 0px 2px 25px 0px rgba(255, 212, 0, 0.26);
            border-radius: 20px;
            .image-box {
              height: 216px;
            }
            .text-box {
              background: #ffd400;
              height: 320px;
              overflow: hidden;
              // padding-top: 91px;
              // padding-left: 35px;
              h3,
              div {
                color: #000000;
              }
            }
          }
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
