export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  fallback: true,
  loading: {
    color: '#ffd400',
    height: '2px',
    throttle: 0,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '职虎',
    htmlAttrs: {
      lang: 'zh-Hans',
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
    // mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/styles/main.scss',
    './node_modules/swiper/dist/idangerous.swiper.css',
  ],

  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],
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
  axios: {
    proxy: false, // 表示开启代理
    // prefix: '/', // 表示给请求url加个前缀 /api
    credentials: true,
    debug: true,
    baseURL:
      'https://www.fastmock.site/mock/a4d0ead5174008439867b1760d5b1ed3/api',
  },
  // proxy: {
  //   '/api': {
  //     target:
  //       'https://www.fastmock.site/mock/a4d0ead5174008439867b1760d5b1ed3/api', // 目标接口域名
  //     changeOrigin: true, // 表示是否跨域
  //     pathRewrite: {
  //       '^/api': '/api', // 把 /api 替换成 /
  //     },
  //   },
  // },

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
    vendor: ['element-ui'],
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: '~assets/theme',
          },
        ],
      ],
      comments: true,
    },
  },
}
