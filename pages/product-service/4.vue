<template>
  <ProductServiceLayout title="点点招聘" brandTitle="点点招聘">
    <div class="product-service-4">
      <div class="box-1">
        <div>
          <img src="~@/assets/images/点点招聘-点点智能匹配@3x.png" alt="" />
        </div>
      </div>
      <div class="box box-2">
        <div>
          <h2 class="_h2 _h2-title">
            点点速聘<span><i>/</i>ABOUT HRTIGER</span>
          </h2>
          <h3 class="h3-title">简介</h3>
          <p class="p">
            点点速聘是以结果为导向的创新型招聘平台。通过独有的人才大脑和行业图谱，打破传统的招聘流程，无需筛选简历，可直接开启面试，招聘专家全程陪伴，招聘效率提升90%以上。
          </p>
          <h3 class="h3-title">优势</h3>
          <div class="adv-box">
            <ul>
              <li v-for="(item, index) in bAdvs" :key="index">
                <p class="title">{{ item.title }}</p>
                <p class="des">{{ item.des }}</p>
                <div class="img">
                  <img :src="item.img" alt="" />
                </div>
              </li>
            </ul>
          </div>
          <h3 class="h3-title">更多了解</h3>
          <div class="learn-more">
            <ul>
              <li>
                <p>扫描关注点点速聘公众号</p>
                <div>
                  <img src="~@/assets/images/点点速聘公众号二维码.jpg" alt="" />
                </div>
              </li>
              <li>
                <p>下载点点速聘试用</p>
                <div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="empty-box"></div>
      <div class="box box-2 box-3">
        <div>
          <h2 class="_h2 _h2-title">
            点点求职<span><i>/</i>ABOUT HRTIGER</span>
          </h2>
          <h3 class="h3-title">简介</h3>
          <p class="p">
            点点求职是专注为人才提供高效求职、换职的服务平台。通过独有的人岗匹配算法及专属的职业顾问，定制推荐适合你的职位，让你的职业生涯更科学、更清晰、更宽广。
          </p>
          <h3 class="h3-title">优势</h3>
          <div class="adv-box">
            <ul>
              <li v-for="(item, index) in cAdvs">
                <p class="title">{{ item.title }}</p>
                <div class="img">
                  <img :src="item.img" alt="" />
                </div>
              </li>
            </ul>
          </div>
          <h3 class="h3-title">更多了解</h3>
          <div class="learn-more">
            <ul>
              <li>
                <p>扫描关注点点速聘公众号</p>
                <div>
                  <img src="~@/assets/images/点点速聘公众号二维码.jpg" alt="" />
                </div>
              </li>
              <li>
                <p>下载点点速聘试用</p>
                <div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="empty-box"></div>
      <div class="box-4">
        <h3>点点，不仅仅是招聘</h3>
        <div class="img">
          <img src="~@/assets/images/点点不仅仅是招聘@3x.png" alt="" />
        </div>
      </div>
      <div class="empty-box"></div>
    </div>
  </ProductServiceLayout>
