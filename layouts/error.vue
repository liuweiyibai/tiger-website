<template>
  <div class="nfd">
    <div class="fof">
      <h1>Error 404</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin styles() {
  .nfd {
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
    .fof {
      display: table-cell;
      vertical-align: middle;
    }
  }

  .fof h1 {
    font-family: 'Lato', sans-serif;
    color: #888;
    @keyframes type {
      from {
        box-shadow: inset -3px 0px 0px #888;
      }
      to {
        box-shadow: inset -3px 0px 0px transparent;
      }
    }
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type 0.5s alternate infinite;
  }
}
@include styles;

@include respond() {
  @include styles;
}
</style>
