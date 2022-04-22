<template>
  <div>
    <AppHeader />
    <AppGallery :galleryData="galleryData" />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
export default {
  computed: {
    galleryData() {
      return this.$route.matched.map((r) => {
        return r.components.default.options.galleryData
      })[0]
    },
  },
}
</script>