</template>
<script>
import b1Image from '@/assets/images/简化流程@3x.png'
import b2Image from '@/assets/images/降低成本@3x.png'
import b3Image from '@/assets/images/减少流失@3x.png'
import c1Image from '@/assets/images/个性化推荐职位@3x.png'
import c2Image from '@/assets/images/查看offer率@3x.png'
import c3Image from '@/assets/images/极速面试反馈@3x.png'
import c4Image from '@/assets/images/专属求职顾问@3x.png'
export default {
  layout: 'app-layout',
  galleryData: {
    type: 'product-service-4',
  },
  head() {
    return {
      title: `点点招聘-职虎`,
    }
  },
  data() {
    return {
      bAdvs: [
        {
          title: '简化流程',
          des: '摒弃聊、筛、约，直达面试',
          img: b1Image,
        },
        {
          title: '降低成本',
          des: '入职后按人岗天付费，只为效果买单',
          img: b2Image,
        },
        {
          title: '减少流失',
          des: '职业顾问全程跟踪，帮助员工长期稳定在岗',
          img: b3Image,
        },
      ],
      cAdvs: [
        {
          title: '个性化职位推荐',
          img: c1Image,
        },
        {
          title: '查看offer概率',
          img: c2Image,
        },
        {
          title: '极速面试反馈',
          img: c3Image,
        },
        {
          title: '专属求职顾问',
          img: c4Image,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .product-service-4 {
    background: #ffffff;
    p {
      margin: 0;
    }
    .empty-box {
      width: 100%;
      background: #fff;
      height: 50px;
    }
    .box {
      width: 100%;
      background: #f8f8f8;
      box-sizing: border-box;
      > div {
        width: 990px;
        margin: 0 auto;
      }
      .h3-title {
        margin: 0;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 24px;
        position: relative;
        margin-left: 13px;
        &::before {
          content: '';
          display: block;
          width: 4px;
          height: 20px;
          background: #ffd400;
          position: absolute;
          left: -13px;
          top: 3px;
        }
      }
      .p {
        width: 845px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 28px;
      }
    }

    .box-1 {
      height: 384px;
      width: 100%;
      box-sizing: border-box;
      padding-top: 60px;
      padding-bottom: 50px;
      > div {
        width: 990px;
        margin: 0 auto;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }

    .box-2 {
      padding-top: 78px;
      padding-bottom: 87px;
      ._h2-title {
        margin-bottom: 57px;
      }
      .p {
        margin-top: 24px;
        margin-bottom: 70px;
      }
      .adv-box {
        margin-top: 32px;
        margin-bottom: 70px;
        overflow: hidden;
        ul {
          @include clearfix;
          li {
            width: 316px;
            height: 369px;
            background: #ffffff;
            box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.04);
            margin-right: 21px;
            float: left;
            box-sizing: border-box;
            padding-top: 33px;
            padding-left: 20px;
            &:last-child {
              margin-right: 0;
            }
            .title {
              font-size: 18px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #000000;
              line-height: 28px;
              margin-bottom: 7px;
            }
            .des {
              width: 233px;
              font-size: 14px;
              font-family: PingFangSC-Light, PingFang SC;
              font-weight: 300;
              color: #000000;
              line-height: 28px;
              margin-bottom: 28px;
              height: 56px;
            }
            .img {
              width: 268px;
              height: 182px;
              box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.11);
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
      .learn-more {
        margin-top: 50px;
        box-sizing: border-box;
        padding-left: 192px;
        > ul {
          @include clearfix;
        }
        li {
          text-align: center;
          width: 198px;
          float: left;
          margin-right: 140px;
          &:last-child {
            margin-right: 0;
          }
          p {
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #000000;
            line-height: 25px;
            margin-bottom: 16px;
          }
          div {
            width: 120px;
            height: 120px;
            background: #ffffff;
            margin: 0 auto;
          }
        }
      }
    }

    .box-3.box-2 {
      .adv-box {
        li {
          width: 230px;
          height: 479px;
          background: #ffffff;
          box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.04);
          float: left;
          box-sizing: border-box;
          padding-top: 38px;
          padding-left: 0;
          margin-right: 23px;
          .title {
            height: 28px;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #000000;
            line-height: 28px;
            text-align: center;
            margin-bottom: 32px;
          }
          .img {
            width: 169px;
            height: 352px;
            background: #f0f0f0;
            border-radius: 18px;
            overflow: hidden;
            margin: 0 auto;
            box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.11);
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    .box-4 {
      height: 614px;
      background: #f8f8f8;
      box-sizing: border-box;
      padding-bottom: 80px;
      padding-top: 80px;
      h3 {
        margin: 0;
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 42px;
        text-align: center;
        margin-bottom: 50px;
      }
      .img {
        width: 821px;
        height: 388px;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
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
