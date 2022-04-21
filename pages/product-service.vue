<template>
  <div class="product-service-page">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>产品服务</el-breadcrumb-item>
        <el-breadcrumb-item>新职业培训</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="title-box">
        <span>新职业培训</span>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'ProductServicePage',
  layout: 'app-layout',
}
</script>

<style lang="scss" scoped>
.product-service-page {
  width: 100%;
  background-color: #fff;
  @include header-with-breadcrumb-title;
}
</style>
