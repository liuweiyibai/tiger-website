<template>
  <div class="index-page">
    <!-- 业务布局 -->
    <IndexPageYeYuLayout />
    <!-- 新职业目录 -->
    <IndexPageNewPosCategory />
    <!-- 生态全景图 -->
    <IndexPageEcology />
    <!-- 覆盖网络 -->
    <IndexPageOverlyNet />
    <!-- 合作单位 -->
    <IndexPageCo />
    <!-- 开启合作 -->
    <IndexPageEmail />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'app-layout',
}
</script>

<style lang="scss" scoped>
.index-page {
  background: #fff;
}
</style>
