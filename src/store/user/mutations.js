import { CHANGE_USER_MODE } from './actionTypes'
export default {
  [CHANGE_USER_MODE] (state, payload) {
    console.log('mutationspppppppp', payload)
    state.user = payload.value
  }
}
