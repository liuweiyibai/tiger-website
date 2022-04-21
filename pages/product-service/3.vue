<template>
  <ProductServiceLayout title="院校合作" brandTitle="院校合作">
    <client-only>
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
          <ul>
            <li v-for="item in 8" :key="item"></li>
          </ul>
        </div>
      </div>
    </client-only>
  </ProductServiceLayout>
</template>

<script>
export default {
  layout: 'app-layout',
}
</script>

<style lang="scss" scoped>
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
        background: red;
        margin: 25px;
        float: left;
      }
    }
  }
}
</style>
