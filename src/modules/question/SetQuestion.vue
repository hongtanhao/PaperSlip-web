<template>
    <div class="set-question">
        <submit-question @submitQuestion="handleSubmitQuestion"/>
        <monaco-editor ref="editor"/>
    </div>
</template>
<script>
import MonacoEditor from '@/components/MonacoEditor'
import SubmitQuestion from './SubmitQuestion'
import {mapMutations} from 'vuex'
export default {
  name: 'set-question',
  components: {MonacoEditor, SubmitQuestion},
  mounted () {
    this['editor/CHANGE_EDITOR_MODE']({value: 'markdown'})
    this.$refs['editor'].setMode('markdown')
  },
  methods: {
    ...mapMutations([
      'editor/CHANGE_EDITOR_MODE'
    ]),
    filterText (text) {
      return (text.replace(/\d+\n/g, '')).replace(/#+/, '')
    },
    handleSubmitQuestion (data) {
      let content = this.$refs['editor'].getContent()
      data = JSON.parse(data)
      data.topicContent = this.filterText(content)
      this.$axios.post('question/save', data).then(res => {
        if (res.code === '000000') {
          this.$message.success('题目保存成功。')
        } else {
          this.$message.error('题目保存失败！')
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
