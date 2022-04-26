<template>
  <AboutLayout title="分支机构" brandTitle="分支机构">
    <div class="about-branch-container">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <p class="name">{{ item.title }}</p>
          <p class="address"><span>地址：</span>{{ item.address }}</p>
          <p class="phone"><span>电话：</span>{{ item.phone }}</p>
        </li>
      </ul>
    </div>
  </AboutLayout>
</template>

<script>
export default {
  name: 'AboutBranchPage',
  layout: 'app-layout',
  galleryData: {
    type: 'about-branch-page',
  },
  head() {
    return {
      title: `分支结构-职虎`,
    }
  },
  data() {
    return {
      list: [
        {
          title: '广西职虎',
          address: '广西壮族自治区南宁市西乡塘区鲁班路46号广西创联国培中心',
          phone: '0771-3865800',
        },
        {
          title: '四川职虎',
          address: '四川省成都市金牛区天龙大道1333号7号楼5层',
          phone: '028-83179139',
        },
        {
          title: '安徽职虎',
          address: '安徽省合肥市庐阳区阜南路169号东怡金融广场B座2802室',
          phone: '0551-65596558',
        },
        {
          title: '海南职虎',
          address: '海南省海口市龙华区金宇东路23号金宇大厦701房室',
          phone: '0898-66731892',
        },
        {
          title: '上海职虎',
          address: '上海市静安区梅园路228号2813室',
          phone: '021-62568219',
        },
        {
          title: '甘肃职虎',
          address: '甘肃省兰州市城关区广场南路国芳商务写字楼1215号',
          phone: '0931－8782299  ',
        },
        {
          title: '河南职虎',
          address: '河南省郑州市金水路与民生路交叉口永和国际广场B区709室',
          phone: '0371-60900815',
        },
        {
          title: '江苏职虎',
          address: '江苏省南京市栖霞区紫东国际创意园西区F1-305室',
          phone: '025-85617889',
        },
        {
          title: '内蒙古职虎',
          address:
            '内蒙古自治区呼和浩特市玉泉区鄂尔多斯大街38号金宇国际写字楼6楼605、606',
          phone: '4000150009',
        },
        {
          title: '攀枝花职虎',
          address:
            '攀枝花市东区三线大道北段10号学府广场1号楼二层B区4号（攀西人力资源服务产业园内） ',
          phone: '0812-3100107',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin styles() {
  .about-branch-container {
    width: 700px;
    margin: 0 auto;
    background: #fff;
    box-sizing: border-box;
    padding-top: 124px;
    padding-bottom: 258px;
    ul {
      margin: -30px -61px;
      li {
        float: left;
        margin: 30px 61px;
        width: 289px;
        height: 122px;
        font-size: 0;
        p {
          margin: 0;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 24px;
        }
        .name {
          font-size: 14px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #000000;
          line-height: 14px;
          margin-bottom: 12px;
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
