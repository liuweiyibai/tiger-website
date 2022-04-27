<template>
  <div class="info-center-page">
    <InfoCenterLayout>
      <div
        class="info-center-list"
        :class="{
          'is-only-text-mode': isOnlyTextMode,
        }"
      >
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <nuxt-link
              :title="item.title"
              :to="{
                path: `/info-center/${item.id}`,
                query: { ...$route.query },
              }"
            >
              <template v-if="isOnlyTextMode">
                <div class="time-box">
                  <h2>{{ formatOnlyDay(item.publishTime) }}</h2>
                  <p>{{ formatYearMonth(item.publishTime) }}</p>
                </div>
                <div class="content-box">
                  <div class="title-box">{{ item.title }}</div>
                  <div class="graph-box">{{ item.title }}</div>
                </div>
              </template>
              <template v-else>
                <div class="image-box">
                  <img :src="item.pictureUrl" />
                </div>
                <div class="text-box">
                  <div class="text">{{ item.title }}</div>
                  <div class="time">
                    <span>{{ item.source }}</span>
                    <span class="span2">{{
                      formatDate(item.publishTime)
                    }}</span>
                  </div>
                </div>
              </template>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <el-pagination
        slot="footer"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pageInfo.currentPage"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.total"
        :page-sizes="[12, 24, 48, 96]"
        class="app-pagination"
        background
      >
      </el-pagination>
    </InfoCenterLayout>
  </div>
</template>
<script>
import dayjs from 'dayjs'

// -120-
// 职业热点
// -123-
// 政策法规
// -144-
// 活动资讯
const categories = [
  {
    title: '最新热点',
    id: '-120-',
  },
  {
    title: '政策法规',
    id: '-123-',
  },
  {
    title: '活动资讯',
    id: '-144-',
  },
]
function getTitle({ key }) {
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
}
function getCategory(query) {
  const categoryId = getTitle(query)
  const item = categories.find((t) => t.title === categoryId)
  if (item) return item.id
}
export default {
  name: 'InfoCenterPage',
  layout: 'app-layout',
  galleryData: {
    type: 'info-center',
  },
  data() {
    return {
      pageInfo: {
        currentPage: 1,
        pageSize: 12,
        total: 0,
      },
      list: [],
    }
  },
  mounted() {
    if (process.browser) {
      this.getData()
    }
  },
  watch: {
    $route() {
      if (process.browser) {
        this.getData()
      }
    },
  },
  computed: {
    isOnlyTextMode() {
      const { query } = this.$route
      const id = getCategory(query)
      // return id === '-123-'
      return true
    },
  },
  methods: {
    handleSizeChange(val) {
      this.pageInfo.pageSize = val
      window.scrollTo({
        top: 500,
        behavior: 'smooth',
      })
      this.getData()
    },
    handleCurrentChange(val) {
      this.pageInfo.currentPage = val
      window.scrollTo({
        top: 500,
        behavior: 'smooth',
      })
      this.getData()
    },
    getData() {
      const vm = this
      const { query } = vm.$route
      const id = getCategory(query)
      vm.$axios
        .get(`/customerGoods/information/getInformationList`, {
          params: {
            ...vm.pageInfo,
            status: '050002',
            // path: id,
          },
        })
        .then((resp) => {
          const data = resp.data.data
          vm.pageInfo.total = data.total
          vm.list = data.rows
        })
    },
    formatDate(timestap) {
      return dayjs(timestap).format('YYYY-MM-DD')
    },
    formatYearMonth(timestap) {
      return dayjs(timestap).format('YYYY-MM')
    },
    formatOnlyDay(timestap) {
      return dayjs(timestap).format('DD')
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .info-center-page {
    background: #f5f5f5;
    width: 100%;
    .info-center-list {
      box-sizing: border-box;
      padding-left: 229px;
      padding-right: 226px;
      width: 100%;
      padding-top: 29px;
      ul {
        @include clearfix;
      }

      &.is-only-text-mode {
        width: 760px;
        margin: 0 auto;
        padding: 0;
        margin-top: 29px;
        margin-bottom: 30px;
        background: #fff;
        ul {
          width: 100%;
        }
        ul li {
          display: block;
          width: 100%;
          height: auto;
          margin: 0;
          box-sizing: border-box;
          padding: 40px 20px 20px 20px;
          border-bottom: 1px solid #ddd;
          a {
            @include clearfix;
            display: block;
            overflow: hidden;
          }
          &:hover {
            .title-box {
              text-decoration: underline;
            }
          }

          .time-box {
            float: left;
            text-align: center;
            margin-right: 20px;
            color: #999999;
            h2 {
              margin: 0;
              font-size: 32px;
              font-weight: 500;
              margin-bottom: 20px;
            }
            p {
              margin: 0;
              font-size: 14px;
            }
          }
          .content-box {
            float: left;
            .title-box {
              font-size: 22px;
              line-height: 1.1;
              max-width: 630px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-bottom: 20px;
            }
            .graph-box {
              overflow: hidden;
              max-width: 630px;
              font-size: 16px;
              line-height: 1.5;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box; //作为弹性伸缩盒子模型显示。
              -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
              -webkit-line-clamp: 2; //显示的行
            }
          }
        }
      }

      li {
        width: 308px;
        height: 292px;
        overflow: hidden;
        float: left;
        background: #fff;
        margin: 18px 8px;
        .image-box {
          width: 308px;
          height: 192px;
        }
        .text {
          width: 280px;
          height: 44px;
          margin: 0 auto;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 22px;
          margin-top: 13px;
          margin-bottom: 11px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; //作为弹性伸缩盒子模型显示。
          -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
          -webkit-line-clamp: 2; //显示的行
        }
        .time {
          @include clearfix;
          box-sizing: border-box;
          padding-left: 14px;
          padding-right: 29px;
          span {
            height: 18px;
            font-size: 13px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: 18px;
            float: left;
          }
          .span2 {
            float: right;
          }
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
