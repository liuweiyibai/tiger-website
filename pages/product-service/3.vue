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
        合作方向<span><i>/</i>COOPERATION DIRECTION</span>
      </h2>
      <div class="box">
        <ul ref="uls">
          <li v-for="(item, index) in list" :key="index">
            <div class="normal">
              <span>{{ item.title }}</span>
              <img :src="item.img" alt="" />
            </div>
            <div class="info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.des }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </ProductServiceLayout>
</template>

<script>
import image1 from '@/assets/images/院校合作-新职业人才培训基地@3x.png'
import image2 from '@/assets/images/院校合作-双师型@3x.png'
import image3 from '@/assets/images/院校合作-技能人才@3x.png'
import image4 from '@/assets/images/院校合作-就业指导@3x.png'
import image5 from '@/assets/images/院校合作-创业人才@3x.png'
import image6 from '@/assets/images/院校合作-新职业领域@3x.png'
import image7 from '@/assets/images/院校合作-技能大赛@3x.png'
import image8 from '@/assets/images/院校合作-教学资源@3x.png'
const platformCooperation = [
  {
    title: '新职业人才培训基地',
    des: '职虎联合地方政府、院校、社会培训机构及企业等共建新职业高技能人才培训（评价）基地，逐渐完善职业实操实训所需的设施设备，打造成为服务地区产业转型发展的新职业人才培养摇篮。',
    img: image1,
  },
  {
    title: '“双师型”师资团队',
    des: '校企合作建立一支既有突出教学能力、又有丰富实践操作能力及应用经验的高素质种子师资队伍，重点突出“双师”素质结构，建立高层次新职业师资人才培养计划，打造教师个人IP，塑造名师大师。',

    img: image2,
  },
  {
    title: '技能人才评价基地',
    des: '以院校及社会培训机构为培训主体，以新职业人才培训基地为培训载体，校企合作向当地人社厅联合申报新职业社会培训评价组织，面向在校生及社会人员开展新职业技能等级评价工作。',
    img: image3,
  },
  {
    title: '就业指导服务平台',
    des: '点点招聘是职虎旗下专注于就业服务的品牌，点点招聘以精准就业结果为导向，通过运用AI技术、大数据技术快速进行人岗匹配，为学员提供个性化、区域化、多元化的终身职业发展服务。',
    img: image4,
  },
  {
    title: '创业人才培养计划',
    des: '职虎联合行业企业与院校共同实施创业人才培养计划，进行针对性的创业指导，协助打造创业团队，助力孵化创业项目，并组织学员参加中国创新创业大赛，达到以赛促教、以赛促训、以赛促融的目的。',
    img: image5,
  },
  {
    title: '新职业领域产业学院',
    des: '职虎联合各行业头部企业与院校多方共建大健康、直播、大数据等新职业领域产业学院，实现深度产教融合，培养一批新时期国际所认、社会所需、企业所求的新职业高技能人才。',
    img: image6,
  },
  {
    title: '技能大赛集训基地',
    des: '职虎与院校共同申办地区新职业行业大赛、人社部职业技能大赛新职业相关赛项。新职业人才培训基地申报地区大赛集训基地，承接地区及周边院校学生及企业职工等参加各类技能大赛等集训服务。',
    img: image7,
  },
  {
    title: '教学资源研发体系',
    des: '职虎与院校共同组建教学资源研发团队，持续开发最新的教学案例、教学场景及实操项目等，深入研究申报新职业，开发国家职业标准、专业标准、考核标准，研发课程和教材体系。',
    img: image8,
  },
]
export default {
  layout: 'app-layout',
  galleryData: {
    type: 'product-service-3',
  },
  head() {
    return {
      title: `院校合作-职虎`,
    }
  },
  data() {
    return {
      list: platformCooperation,
    }
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
      margin-bottom: 70px;
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
            padding: 40px 26px 0;
            h3 {
              height: 45px;
              font-size: 32px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #000000;
              line-height: 45px;
              margin: 0;
              text-align: center;
              margin-bottom: 15px;
            }
            p {
              margin: 0;
              font-size: 18px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #333333;
              line-height: 36px;
            }
          }
          .normal {
            width: 100%;
            height: 100%;
            height: 310px;
            line-height: 310px;
            text-align: center;
            font-size: 32px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #ffffff;
            position: relative;
            span {
              z-index: 1;
            }
            > img {
              position: absolute;
              left: 0;
              right: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
            }
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
