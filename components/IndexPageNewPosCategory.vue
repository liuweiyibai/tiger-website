<template>
  <div class="index-newpos__layout">
    <h2>新职业目录</h2>
    <div class="category">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="{ active: item.name === currentTab.name }"
          @mouseover="onHover(item)"
          @mouseleave="mouseLeave(item)"
        >
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <div class="line"></div>
    </div>
    <div class="detail-box">
      <div class="box-title">
        <transition name="fade" mode="out-in">
          <span :key="`name-${currentTab.name}`">{{ currentTab.name }}</span>
        </transition>
      </div>
      <transition name="fade" mode="out-in">
        <ul class="box-content" :key="currentTab.name">
          <li
            v-for="(_item, _index) in currentTab.children"
            :key="`li-${_index}`"
          >
            {{ _item }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { _setInterval } from '@/utils/dom'
const list = [
  {
    name: '信息技术',
    children: [
      '人工智能工程技术人员',
      '物联网工程技术人员',
      '大数据工程技术人员',
      '云计算工程技术人员',
      '虚拟现实工程技术人员',
      '区块链工程技术人员',
      '集成电路工程技术人员',
      '信息安全测试员',
      '区块链应用操作员',
      '密码技术应用员',
      '服务机器人应用技术员',
    ],
  },
  {
    name: '生产制造',
    children: [
      '智能制造工程技术人员',
      '工业互联网工程技术人员',
      '工业机器人系统操作员',
      '工业机器人系统运维员',
      '工业视觉系统运维员',
      '增材制造设备操作员',
      '智能硬件装调员',
      '物联网安装调试员',
      '无人机装调检修工',
    ],
  },
  {
    name: '商业服务',
    children: [
      '在线学习服务师',
      '互联网营销师',
      '数字化管理师',
      '连锁经营管理师',
      '网约配送员',
      '城市管理网格员',
      '易货师',
      '二手车经纪人',
      '汽车救援员',
      '全媒体运营师',
      '调饮师',
      '职业培训师',
      '管廊运维员',
      '酒体设计师',
    ],
  },
  {
    name: '卫生健康',
    children: [
      '呼吸治疗师',
      '健康照护师',
      '出生缺陷防控咨询师',
      '康复辅助技术咨询师',
      '社群健康助理员',
      '老年人能力评估师',
      '食品安全管理师',
    ],
  },
  {
    name: '建筑环保',
    children: [
      '呼吸治疗师',
      '健康照护师',
      '出生缺陷防控咨询师',
      '康复辅助技术咨询师',
      '社群健康助理员',
      '老年人能力评估师',
      '食品安全管理师',
    ],
  },
  {
    name: '金融文娱',
    children: ['电子竞技运营师', '电子竞技员', '企业合规师', '公司金融顾问'],
  },
  {
    name: '交通物流',
    children: ['电子竞技运营师', '电子竞技员', '企业合规师', '公司金融顾问'],
  },
  {
    name: '更多职业',
    children: ['农业经理人', '人工智能训练师', '电子数据取证分析师'],
  },
]
export default {
  data() {
    return {
      list: list,
      currentTab: list[0],
      callback: () => {},
    }
  },
  mounted() {
    if (process.browser) this.interval()
    const vm = this
    vm.$once('hook:beforeDestroy', () => {
      vm.callback()
    })
  },
  methods: {
    onHover: _.debounce(function (item) {
      const vm = this
      vm.callback()
      if (item.name === vm.currentTab.name) return
      vm.currentTab = item
    }, 300),

    mouseLeave: _.debounce(function (item) {
      const vm = this
      vm.currentTab = item
      vm.interval()
    }, 300),

    interval() {
      const vm = this
      let i = list.findIndex((t) => t.name === vm.currentTab.name)
      function update(item) {
        vm.currentTab = item
      }
      const { callback } = _setInterval(() => {
        i += 1
        if (i >= list.length) {
          i = 0
          update(list[0])
        } else {
          update(list[i])
        }
      }, 3000)
      vm.callback = callback
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .index-newpos__layout {
    width: 100%;
    height: 707px;
    background-image: url(~@/assets/images/img_职业目录底图@3x.png);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    padding-top: 53px;
    h2 {
      height: 70px;
      font-size: 50px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 70px;
      text-align: center;
      margin: 0;
      padding: 0;
    }

    .category {
      padding: 0 34px;
      box-sizing: border-box;
      width: 1200px;
      margin: 0 auto;
      margin-top: 62px;
      position: relative;
      ul {
        @include clearfix;
        li {
          float: left;
          margin-right: 52px;
          cursor: pointer;
          position: relative;
          color: #ffffff;
          &:last-child {
            margin-right: 0;
          }
          &:before {
            content: '';
            position: absolute;
            display: block;
            width: 8px;
            height: 8px;
            background: #828285;
            left: 50%;
            bottom: -49px;
            margin-left: -4px;
            border-radius: 50%;
            transition: all 0.6s;
          }
          &::after {
            content: '';
            position: absolute;
            display: block;
            width: 0px;
            height: 0px;
            left: 50%;
            bottom: -57.5px;
            margin-left: -13px;
            border-radius: 50%;
            transition: all 0.6s;
            width: 26px;
            height: 26px;
          }
          &:hover,
          &.active {
            color: #ffd400;
            &::before {
              background: #ffd400;
              z-index: 2;
            }
            &::after {
              background: #706327;
            }
          }
        }
        span {
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;

          line-height: 20px;
        }
      }
      .line {
        height: 1px;
        width: 100%;
        background: rgba(255, 255, 255, 0.39);
        position: absolute;
        bottom: -45px;
        left: 0;
      }
    }

    .detail-box {
      height: 308px;
      width: 1040px;
      margin: 0 auto;
      margin-top: 108px;
      background-image: url(~@/assets/images/img_职业文字底图@3x.png);
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 13px;
      overflow: hidden;
      .box-title {
        background: linear-gradient(270deg, #ffe502 0%, #fdc601 100%);
        height: 60px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 60px;
        text-align: center;
      }
      .box-content {
        height: 248px;
        box-sizing: border-box;
        padding: 0 132px;
        padding-right: 32px;
        padding-top: 28px;
        li {
          margin-right: 100px;
          margin-bottom: 25px;
          float: left;
          font-size: 18px;
          min-width: 192px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 18px;
          letter-spacing: 1px;
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
