import _ from 'lodash'
import { getScrollTop } from '@/utils/dom'
export default (refName) => {
  return {
    data() {
      return {
        titleBarFixed: false,
      }
    },
    mounted() {
      if (process.browser) {
        this.scroll()
      }
    },
    methods: {
      scroll() {
        // 监听事件
        const vm = this
        const offsetTop = vm.$refs[refName].offsetTop
        const callback = _.debounce(() => {
          const scrollTop = getScrollTop()
          if (scrollTop > offsetTop) {
            vm.titleBarFixed = true
          } else {
            vm.titleBarFixed = false
          }
        })
        window.addEventListener('scroll', callback)
        vm.$once('hook:beforeDestroy', () => {
          window.removeEventListener('scroll', callback)
        })
      },
    },
  }
}
