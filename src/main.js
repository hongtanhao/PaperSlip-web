// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axiosPlugin from './plugins/axios-plugin'

import 'ant-design-vue/dist/antd.css'

// import css
import '../static/css/reset.css'
import './utils/dateUtil'
import { Row, Col, DatePicker, Select, Button, Input, Icon, Table, Dropdown, Menu, Tabs } from 'ant-design-vue'

Vue.use(axiosPlugin)

Vue.use(Row)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Button)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Table)
Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Tabs)
// Vue.use(MenuDivider)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
