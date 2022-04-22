<template>
  <div class="gallery-text gallery-new-pos-standard-text" v-once>
    新职业标准<br />推动数字经济与实体经济深度融
  </div>
</template>
<style lang="scss" scoped>
@mixin styles() {
  .gallery-text {
    position: absolute;
    &.gallery-new-pos-standard-text {
      width: 690px;
      height: 138px;
      font-size: 46px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 69px;
      left: 119px;
      top: 115px;
    }
  }
}
@include styles();
@include respond() {
  @include styles();
}
</style>
