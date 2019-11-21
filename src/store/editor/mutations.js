import {CHANG_EDITOR_CONTENT} from './actionTypes'
export default {
  [CHANG_EDITOR_CONTENT] (state, payload) {
    state.editor.content = payload.value.content
  }
}
