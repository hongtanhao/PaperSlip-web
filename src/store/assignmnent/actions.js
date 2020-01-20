import {CHANGE_TOPIC} from './actionsTypes'
export default {
  changeTopic ({state, commit, rootstate}) {
    commit(CHANGE_TOPIC)
  }
}
