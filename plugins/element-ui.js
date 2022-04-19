import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
import '@/themes/index.css'
locale.use(lang)
import { Menu, MenuItem, Submenu } from 'element-ui'
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Submenu.name, Submenu)
