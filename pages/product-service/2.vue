<template>
  <ProductServiceLayout title="职业评价" brandTitle="职业技能等级评价">
    <div class="product-service-2">
      <h2 class="_h2 _h2-title">
        职业技能等级评价<span><i>/</i>ABOUT HRTIGER</span>
      </h2>
      <p class="_p p-1">
        申报社会培训评价组织经验丰富，可协助有资质的机构进行社会培训评价组织申报，提供专家及题库支持，共同开展职业技能等级评价工作，为新职业人才赋能。
      </p>
      <h2 class="_h2 _h2-title">
        专项职业能力考核<span><i>/</i>ABOUT HRTIGER</span>
      </h2>
      <p class="_p p-2">
        成功协助四川创联国培基地申报“在线学习指导”和“在线学习运营”专项职业能力考核规范，熟悉申报流程，可协助有资质的机构进行新职业专项职业能力申报，提供资源支持，共同开展新职业专项职业能力的培训及考核工作。
      </p>
    </div>
  </ProductServiceLayout>
</template>

<script>
export default {
  layout: 'app-layout',
  galleryData: {
    type: 'product-service-2',
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .product-service-2 {
    width: 990px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 104px;
    padding-bottom: 40vh;
    ._h2-title {
      margin-bottom: 32px;
    }
    .p-1 {
      margin-bottom: 59px;
    }
  }
}

@include styles();
@include respond() {
  @include styles();
}
</style>
