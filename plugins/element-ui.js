import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import { Breadcrumb, BreadcrumbItem, Tabs, TabPane } from 'element-ui'

const components = [Breadcrumb, BreadcrumbItem, Tabs, TabPane]

const Element = {
  install(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}

Vue.use(Element, { locale })
