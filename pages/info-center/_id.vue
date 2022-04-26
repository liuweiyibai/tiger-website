<template>
  <InfoCenterLayout :detailName="title">
    <div class="info-center-detail">
      <h2 class="title">{{ title }}</h2>
      <div class="time">{{ formatDate(publishTime) }}</div>
      <div class="aritle-box" v-html="content"></div>
    </div>
    <div class="detail-footer" slot="footer">
      <div class="link-box">
        <div class="link">
          上一篇<nuxt-link to="">推动新职业可持续发展的对策探讨</nuxt-link>
        </div>
        <div class="link link-2">
          下一篇<nuxt-link to="">推动新职业可持续发展的对策探讨</nuxt-link>
        </div>
      </div>
    </div>
  </InfoCenterLayout>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'InfoCenterDetailPage',
  layout: 'app-layout',
  galleryData: {
    type: 'info-center',
  },
  mounted() {
    if (process.browser) {
      this.init()
    }
  },
  data() {
    return {
      title: '',
      content: '',
      publishTime: '',
    }
  },
  methods: {
    init() {
      const vm = this
      const $route = vm.$route
      const id = $route.params.id
      if (!id) {
        return
      }
      vm.$axios
        .get(`/customerGoods/information/getInformation/${id}`)
        .then((resp) => {
          console.log(resp)
          const data = resp.data.data
          if (data) {
            vm.title = data.title
            vm.publishTime = data.publishTime
            vm.content = data.content
          }
        })
    },
    formatDate(timestap) {
      return dayjs(timestap).format('YYYY/MM/DD HH:mm')
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .info-center-detail {
    width: 990px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 51px;
    .title {
      height: 37px;
      font-size: 26px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 37px;
      margin: 0;
      margin-bottom: 14px;
      text-align: center;
    }
    .time {
      text-align: center;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #999999;
      line-height: 20px;
      margin-bottom: 78px;
    }
    .aritle-box {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 18px;
    }
  }

  ::v-deep {
    .footer {
      border-top: 1px solid #dddddd;
    }
    .detail-footer {
      width: 100%;
      box-sizing: border-box;

      .link-box {
        margin: 0 auto;
        margin-top: 9px;
        width: 990px;
        @include clearfix;
        .link {
          float: left;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #000000;
          line-height: 16px;
          vertical-align: middle;
          a {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #666666;
            line-height: 14px;
            margin-left: 6px;
          }
        }
        .link-2 {
          float: right;
        }
      }
    }
  }
}

@include styles();
</style>
