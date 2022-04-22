<template>
  <div class="about-page">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>关于我们</el-breadcrumb-item>
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
  name: 'AboutLayout',
  props: {
    title: {
      type: String,
      default: '公司介绍',
    },
    brandTitle: {
      type: String,
      default: '公司介绍',
    },
  },
}
</script>

<style lang="scss" scoped>
.about-page {
  width: 100%;
  background-color: #fff;
  @include header-with-breadcrumb-title;
}
</style>
