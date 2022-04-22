<template>
  <ProductServiceLayout>
    <div class="product-service-1">
      <p class="_p p-1">
        职虎App专注于新职业的一站式服务平台，为用户提供新职业介绍、职业选择、职业知识、职业评价和求职就业服务，帮助用户快速掌握新职业技能，成为更具竞争力的“新职业人”
      </p>
      <div class="img-1">
        <img src="~@/assets/images/职虎APP@3x.png" alt="" />
      </div>
      <h2 class="_h2 _h2-title">
        更多新职业<span><i>/</i> ABOUT HRTIGER</span>
      </h2>
      <p class="_p p-2">
        职虎2.0加入更多新职业，涉及教育、医疗健康、汽车、建筑、智慧农业、互联网、物联网7大领域，包含在线学习服务师、呼吸治疗师、互联网营销师、物联网安装调试员、农业经理人、职业培训师、健康照护师、老年人能力评估师、康复辅助技术咨询师、汽车救援员、二手车经纪人、建筑信息模型技术员、装配式建筑施工员、建筑幕墙设计师等新职业，为你提供更多样的选择。
      </p>
      <div class="img-1">
        <img src="~@/assets/images/更多新职业@2x.png" alt="" />
      </div>
      <h2 class="_h2 _h2-title">
        深耕新职业<span><i>/</i> ABOUT HRTIGER</span>
      </h2>
      <p class="_p" style="margin-bottom: 18px">
        <span>1. 职业介绍视频：</span
        >职虎自研特色短视频---职业介绍视频和【职虎讲职业】，前者介绍职业的职业画像，让你对新职业有直观的认知；后者介绍新职业的定义、职业功能等，让你清晰了解整个新职业；
      </p>
      <p class="_p" style="margin-bottom: 18px">
        <span>2.职业知识图谱：</span
        >每个新职业对应一个知识图谱，包含该职业所有的知识进阶能力，让你的职业进阶路径一目了然。“职业标准”和“职业等级”，为申报职业技能等级鉴定做支撑。
      </p>
      <p class="_p p-3">
        <span>3.职业精品课程：</span
        >汇聚行业内资深名师及名校教授打造的优质课程，细分为职业岗位能力提升培训课、岗位基础课、专项职业能力培训课等内容方向，通过精品小课和体系课形式，满足各类人群多元化学习需要，涵盖丰富案例，理论实践结合，助你职场进阶。
      </p>
      <div class="img-1 img-2">
        <img src="~@/assets/images/深耕新职业@2x.png" alt="" />
      </div>
      <h2 class="_h2 _h2-title">
        新职业动态<span><i>/</i> ABOUT HRTIGER</span>
      </h2>
      <p class="_p p-4">
        推送在线学习服务师、呼吸治疗师、互联网营销师、物联网安装调试员等多个新职业的前沿信息，包含职业前景、市场规模、职业深度报道等，助你了解自己的职业发展前景。
      </p>
      <div class="img-1 img-3">
        <img src="~@/assets/images/新职业动态@2x.png" alt="" />
      </div>
    </div>
  </ProductServiceLayout>
</template>

<script>
export default {
  layout: 'app-layout',
  galleryData: {
    type: 'product-service-1',
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .product-service-1 {
    width: 990px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 110px;
    padding-bottom: 100px;
    img {
      width: 100%;
      height: 100%;
    }
    .p-1 {
      margin-bottom: 28px;
    }
    .p-2 {
      margin-bottom: 24px;
    }
    .p-3 {
      margin-bottom: 28px;
    }
    .p-4 {
      margin-bottom: 28px;
    }
    ._p {
      span {
        font-size: 16px;
        color: #333333;
        font-weight: 700;
      }
    }
    ._h2-title {
      margin-bottom: 32px;
    }
    .img-1 {
      width: 100%;
      height: 500px;
      background: red;
      margin: 0 auto;
      box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.04);
      margin-bottom: 31px;
    }
    .img-2 {
      margin-bottom: 79px;
    }
    .img-3 {
      margin-bottom: 0;
    }
  }
}

@include styles();
</style>
