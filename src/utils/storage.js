export default {
   set (key, value) {
       window.sessionStorage.setItem(key, JSON.stringify(value))
   },
   get (value) {
       return JSON.parse(window.sessionStorage.getItem(value))
   }
}