<template>
  <NewPosStandardLayout class="new-pos-standard-detail-page">
    <div
      class="header"
      ref="fixedHeaderRef"
      :class="{
        fixed: titleBarFixed,
      }"
    >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/new-pos-standard' }"
          >新职业标准</el-breadcrumb-item
        >
        <el-breadcrumb-item
          :to="{ path: `/new-pos-standard?category=${item.category}` }"
          >{{ item.category }}</el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ item.title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="title-box">
        <nuxt-link
          :to="{ path: `/new-pos-standard?category=${item.category}` }"
        >
          <span>{{ item.category }}</span>
        </nuxt-link>
      </div>
    </div>

    <div class="container">
      <h3 class="aritle-title">{{ item.title }}</h3>
      <div class="aritle-time">
        <span>{{ item.time }}</span>
      </div>
      <div class="aritle" v-html="item.html"></div>
    </div>
  </NewPosStandardLayout>
</template>
<script>
import scrollMixin from '@/mixins/scroll'
import newPosStandardJson from '@/data/new-pos-standard.json'
export default {
  name: 'NewPosStandardDetailPage',
  layout: 'app-layout',
  mixins: [scrollMixin('fixedHeaderRef')],
  galleryData: {
    type: 'new-pos-standard',
  },
  head() {
    return {
      title: this.windowTitle,
    }
  },
  asyncData({ params }) {
    if (params.category) {
      const item = newPosStandardJson.find((t) => t.title === params.category)
      if (item) {
        const title = `${params.category}-职虎`
        return { item, windowTitle: title }
      }
    }
  },
  data() {
    return {
      item: {},
      windowTitle: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .new-pos-standard-detail-page {
    width: 100%;
    background-color: #fff;
    @include header-with-breadcrumb-title;

    .container {
      width: 990px;
      margin: 0 auto;
      box-sizing: border-box;
      padding-top: 51px;
      .aritle-title {
        font-size: 26px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 37px;
        text-align: center;
        margin-bottom: 14px;
      }
      .aritle-time {
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #999999;
        line-height: 20px;
        margin-bottom: 64px;
        text-align: center;
      }
    }
  }
}

@include styles();
</style>
