export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tiger-website',
    htmlAttrs: {
      lang: 'zh_cn',
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
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/styles/main.scss'],

  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['./styles/_variables.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/element-ui', ssr: true },
    {
      src: './lib/responsive.js',
      ssr: false,
    },
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
    postcss: [
      require('postcss-pxtorem')({
        rootValue: 90,
        propList: ['*'],
      }),
      // require('autoprefixer')({
      //   browsers: ['Android >= 4.0', 'iOS >= 7'],
      // }),
    ],
  },
}
