import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
import '@/themes/index.css'
locale.use(lang)
import { Breadcrumb, BreadcrumbItem, Tabs, TabPane } from 'element-ui'
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
