// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import css
import '../static/css/reset.css'

import 'ant-design-vue/dist/antd.css'
import { DatePicker, Select, Button, Input, Icon } from 'ant-design-vue'

Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Button)
Vue.use(Input)
Vue.use(Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
