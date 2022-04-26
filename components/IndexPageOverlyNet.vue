<template>
  <div class="index-overlynet__layout">
    <h2>覆盖网络</h2>
    <ul>
      <li>
        <h3 class="lr-margin">超<span ref="ref1"></span>个网点</h3>
        <div>全国运营超过600个网点</div>
      </li>
      <li>
        <h3 class="lr-margin">覆盖<span ref="ref2"></span>个职业</h3>
        <div>全国运营超过600个网点</div>
      </li>
      <li>
        <h3 class="r-margin">
          <span class="span1"><span ref="ref3">10</span><span>W+</span></span
          >人参与学习
        </h3>
        <div>已有10W+同学在职虎学习平台上进行专业</div>
      </li>
      <li>
        <h3 class="l-margin">
          培训后就业率提高<span class="span1" ref="ref4"></span><span>%</span>
        </h3>
        <div>培训后提供对口就业机会，大大增加就业概率</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { CountUp } from 'countup.js'
// import { getBrowserVersion } from '@/utils/dom'
export default {
  mounted() {
    if (process.browser) {
      const vm = this
      // const version = getBrowserVersion()
      // if (version <= 9 && version > -1) {
      //   if (vm.$refs.ref1) {
      //     vm.$refs.ref1.innerHTML = 600
      //   }
      //   if (vm.$refs.ref2) {
      //     vm.$refs.ref1.innerHTML = 234
      //   }
      //   if (vm.$refs.ref3) {
      //     vm.$refs.ref1.innerHTML = 85
      //   }
      //   return
      // }
      const options = {
        duration: 2,
        useEasing: false,
        useGrouping: false,
        separator: '',
        decimal: '',
      }
      const demos = []
      if (vm.$refs.ref1) {
        const demo = new CountUp(vm.$refs.ref1, 600, options)
        if (!demo.error) {
          demos.push(demo)
        }
      }
      if (vm.$refs.ref2) {
        const demo = new CountUp(vm.$refs.ref2, 234, options)
        if (!demo.error) {
          demos.push(demo)
        }
      }
      if (vm.$refs.ref3) {
        const demo = new CountUp(vm.$refs.ref3, 10, options)
        if (!demo.error) {
          demos.push(demo)
        }
      }
      if (vm.$refs.ref4) {
        const demo = new CountUp(vm.$refs.ref4, 85, options)
        if (!demo.error) {
          demos.push(demo)
        }
      }

      const callback = _.debounce(() => {
        vm.scrollHandle(demos)
      }, 150)

      window.addEventListener('scroll', callback, true)

      vm.$once('hook:beforeDestroy', () => {
        window.removeEventListener('scroll', callback)
      })
    }
  },
  methods: {
    scrollHandle(demos) {
      const offset = this.$el.getBoundingClientRect() // vue中，使用this.$el获取当前组件的根元素
      const offsetTop = offset.top
      const offsetBottom = offset.bottom
      // const offsetHeight = offset.height

      // 进入可视区域
      if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
        if (demos.length) {
          demos.forEach((t) => {
            t.start()
          })
        }
      } else {
        // 移出可视区
        if (demos.length) {
          demos.forEach((t) => {
            t.reset()
          })
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@mixin styles {
  .index-overlynet__layout {
    height: 460px;
    box-sizing: border-box;
    padding-top: 95px;
    h2 {
      height: 70px;
      font-size: 50px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.8);
      line-height: 70px;
      text-align: center;
      margin: 0;
      padding: 0;
      margin-bottom: 81px;
    }
    ul {
      @include clearfix;
      margin-left: 136px;
      li {
        float: left;
        margin-right: 80px;
        h3 {
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 18px;
          letter-spacing: 1px;
          margin: 0;
          margin-bottom: 30px;
          word-break: keep-all;
          &.lr-margin {
            span {
              margin: 0 10px;
            }
          }
          &.r-margin {
            .span1 {
              margin-right: 10px;
            }
          }
          &.l-margin {
            .span1 {
              margin-left: 10px;
            }
          }
          span {
            font-size: 44px;
            font-family: Arial-BoldItalicMT, Arial;
            font-weight: bold;
            color: #ff9100;
            line-height: 30px;
            font-style: italic;
          }
        }
        div {
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          letter-spacing: 1px;
          line-height: 29px;
        }
        &:nth-child(1) {
          h3 {
            width: 163px;
          }
          div {
            width: 209px;
          }
        }
        &:nth-child(2) {
          h3 {
            width: 190px;
          }
          div {
            width: 247px;
          }
        }
        &:nth-child(3) {
          h3 {
            width: 226px;
          }
          div {
            width: 226px;
          }
        }
        &:nth-child(4) {
          h3 {
            width: 243px;
          }
          div {
            width: 243px;
          }
        }

        &:last-child {
          margin-right: 0;
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
