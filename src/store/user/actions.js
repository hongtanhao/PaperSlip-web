import { CHANGE_USER_MODE } from './actionTypes'
export default {
  [CHANGE_USER_MODE] ({commit}, payload) {
    console.log('actions========', arguments)
    commit({type: [CHANGE_USER_MODE], value: payload})
  }
}
