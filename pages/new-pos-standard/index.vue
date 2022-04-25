<template>
  <NewPosStandardLayout class="new-pos-standard-page">
    <div
      class="header"
      slot="header"
      ref="fixedHeaderRef"
      :class="{
        fixed: titleBarFixed,
      }"
    >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新职业标准</el-breadcrumb-item>
        <el-breadcrumb-item>{{ activeName }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            v-for="(item, index) in categories"
            :name="item.title"
            :label="item.title"
            :key="index"
          />
        </el-tabs>
      </div>
    </div>
    <div class="container">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <nuxt-link :to="`/new-pos-standard/${item.title}`">
            <div class="img-box">
              <img :src="item.img" alt="" />
            </div>
            <p class="title">{{ item.title }}</p>
            <p class="time">{{ item.time }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </NewPosStandardLayout>
</template>
<script>
import scrollMixin from '@/mixins/scroll'
import newPosStandardJson from '@/data/new-pos-standard.json'
const categories = [
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
]

function getCategory(query) {
  let category = '信息技术'
  if (query.category) {
    const _category = categories.find(
      (t) => t.title === decodeURIComponent(query.category)
    )
    if (_category) {
      category = _category.title
    }
  }
  return category
}
export default {
  name: 'NewPosStandardPage',
  layout: 'app-layout',
  mixins: [scrollMixin('fixedHeaderRef')],
  galleryData: {
    type: 'new-pos-standard',
  },
  asyncData({ query }) {
    const category = getCategory(query)
    return { category }
  },

  data() {
    const { query } = this.$route
    const category = getCategory(query)
    return {
      categories,
      activeName: category,
    }
  },
  computed: {
    list() {
      const vm = this
      const activeName = vm.activeName
      const list = newPosStandardJson.filter((t) => t.category === activeName)
      return list
    },
  },
  methods: {
    handleClick(args) {
      this.$router.push({ query: { category: args.name } })
    },
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
        overflow: hidden;
        float: left;
        margin: 18px 8px;
        background: #ffffff;
        position: relative;
        .img-box {
          width: 308px;
          height: 192px;
          margin-bottom: 13px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          margin: 0;
          padding-left: 14px;
        }
        .title {
          height: 22px;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 22px;
          margin-bottom: 30px;
        }
        .time {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 18px;
          bottom: 14px;
          position: absolute;
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
