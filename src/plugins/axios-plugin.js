/*eslint-disable */
import axios from 'axios'
import qs from 'qs'
let axiosPlugin = {}
axiosPlugin.install = (Vue, options) => {
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  const service = axios.create({
    ...options,
    baseURL: 'http://localhost:8090/assignment/',
    timeout: 1000
  })
  service.interceptors.request.use(function (config) {
    console.log('******************上送报文*****************')
    console.log(JSON.parse(config.data))
    return config
  }, function (error) {
    return Promise.reject(error)
  })
  service.interceptors.response.use(function (response) {
    console.log('******************返回报文*****************')
    let data = response.data
    data.status = response.status
    console.log(data)
    return data
  }, function (error) {
    return Promise.reject(error)
  })
  Vue.prototype.$axios = service
  Vue.prototype.$axios.get = (url, data) => {
    let axiosOpt = {
      ...options,
      ...{
        method: 'get',
        url,
        params: qs.stringify(data)
      }
    }
    return service(axiosOpt)
  }
  Vue.prototype.$axios.post = (url, data) => {
    let axiosOpt = {
      ...options,
      ...{
        method: 'post',
        url,
        data: JSON.stringify(data)
      }
    }
    return service(axiosOpt)
  }
  // AJAX
  Vue.prototype.$ajax ={}
  Vue.prototype.$ajax.post = (url, data, successCallback, failCallback) => {
    jQuery.ajax({
      type: 'POST',
      url: `http://localhost:8090/assignment/${url}`,
      data: JSON.stringify(data),
      contentType: "application/json",
      success: function(res) {
        successCallback && successCallback(res)
      },
      error: function(error) {
        successCallback && successCallback(error)
      }
    })
  }
}
export default axiosPlugin
