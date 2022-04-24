<template>
  <ProductServiceLayout title="院校合作" brandTitle="院校合作">
    <div class="product-service-3">
      <p class="_p p-1">
        职虎坚持“技能为先，就业导向”的理念，打造了职虎学习平台、职建云管理平台、点点招聘平台等。职虎学习平台提供新职业的在线学习、人才评价等服务；职建云管理平台提供新职业的实操实训、客户管理等服务；点点招聘平台提供新职业人才的职业规划、就业指导等服务。
      </p>
      <p class="_p p-2">
        职虎创新发展了“选职、培训、评价、就业、发展”一站式全链条服务模式，构建了新职业人才培养发展的完整体系。
      </p>
      <p class="_p p-3">
        职虎联合地方政府、院校、培训机构及行业企业等单位共建新职业高技能人才培养基地，将在全国各省市地区建立新职业人才的培训基地、评价基地、就业服务基地、创新创业基地、大赛集训基地、产业服务基地等，提供师资培养、专业共建、实训室共建、产业学院共建、实习实训、社会培训、创新创业、就业指导、政策咨询、社会服务等多种教育产品及服务。
      </p>
      <h2 class="_h2 _h2-title">
        合作方向<span><i>/</i>ABOUT HRTIGER</span>
      </h2>
      <div class="box">
        <ul ref="uls">
          <li v-for="item in 8" :key="item">
            <div class="normal">{{ item }}normal</div>
            <div class="info">{{ item }}info</div>
          </li>
        </ul>
      </div>
    </div>
  </ProductServiceLayout>
</template>

<script>
export default {
  layout: 'app-layout',
  galleryData: {
    type: 'product-service-3',
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const vm = this
      if (process.browser) {
        const uls = vm.$refs.uls
        const nodes = [].slice.call(uls.querySelectorAll('li'), 0)
        const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' }
        const classNames = ['in', 'out']
          .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
          .reduce((a, b) => a.concat(b))

        const getDirectionKey = (ev, node) => {
          const { width, height, top, left } = node.getBoundingClientRect()
          const l = ev.pageX - (left + window.pageXOffset)
          const t = ev.pageY - (top + window.pageYOffset)
          const x = l - (width / 2) * (width > height ? height / width : 1)
          const y = t - (height / 2) * (height > width ? width / height : 1)
          return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
        }

        class Item {
          constructor(element) {
            this.element = element
            this.element.addEventListener('mouseover', (ev) =>
              this.update(ev, 'in')
            )
            this.element.addEventListener('mouseout', (ev) =>
              this.update(ev, 'out')
            )
          }

          update(ev, prefix) {
            this.element.classList.remove(...classNames)
            this.element.classList.add(
              `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
            )
          }
        }

        nodes.forEach((node) => new Item(node))
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  @keyframes in-top {
    from {
      transform: rotate3d(-1, 0, 0, 90deg);
    }

    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }

  @keyframes in-right {
    from {
      transform: rotate3d(0, -1, 0, 90deg);
    }

    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }

  @keyframes in-bottom {
    from {
      transform: rotate3d(1, 0, 0, 90deg);
    }

    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }

  @keyframes in-left {
    from {
      transform: rotate3d(0, 1, 0, 90deg);
    }

    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }

  @keyframes out-top {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }

    to {
      transform: rotate3d(-1, 0, 0, 104deg);
    }
  }

  @keyframes out-right {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }

    to {
      transform: rotate3d(0, -1, 0, 104deg);
    }
  }

  @keyframes out-bottom {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }

    to {
      transform: rotate3d(1, 0, 0, 104deg);
    }
  }

  @keyframes out-left {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }

    to {
      transform: rotate3d(0, 1, 0, 104deg);
    }
  }

  .product-service-3 {
    width: 990px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 112px;
    padding-bottom: 100px;
    ._h2-title {
      margin-bottom: 40px;
    }
    .p-1 {
      margin-bottom: 30px;
    }
    .p-2 {
      margin-bottom: 30px;
    }
    .p-3 {
      margin-bottom: 84px;
    }
    .box {
      ul {
        @include clearfix;
        margin: -25px;
        li {
          width: 470px;
          height: 310px;
          margin: 25px;
          float: left;
          position: relative;
          perspective: 1900px;
          overflow: hidden;
          .info {
            transform: rotate3d(1, 0, 0, 90deg);
            width: 100%;
            height: 100%;
            padding: 20px;
            position: absolute;
            top: 0;
            left: 0;
            pointer-events: none;
            background: #ffd400;
            box-sizing: border-box;
          }
          .normal {
            width: 100%;
            height: 100%;
            background-color: #ecf0f1;
            color: rgba(52, 73, 94, 0.6);
            box-shadow: inset 0 2px 20px #e6ebed;
            text-align: center;
            font-size: 50px;
          }
          &.in-top .info {
            transform-origin: 50% 0%;
            animation: in-top 300ms ease 0ms 1 forwards;
          }

          &.in-right .info {
            transform-origin: 100% 0%;
            animation: in-right 300ms ease 0ms 1 forwards;
          }

          &.in-bottom .info {
            transform-origin: 50% 100%;
            animation: in-bottom 300ms ease 0ms 1 forwards;
          }

          &.in-left .info {
            transform-origin: 0% 0%;
            animation: in-left 300ms ease 0ms 1 forwards;
          }

          &.out-top .info {
            transform-origin: 50% 0%;
            animation: out-top 300ms ease 0ms 1 forwards;
          }

          &.out-right .info {
            transform-origin: 100% 50%;
            animation: out-right 300ms ease 0ms 1 forwards;
          }

          &.out-bottom .info {
            transform-origin: 50% 100%;
            animation: out-bottom 300ms ease 0ms 1 forwards;
          }

          &.out-left .info {
            transform-origin: 0% 0%;
            animation: out-left 300ms ease 0ms 1 forwards;
          }
        }
      }
    }
  }
}
@include styles();
</style>
