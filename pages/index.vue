<template>
  <div class="index-page">
    <!-- 业务布局 -->
    <IndexPageYeYuLayout />
    <!-- 新职业目录 -->
    <IndexPageNewPosCategory />
    <!-- 生态全景图 -->
    <IndexPageEcology />
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
  // background: #f3f4f5;
  background: #fff;
}
</style>
