<template>
  <ProductServiceLayout title="点点招聘" brandTitle="点点招聘">
    <client-only>
      <div class="product-service-4">
        {{ res }}
      </div>
    </client-only>
  </ProductServiceLayout>
</template>
<script>
export default {
  layout: 'app-layout',
  data() {
    return { res: { default: '我现在是控诉的' } }
  },
  asyncData({ $axios }) {
    return $axios.get(`/test`).then((res) => {
      return { res: res.data }
    })
  },
}
</script>
