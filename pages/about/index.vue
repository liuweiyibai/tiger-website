<template>
  <AboutLayout>
    <div class="about-container">
      <div class="about-hrtiger">
        <div>
          <h2 class="_h2 _h2-title h2-1">
            关于职虎<span><i>/</i>ABOUT HRTIGER</span>
          </h2>
          <p class="_p p-1">
            北京职虎人力资源有限公司（简称“职虎”）致力于实现人与职业的完美连接。<br />
            职虎以新职业培训和人力资源服务为核心业务，通过构建新职业人才发展生态平台，为职业人才提供“选职、培训、评价、就业、发展”全链条服务，为第三方评价机构、培训机构等市场主体在技术、品牌、运营等方面赋能，为政府推进人才发展体制改革、规划职业结构和制定相关政策等提供决策参考。
          </p>
        </div>
      </div>
      <div class="enterprise-concerts-box">
        <div>
          <h2 class="_h2 _h2-title h2-2">
            企业理念<span><i>/</i>ENTERPRISE CONCEFT</span>
          </h2>
          <ul class="ul-1">
            <li v-for="(item, index) in enterpriseConcerts" :key="index">
              <div class="image-box">
                <img :src="item.img" alt="" />
              </div>
              <div class="title-box">{{ item.title }}</div>
              <div class="des-box">{{ item.des }}</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="qualification-hono-box">
        <div>
          <h2 class="_h2 _h2-title h2-3">
            资质荣誉<span><i>/</i>QUALIFICATION HONO</span>
          </h2>
          <ul class="ul-2">
            <li v-for="(item, index) in qualificationHonos" :key="index">
              <div class="image-box">
                <img :src="item.img" alt="" />
              </div>
              <div class="title-box">{{ item.title }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </AboutLayout>
</template>
<script>
import ShiMingImage from '@/assets/images/使命@3x.png'
import YuanJingImage from '@/assets/images/愿景@3x.png'
import JiaZhiGuanImage from '@/assets/images/价值观@3x.png'
import ZiZhi1 from '@/assets/images/北京人力资源服务行业协会副会长单位@3x.png'
import ZiZhi2 from '@/assets/images/中关村创享人力资源大数据联盟@3x.png'
export default {
  name: 'AboutPage',
  layout: 'app-layout',
  galleryData: {
    type: 'about-page',
  },

  head() {
    return {
      title: `关于我们-职虎`,
    }
  },
  data() {
    return {
      enterpriseConcerts: [
        {
          title: '使命',
          des: '服务职业变革  为职业赋能  给人职业希望',
          img: ShiMingImage,
        },
        {
          title: '愿景',
          des: '助力3亿人的职业转型平台',
          img: YuanJingImage,
        },
        {
          title: '价值观',
          des: '正直向善 以人为本',
          img: JiaZhiGuanImage,
        },
      ],

      qualificationHonos: [
        {
          img: ZiZhi1,
          title: '北京人力资源服务行业协会副会长单位',
        },
        {
          img: ZiZhi2,
          title: '中关村创享人力资源大数据联盟',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .about-container {
    box-sizing: border-box;
    padding-top: 60px;
    padding-bottom: 58px;
    box-sizing: border-box;
    background: #fff;
    .about-hrtiger,
    .qualification-hono-box {
      > div {
        width: 990px;
        margin: 0 auto;
      }
    }
    .qualification-hono-box > div {
      box-sizing: border-box;
      padding-top: 50px;
    }
    // ._h2-title span {
    //   color: #ffd400;
    // }
    .p-1 {
      margin-bottom: 58px;
    }
    .h2-1 {
      margin-bottom: 22px;
    }
    .h2-2 {
      margin-bottom: 72px;
      span {
        color: #666666;
      }
    }
    .h2-3 {
      margin-bottom: 32px;
    }
    .enterprise-concerts-box {
      background: #f5f5f5;

      > div {
        width: 990px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 80px 0 94px 0;
      }
    }

    .ul-1 {
      li {
        margin-bottom: 62px;
        @include clearfix;
        .image-box {
          width: 70px;
          height: 70px;
          background: #000000;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 30px;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title-box {
          font-size: 29px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #000000;
          line-height: 28px;
          margin-right: 60px;
          float: left;
          margin-top: 21px;
          width: 87px;
        }
        .des-box {
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 24px;
          float: left;
          margin-top: 23px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .ul-2 {
      @include clearfix;
      margin: -10px;
      li {
        float: left;
        width: 249px;
        height: 221px;
        margin: 10px;
        .image-box {
          width: 249px;
          height: 187px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title-box {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 28px;
          text-align: center;
          margin-top: 6px;
        }
      }
    }
  }
}

@include styles;
@include respond() {
  @include styles;
}
</style>
