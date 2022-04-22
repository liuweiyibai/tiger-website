<template>
  <div
    class="app-header"
    :class="{
      shadow: hasShadow,
    }"
  >
    <div class="app-logo">
      <nuxt-link to="/">
        <img src="~@/assets/images/logo-顶部@3x.png" alt=""
      /></nuxt-link>
    </div>
    <ul class="app-nav">
      <li
        class="nav-link home__link"
        :class="{
          'active-link': getCurrentPath('/'),
        }"
      >
        <nuxt-link to="/">首页</nuxt-link>
      </li>
      <li
        class="nav-link info-center__link"
        :class="{
          'active-link': getCurrentPath('/info-center'),
        }"
      >
        <nuxt-link to="/info-center?key=1">资讯中心</nuxt-link>
        <ul class="nav-dropdown">
          <li
            :class="{
              active: getInfoCenerHigh('1'),
            }"
          >
            <nuxt-link to="/info-center?key=1">最新热点</nuxt-link>
          </li>
          <li
            :class="{
              active: getInfoCenerHigh('2'),
            }"
          >
            <nuxt-link to="/info-center?key=2">政策法规</nuxt-link>
          </li>
          <li
            :class="{
              active: getInfoCenerHigh('3'),
            }"
          >
            <nuxt-link to="/info-center?key=3">活动资讯</nuxt-link>
          </li>
        </ul>
      </li>
      <li
        class="nav-link new-job-standard__link"
        :class="{
          'active-link': getCurrentPath('/new-pos-standard'),
        }"
      >
        <nuxt-link to="/new-pos-standard">新职业标准</nuxt-link>
      </li>
      <li
        class="nav-link product-service__link"
        :class="{
          'active-link': getCurrentPath('/product-service'),
        }"
      >
        <nuxt-link to="/product-service">产品服务</nuxt-link>
        <ul class="nav-dropdown">
          <li :class="{ active: getSubHigh('/product-service') }">
            <nuxt-link to="/product-service">新职业培训</nuxt-link>
          </li>
          <li :class="{ active: getSubHigh('/product-service/2') }">
            <nuxt-link to="/product-service/2">职业评价</nuxt-link>
          </li>
          <li :class="{ active: getSubHigh('/product-service/3') }">
            <nuxt-link to="/product-service/3">院校合作</nuxt-link>
          </li>
          <li :class="{ active: getSubHigh('/product-service/4') }">
            <nuxt-link to="/product-service/4">点点招聘</nuxt-link>
          </li>
        </ul>
      </li>
      <li
        class="nav-link about__link"
        :class="{
          'active-link': getCurrentPath('/about'),
        }"
      >
        <nuxt-link to="/about">关于我们</nuxt-link>
        <ul class="nav-dropdown">
          <li :class="{ active: getSubHigh('/about') }">
            <nuxt-link to="/about">公司介绍</nuxt-link>
          </li>
          <li :class="{ active: getSubHigh('/about/branch') }">
            <nuxt-link to="/about/branch">分支结构</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="app-nav-right">
      <img src="~@/assets/images/客服电话@3x.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getClientHeight, getScrollTop } from '@/utils/dom'
import _ from 'lodash'
export default {
  data() {
    return {
      hasShadow: false,
    }
  },
  mounted() {
    const vm = this
    if (process.browser) {
      vm.$nextTick(() => {
        const height = getClientHeight()
        const callback = _.debounce(() => {
          const top = getScrollTop()
          if (top >= height) {
            // 超过一屏
            vm.hasShadow = true
          } else {
            vm.hasShadow = false
          }
        }, 150)
        window.addEventListener('scroll', callback)
        vm.$once('hook:beforeDestroy', () => {
          window.removeEventListener('scroll', callback)
        })
      })
    }
  },
  methods: {
    getCurrentPath(path) {
      const vm = this
      const _path = vm.$route.path
      if (path === '/' && _path === '/') {
        return true
      }

      if (_path.indexOf(path) > -1 && path !== '/') {
        return true
      }
      return false
    },
    getInfoCenerHigh(index) {
      const vm = this
      const path = vm.$route.path
      const query = vm.$route.query
      let key = query.key
      if (key != '1' && key != '2' && key != '3') key = '1'
      return path === '/info-center' && key == index
    },

    getSubHigh(path) {
      const vm = this
      const _path = vm.$route.path
      if (_path === path && path !== '/') {
        return true
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin active {
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
}
@mixin styles {
  .app-header {
    width: 1440px;
    height: 80px;
    background: #ffffff;
    box-sizing: border-box;
    padding-left: 73px;
    position: fixed;
    top: 0;
    z-index: 999;
    transition: all 0.3s;
    &.shadow {
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.22);
    }
    .app-logo {
      width: 110px;
      height: 38px;
      margin-right: 138px;
      float: left;
      img {
        width: 100%;
        height: 100%;
        margin-top: 21px;
      }
    }

    .app-nav {
      font-size: 16px;
      font-weight: 400;
      color: #000000;
      letter-spacing: 1px;
      float: left;
      .nav-link {
        float: left;
        line-height: 80px;
        position: relative;
        border-bottom: 4px solid transparent;
        height: 100%;
        transition: all linear 0.3s;
        text-align: center;

        &.home__link {
          width: 85px;
        }

        // 资讯中心
        &.info-center__link {
          width: 130px;
          &:hover {
            .nav-dropdown {
              height: 174px;
            }
          }
        }

        // 新职业标准
        &.new-job-standard__link {
          width: 150px;
        }

        // 产品服务
        &.product-service__link {
          width: 130px;
          &:hover {
            .nav-dropdown {
              height: 213px;
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

        &:hover,
        &.active-link {
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
          }
        }
      }
    }

    .app-nav-right {
      float: right;
      margin-right: 70px;
      width: 173px;
      height: 27px;
      cursor: pointer;
      margin-top: 26px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
@include styles();
@include respond() {
  @include styles();
}
</style>
