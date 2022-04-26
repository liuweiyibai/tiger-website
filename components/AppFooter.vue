<template>
  <div class="app-footer">
    <div class="footer-1">
      <div class="footer1-logo">
        <img src="~@/assets/images/logo_底部@3x.png" alt="" />
      </div>
      <div class="footer1-address">
        <span>总部地址</span>
        <a
          target="_blank"
          href="https://map.baidu.com/search/%E5%8C%97%E4%BA%AC%E5%B8%82%E4%B8%9C%E5%9F%8E%E5%8C%BA%E5%92%8C%E5%B9%B3%E9%87%8C%E4%B8%9C%E8%A1%977%E5%8F%B7/@12961210.125,4832401,19z?querytype=s&da_src=shareurl&wd=%E5%8C%97%E4%BA%AC%E5%B8%82%E4%B8%9C%E5%9F%8E%E5%8C%BA%E5%92%8C%E5%B9%B3%E9%87%8C%E4%B8%9C%E8%A1%977%E5%8F%B7&c=131&src=0&pn=0&sug=0&l=13&b=(12933499,4819860;12994939,4850868)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1"
          >北京市东城区和平里东街7号</a
        >
      </div>
    </div>
    <div class="footer-line"></div>
    <div class="footer-2">
      <ul class="footer-2-1">
        <li class="title">资讯中心</li>
        <li><nuxt-link to="/info-center?key=1">最新热点</nuxt-link></li>
        <li><nuxt-link to="/info-center?key=2">政策法规</nuxt-link></li>
        <li><nuxt-link to="/info-center?key=3">活动资讯</nuxt-link></li>
      </ul>
      <ul class="footer-2-2">
        <li class="title">新职业标准</li>
        <li><nuxt-link to="/new-pos-standard">新标准</nuxt-link></li>
      </ul>
      <ul class="footer-2-3">
        <li class="title">产品服务</li>
        <li><nuxt-link to="/product-service">新职业培训</nuxt-link></li>
        <li><nuxt-link to="/product-service/2">职业评价支持</nuxt-link></li>
        <li><nuxt-link to="/product-service/3">院校合作</nuxt-link></li>
        <li><nuxt-link to="/product-service/4">点点招聘</nuxt-link></li>
      </ul>
      <ul class="footer-2-4">
        <li class="title">关于我们</li>
        <li><nuxt-link to="/about">公司介绍</nuxt-link></li>
        <li><nuxt-link to="/about/branch">分支机构</nuxt-link></li>
      </ul>
      <ul class="footer-2-5">
        <li class="title">了解更多</li>
        <li class="box-content">
          <div class="box">
            <div class="image">
              <img src="~@/assets/images/职虎公众号.png" alt="" />
            </div>
            <span class="text">关注新职业动态</span>
          </div>
          <div class="box">
            <div class="image">
              <img src="~@/assets/images/职虎App.png" alt="" />
            </div>
            <span class="text">下载职虎APP</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer-line"></div>
    <div class="footer-3">
      <div class="copyright">
        Copyright © www.hrtiger.cn, All Rights Reserved. 京ICP备2021007705号-2
      </div>
      <div class="image">
        <img
          src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin styles() {
  .app-footer {
    width: 100%;
    background: #000000;
    box-sizing: border-box;
    padding: 0 70px;
    overflow: hidden;
    .footer-1 {
      padding-top: 47px;
      padding-bottom: 30px;
      @include clearfix;

      .footer1-logo {
        height: 61px;
        width: 176px;
        float: left;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .footer1-address {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        float: right;
        margin-top: 16px;
        span {
          margin-right: 9px;
        }
      }
    }
    .footer-2 {
      margin-top: 55px;
      margin-left: 18px;
      margin-bottom: 147px;
      font-size: 15px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #ffffff;
      .title {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 14px;
        margin-bottom: 45px;
      }
      ul {
        float: left;
      }
      ul li {
        margin-bottom: 30px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .footer-2-1 {
        margin-right: 140px;
      }
      .footer-2-2 {
        margin-right: 140px;
      }
      .footer-2-3 {
        margin-right: 140px;
      }
      .footer-2-4 {
        margin-right: 140px;
      }
      .footer-2-5 {
        .box-content {
          @include clearfix;
          .box {
            float: left;
          }
          .image {
            width: 110px;
            height: 110px;
            border-radius: 2px;
            &:first-child {
              margin-right: 44px;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
          .text {
            display: block;
            font-size: 13px;
            width: 110px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.8);
            text-align: center;
            margin-top: 14px;
          }
        }
      }
      @include clearfix;
    }
    .footer-3 {
      height: 74px;
      .copyright {
        float: left;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        box-sizing: border-box;
        line-height: 74px;
      }
      .image {
        float: left;
        margin-left: 15px;
        line-height: 74px;
        img {
          width: 24px;
          height: 25px;
          vertical-align: middle;
        }
      }

      @include clearfix;
    }
    .footer-line {
      width: 100%;
      height: 1px;
      background: #ffffff;
      opacity: 0.18;
    }
  }
}

@include styles();
@include respond() {
  @include styles();
}
</style>
