export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  fallback: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tiger-website',
    htmlAttrs: {
      lang: 'zh_CN',
    },
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  router: {
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/styles/main.scss',
    './node_modules/swiper/dist/idangerous.swiper.css',
  ],

  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['./styles/_variables.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/element-ui', ssr: true },
    { src: '@/plugins/swiper', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      /^element-ui/,
      ({ isDev, isLegacy }) => isDev && isLegacy && 'ansi-regex',
      ({ isDev, isLegacy }) => isDev && isLegacy && 'strip-ansi',
    ],
    postcss: {
      plugins: {
        autoprefixer: {},

        'postcss-px-to-viewport': {
          unitToConvert: 'px',
          viewportWidth: 1440,
          unitPrecision: 5,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: ['#__nuxt'],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: undefined,
          include: undefined,
          landscape: false,
          landscapeUnit: 'vw',
          landscapeWidth: 1440,
        },
      },
    },
  },
}
