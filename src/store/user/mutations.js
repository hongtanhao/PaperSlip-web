import { CHANGE_USER_MODE, SET_USER } from './actionTypes'
export default {
  [SET_USER] (state, payload) {
    state.user.info = {
      ...state.user.info,
      ...payload.value
    }
  },
  [CHANGE_USER_MODE] (state, payload) {
    state.user.mode = payload.value
  }
}
