<template>
  <NewPosStandardLayout class="new-pos-standard-page">
    <div class="header" slot="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新职业标准</el-breadcrumb-item>
        <el-breadcrumb-item>金融文娱</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            v-for="(item, index) in categories"
            :name="'first' + index"
            :label="item.title"
            :key="index"
          />
        </el-tabs>
      </div>
    </div>
    <div class="container">
      <ul>
        <li></li>
      </ul>
    </div>
  </NewPosStandardLayout>
</template>
<script>
export default {
  name: 'NewPosStandardPage',
  layout: 'app-layout',
  data() {
    return {
      categories: [
        {
          title: '信息技术',
        },
        {
          title: '生产制造',
        },
        {
          title: '商业服务',
        },
        {
          title: '卫生健康',
        },
        {
          title: '建筑环保',
        },
        {
          title: '金融文娱',
        },
        {
          title: '交通物流',
        },
        {
          title: '其他',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@mixin styles() {
  .new-pos-standard-page {
    width: 100%;
    background: #f5f5f5;
    @include header-with-breadcrumb;
    .tabs {
      box-sizing: border-box;
      padding-left: 207px;
      padding-right: 207px;
    }

    ::v-deep {
      .el-tabs__header {
        margin: 0;
      }
      .el-tabs__nav-wrap::after {
        content: unset;
      }
      .el-tabs__active-bar {
        height: 4px;
      }
      .el-tabs__item {
        padding: 0 35px;
        box-sizing: border-box;
        display: inline-block;
        list-style: none;
        font-size: 16px;
        font-weight: 400;
        color: #666666;
        position: relative;
        line-height: 1;
        &.is-active {
          color: #000000;
          font-weight: 500;
        }
      }
    }

    .container {
      box-sizing: border-box;
      padding-left: 229px;
      padding-right: 226px;
      width: 100%;
      padding-top: 29px;
      padding-bottom: 82px;
      ul {
        @include clearfix;
      }

      li {
        width: 308px;
        height: 292px;
        background: red;
        float: left;
        margin: 18px 8px;
        .image-box {
          width: 308px;
          height: 192px;
        }
      }
    }
  }
}

@include styles();
@include respond() {
  @include styles();
}
</style>
