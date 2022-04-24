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
      <el-pagination
        slot="footer"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1000"
        :page-sizes="[100, 200, 300, 400]"
        class="app-pagination"
        background
      >
      </el-pagination>
    </InfoCenterLayout>
  </div>
</template>
<script>
export default {
  name: 'InfoCenterPage',
  layout: 'app-layout',
  galleryData: {
    type: 'info-center',
  },
  data() {
    return { currentPage: 0 }
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
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
