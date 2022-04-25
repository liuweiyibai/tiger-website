<template>
  <div class="index-co__layout">
    <div class="co-fixed-bg"></div>
    <h2>合作单位</h2>
    <div class="box">
      <div class="col" id="co-swiper-1">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in logosBefore"
            :key="index"
          >
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="col" id="co-swiper-2">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in logosAfter"
            :key="index"
          >
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const requireAll = (context) => context.keys().map(context)
const images = require.context('../assets/logos/', false, /@3x\.png$/)

export default {
  data() {
    const logos = requireAll(images)
    return {
      logosBefore: logos.slice(0, 10),
      logosAfter: logos.slice(10),
    }
  },
  mounted() {
    const vm = this
    if (process.browser) {
      const mySwiper = new vm.Swiper('#co-swiper-1', {
        loop: true,
        slidesPerView: 5,
        initialSlide: 0,
        freeMode: true,
        speed: 20000,
        autoplayDisableOnInteraction: false,
        autoplay: 2000,
        updateOnImagesReady: true,
      })
      const mySwiper2 = new vm.Swiper('#co-swiper-2', {
        loop: true,
        slidesPerView: 5,
        initialSlide: 0,
        freeMode: true,
        speed: 20000,
        autoplayDisableOnInteraction: false,
        autoplay: 4000,
        updateOnImagesReady: true,
      })

      vm.$nextTick(() => {
        const element = document.querySelector('#co-swiper-1')
        const element2 = document.querySelector('#co-swiper-2')

        // element.addEventListener('mouseenter', () => {
        //   vm.mySwiper.stopAutoplay()
        // })
        // element.addEventListener('mouseleave', () => {
        //   vm.mySwiper.startAutoplay()
        // })
        // element2.addEventListener('mouseenter', () => {
        //   vm.mySwiper2.stopAutoplay()
        // })
        // element2.addEventListener('mouseleave', () => {
        //   vm.mySwiper2.startAutoplay()
        // })

        vm.$once('hook:beforeDestroy', () => {
          if (mySwiper) {
            mySwiper.destroy()
          }
          if (mySwiper2) {
            mySwiper2.destroy()
          }
        })
      })
    }
  },
  // beforeDestroy() {
  //   const vm = this

  //   const element = document.querySelector('#co-swiper-1')
  //   const element2 = document.querySelector('#co-swiper-2')
  //   if (element) {
  //     element.removeEventListener('mouseenter')
  //     element.removeEventListener('mouseleave')
  //   }
  //   if (element2) {
  //     element2.removeEventListener('mouseenter')
  //     element2.removeEventListener('mouseleave')
  //   }
  // },
}
</script>

<style lang="scss" soped>
@mixin styles {
  .index-co__layout {
    height: 700px;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    padding-top: 279px;
    .co-fixed-bg {
      position: absolute;
      top: 20px;
      bottom: 270px;
      left: 0;
      right: 0;
      background-image: url(~@/assets/images/img_彩虹@3x.png);
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    h2 {
      z-index: 1;
      font-size: 50px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.8);
      line-height: 70px;
      margin: 0;
      margin-bottom: 49px;
      text-align: center;
    }
    .box {
      box-sizing: border-box;
      padding: 0 68px;
      // overflow: hidden;
      margin-bottom: 25px;
    }
    .col {
      width: 100%;
      height: 100px;
      overflow: hidden;
      box-sizing: border-box;
      padding-top: 15px;
    }
    .swiper-slide {
      box-sizing: border-box;
      padding-right: 26px;
      height: 70px !important;
      img {
        width: 100%;
        height: 100%;
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.11);
        background: #ffffff;
        cursor: pointer;
      }
    }
  }
}

@include styles;
@include respond() {
  @include styles;
}
</style>
