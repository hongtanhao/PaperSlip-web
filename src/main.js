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

import 'jquery'
import './utils/dateUtil'

import { Avatar, Row, Col, DatePicker, Select, Button, Input, Icon, Table, Dropdown, Menu, Tabs, Modal, Radio, message, Steps, Popover } from 'ant-design-vue'

Vue.use(axiosPlugin)

Vue.use(Avatar)
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
Vue.use(Modal)
Vue.use(Radio)
Vue.use(Steps)
Vue.use(Popover)

Vue.prototype.$message = message
Vue.prototype.$confirm = Modal.confirm

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
