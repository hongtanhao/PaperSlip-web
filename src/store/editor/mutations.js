import {CHANG_EDITOR_CONTENT, CHANGE_EDITOR_MODE, SET_EDITOR} from './actionTypes'
export default {
  [CHANG_EDITOR_CONTENT] (state, payload) {
    state.editor.content = payload.value.content
  },
  [SET_EDITOR] (state, payload) {
    console.log('set_editor', payload)
    state.editor = {
      ...state.editor,
      ...payload.value
    }
  },
  [CHANGE_EDITOR_MODE] (state, payload) {
    state.editor.mode = payload.value
  }
}
