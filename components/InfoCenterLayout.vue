<template>
  <div class="info-center__layout">
    <div
      class="header"
      ref="fixedHeaderRef"
      :class="{
        fixed: titleBarFixed,
      }"
    >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新职业标准</el-breadcrumb-item>
        <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="detailName" class="max-width-175">{{
          detailName
        }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="title-box">
        <span>{{ title }}</span>
      </div>
    </div>
    <slot></slot>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
import scrollMixin from '@/mixins/scroll'

export default {
  name: 'InfoCenterLayout',
  mixins: [scrollMixin('fixedHeaderRef')],
  props: {
    detailName: {
      default: false,
    },
  },
  computed: {
    title() {
      const vm = this
      const $route = vm.$route
      const { key } = $route.query
      if (!key || key === '1') {
        return '最新热点'
      }
      if (key === '2') {
        return '政策法规'
      }
      if (key === '3') {
        return '活动资讯'
      }
      return '最新热点'
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .info-center__layout {
    width: 100%;
    overflow: visible;
    @include header-with-breadcrumb-title;
    .footer {
      width: 100%;
      height: 94px;
      background: #ffffff;
      padding-top: 30px;
      box-sizing: border-box;
    }
  }
}
@include styles();
@include respond() {
  @include styles();
}
</style>
