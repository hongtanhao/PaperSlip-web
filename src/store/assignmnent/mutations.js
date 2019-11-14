import {CHANGE_TOPIC} from './actionsTypes'
export default {
  [CHANGE_TOPIC] (state, payload) {
    console.log('[state]', payload)
    state.work = payload.value
  }
}
