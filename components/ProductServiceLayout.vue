<template>
  <div class="product-service-page">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>产品服务</el-breadcrumb-item>
        <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="title-box">
        <span>{{ brandTitle }}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ProductServiceLayout',
  props: {
    title: {
      type: String,
      default: '新职业培训',
    },
    brandTitle: {
      type: String,
      default: '新职业培训',
    },
  },
}
</script>

<style lang="scss" scoped>
.product-service-page {
  width: 100%;
  background-color: #fff;
  @include header-with-breadcrumb-title;
}
</style>
