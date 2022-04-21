<template>
  <div class="info-center__layout">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新职业标准</el-breadcrumb-item>
        <el-breadcrumb-item>金融文娱</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="title-box">
        <span>活动资讯</span>
      </div>
    </div>
    <slot></slot>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoCenterLayout',
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .info-center__layout {
    width: 100%;
    @include header-with-breadcrumb-title;
    .footer {
      width: 100%;
      height: 94px;
      background: #ffffff;
    }
  }
}
@include styles();
@include respond() {
  @include styles();
}
</style>
