export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  fallback: true,
  generate: {
    fallback: '404.html',
  },
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
      {
        hid: 'description',
        name: 'description',
        content: '职虎-让职业连接人与未来',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '职虎,职虎人力,人力资源,技能培训,新职业,新职业标准,新职业培训,评价组织,校企合作,实训平台,找工作,招聘,点点招聘,点点求职,点点速聘',
      },
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
    scrollBehavior(to, from, savedPosition) {
      if (from.path !== to.path) return { x: 0, y: 0 }
      return {
        x: 0,
        y: 500,
      }
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
    { src: '@/plugins/raf.js', ssr: false },
    { src: '@/plugins/scroll-to.js', ssr: false },
    { src: '@/plugins/swiper', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@aceforth/nuxt-optimized-images'
  ],
  // optimizedImages: {
  //   optimizeImages: true,
  // },
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true,
    debug: true,
    // baseURL: '',
  },
  proxy: {
    '/api': {
      target: 'https://zhihu_apigateway.chinahrt.com/api/customerGoods/', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '', // 把 /api 替换成 /
      },
    },
  },

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
