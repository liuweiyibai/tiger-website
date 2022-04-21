<template>
  <div class="info-center-page">
    <InfoCenterLayout>
      <div class="info-center-list">
        <ul>
          <li v-for="(item, index) in 20" :key="index">
            <div class="image-box"></div>
            <div class="text-box">
              <div class="text"></div>
              <div class="time"></div>
            </div>
          </li>
        </ul>
      </div>
    </InfoCenterLayout>
  </div>
</template>
<script>
export default {
  name: 'InfoCenterPage',
  layout: 'app-layout',
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
