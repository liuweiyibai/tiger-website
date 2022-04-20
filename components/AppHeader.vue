<template>
  <div class="app-header">
    <div class="app-logo"></div>
    <ul class="app-nav">
      <li class="nav-link home__link">
        <nuxt-link to="/">首页</nuxt-link>
      </li>
      <li class="nav-link info-center__link">
        <nuxt-link to="/redu">资讯中心</nuxt-link>
        <ul class="nav-dropdown">
          <li class="active"><nuxt-link to="/redu">最新热度</nuxt-link></li>
          <li><nuxt-link to="/redu">政策法规</nuxt-link></li>
          <li><nuxt-link to="/redu">活动资讯</nuxt-link></li>
        </ul>
      </li>
      <li class="nav-link new-job-standard__link">
        <nuxt-link to="/new-job-standard">新职业标准</nuxt-link>
      </li>
      <li class="nav-link product-service__link">
        <nuxt-link to="">产品服务</nuxt-link>
        <ul class="nav-dropdown">
          <li class="active"><nuxt-link to="/redu">新职业培训</nuxt-link></li>
          <li><nuxt-link to="/redu">职业评价</nuxt-link></li>
          <li><nuxt-link to="/redu">院校合作</nuxt-link></li>
          <li><nuxt-link to="/redu">点点招聘</nuxt-link></li>
        </ul>
      </li>
      <li class="nav-link about__link">
        <nuxt-link to="">关于我们</nuxt-link>
        <ul class="nav-dropdown">
          <li class="active"><nuxt-link to="/redu">公司介绍</nuxt-link></li>
          <li><nuxt-link to="/redu">分支结构</nuxt-link></li>
        </ul>
      </li>
    </ul>
    <div class="app-nav-right">
      <span>400-1566-001</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin active {
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
}
.app-header {
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.22);
  box-sizing: border-box;
  padding-left: 73px;
  position: fixed;
  top: 0;
  z-index: 999;
  @include respond() {
    height: 80px;
    padding-left: 73px;
  }

  .app-logo {
    width: 110px;
    height: 80px;
    background-color: red;
    margin-right: 138px;
    float: left;
    @include respond() {
      height: 80px;
      margin-right: 138px;
    }
  }

  .app-nav {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    letter-spacing: 1px;
    float: left;
    @include respond() {
      font-size: 16px;
    }
    .nav-link {
      float: left;
      line-height: 80px;
      position: relative;
      border-bottom: 4px solid transparent;
      height: 100%;
      transition: all linear 0.3s;
      text-align: center;
      @include respond() {
        line-height: 80px;
        border-bottom: 4px solid transparent;
      }
      &.home__link {
        width: 85px;
        @include respond() {
          width: 85px;
        }
      }

      // 资讯中心
      &.info-center__link {
        width: 130px;
        @include respond() {
          width: 130px;
        }
        &:hover {
          .nav-dropdown {
            height: 174px;
            @include respond() {
              height: 174px;
            }
          }
        }
      }

      // 新职业标准
      &.new-job-standard__link {
        width: 150px;
        @include respond() {
          width: 150px;
        }
      }

      // 产品服务
      &.product-service__link {
        width: 130px;
        &:hover {
          .nav-dropdown {
            height: 213px;
          }
        }

        @include respond() {
          width: 130px;
          &:hover {
            .nav-dropdown {
              height: 213px;
            }
          }
        }
      }

      &.about__link {
        width: 114px;
        &:hover {
          .nav-dropdown {
            height: 135px;
          }
        }

        @include respond() {
          width: 114px;
          &:hover {
            .nav-dropdown {
              height: 135px;
            }
          }
        }
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
        transition: all linear 0.3s;
      }

      @include respond() {
        &:hover {
          @include active();
          &:after {
            height: 4px;
          }
        }
      }

      &:hover {
        @include active();
        &:after {
          height: 4px;
          background: #ffd400;
        }
      }

      .nav-dropdown {
        position: absolute;
        background: #fff;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.22);
        top: 80px;
        left: -25px;
        right: -25px;
        transition: all linear 0.3s;
        height: 0;
        overflow: hidden;
        @include respond() {
          top: 80px;
          left: -25px;
          right: -25px;
        }

        li {
          font-size: 14px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #666666;
          line-height: 13px;
          letter-spacing: 1px;
          margin-bottom: 26px;
          position: relative;
          box-sizing: border-box;
          padding-left: 53px;
          text-align: left;
          transition: all linear 0.3s;
          &:first-child {
            margin-top: 38px;
          }
          &:before {
            content: '';
            position: absolute;
            width: 2px;
            height: 12px;
          }
          &:hover,
          &.active {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #000000;
            &:before {
              background: #ffd400;
              border-radius: 1px;
              left: 45px;
            }
          }

          @include respond() {
            font-size: 14px;
            line-height: 13px;
            margin-bottom: 26px;
            padding-left: 53px;

            &:first-child {
              margin-top: 38px;
            }
            &:before {
              width: 2px;
              height: 12px;
            }
            &:hover,
            &.active {
              font-size: 14px;
              &:before {
                left: 45px;
              }
            }
          }
        }
      }
    }
  }

  .app-nav-right {
    float: right;
    margin-right: 70px;
    font-size: 22px;
    font-family: Gilroy-Bold, Gilroy;
    font-weight: bold;
    color: #666666;
    line-height: 80px;

    @include respond() {
      margin-right: 70px;
      font-size: 22px;
      line-height: 80px;
    }
  }
}
</style>
