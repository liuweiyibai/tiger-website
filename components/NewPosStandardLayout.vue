<template>
  <div class="new-post-standard__layout">
    <slot name="header"></slot>
    <slot></slot>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new-post-standard__layout {
  .footer {
    height: 94px;
    background: #ffffff;
  }
}
</style>
