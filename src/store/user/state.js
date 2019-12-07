import Storage from '@/utils/storage.js'
export default {
  user: Storage.get('user') && Storage.get('user').info ? Storage.get('user') : {info: null, mode: '1'}
}
