<template>
  <div class="info-center-page">
    <InfoCenterLayout>
      <div class="info-center-list">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <nuxt-link
              :to="{
                path: `/info-center/${item.id}`,
                query: { ...$route.query },
              }"
            >
              <div class="image-box">
                <img :src="item.pictureUrl" />
              </div>
              <div class="text-box">
                <div class="text">{{ item.title }}</div>
                <div class="time">
                  <span>{{ item.source }}</span>
                  <span class="span2">{{ formatDate(item.publishTime) }}</span>
                </div>
              </div>
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
const categories = [
  {
    title: '最新热点',
    id: '110',
  },
  {
    title: '政策法规',
    id: '42',
  },
  {
    title: '活动资讯',
    id: '111',
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
