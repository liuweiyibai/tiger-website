<template>
  <div class="app-gallery" :class="classNames">
    <img :src="currentComponent.url" alt="" />
    <component :is="currentComponent.html" />
  </div>
</template>
<script>
import IndexImage from '@/assets/images/头图@3x.png'
import infoCenterImage from '@/assets/images/资讯中心头图@3x.png'
import NewPosStandardImage from '@/assets/images/新职业标准@3x.png'
import ProductService1Image from '@/assets/images/产品服务-新职业培训@3x.png'
import ProductService2Image from '@/assets/images/产品服务-职业评价支持@3x.png'
import ProductService3Image from '@/assets/images/产品服务-院校合作@3x.png'
import ProductService4Image from '@/assets/images/产品服务-点点招聘@3x.png'
import AboutImage from '@/assets/images/公司介绍头图@2x.png'
import AboutBranchImage from '@/assets/images/分支机构头图@2x.png'
export default {
  props: ['galleryData'],
  computed: {
    classNames() {
      if (this.galleryData && this.galleryData.type) {
        return { 'min-height': true }
      }
      return {}
    },
    currentComponent() {
      if (this.galleryData) {
        if (this.galleryData.type === 'info-center') {
          return {
            url: infoCenterImage,
            html: `AppGalleryTitleInfoCenterPage`,
          }
        }

        // 新职业标准
        if (this.galleryData.type === 'new-pos-standard') {
          return {
            url: NewPosStandardImage,
            html: `AppGalleryTitleNewPosStandard`,
          }
        }

        // 产品服务-新职业培训
        if (this.galleryData.type === 'product-service-1') {
          return {
            url: ProductService1Image,
            html: `AppGalleryTitleProductService1`,
          }
        }

        // 产品服务-职业评价
        if (this.galleryData.type === 'product-service-2') {
          return {
            url: ProductService2Image,
            html: `AppGalleryTitleProductService2`,
          }
        }
        // 产品服务-院校合作
        if (this.galleryData.type === 'product-service-3') {
          return {
            url: ProductService3Image,
            html: `AppGalleryTitleProductService3`,
          }
        }
        // 产品服务-点点招聘
        if (this.galleryData.type === 'product-service-4') {
          return {
            url: ProductService4Image,
            html: `AppGalleryTitleProductService4`,
          }
        }

        // 关于我们-公司介绍
        if (this.galleryData.type === 'about-page') {
          return {
            url: AboutImage,
            html: `AppGalleryTitleAbout`,
          }
        }
        // 关于我们-公司介绍
        if (this.galleryData.type === 'about-branch-page') {
          return {
            url: AboutBranchImage,
            html: `AppGalleryTitleAboutBranch`,
          }
        }
      }
      return {
        url: IndexImage,
        html: 'AppGalleryTitleIndexPage',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .app-gallery {
    height: 470px;
    margin-top: 80px;
    position: relative;
    &.min-height {
      height: 384px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
@include styles();
@include respond() {
  @include styles();
}
</style>
