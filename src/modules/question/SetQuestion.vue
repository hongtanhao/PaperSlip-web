<template>
    <div class="set-question">
        <submit-question @submitQuestion="handleSubmitQuestion"/>
        <monaco-editor ref="editor"/>
        <a-modal title="请确认题目是否有误" v-model="visible" @ok="handleOk" okText="确认" cancelText="取消">
          <p>内容：{{questionData.topicContent}}</p>
          <p>类型：{{questionData.langType}}</p>
          <p>难度：{{questionData.level}}</p>
        </a-modal>
    </div>
</template>
<script>
import MonacoEditor from '@/components/MonacoEditor'
import SubmitQuestion from './SubmitQuestion'
import {mapMutations} from 'vuex'
export default {
  name: 'set-question',
  components: {MonacoEditor, SubmitQuestion},
  data () {
    return {
      visible: false,
      questionData: {}
    }
  },
  mounted () {
    this['editor/CHANGE_EDITOR_MODE']({value: 'markdown'})
    this.$refs['editor'].setMode('markdown')
  },
  methods: {
    ...mapMutations([
      'editor/CHANGE_EDITOR_MODE'
    ]),
    filterContent (text) {
      return text.replace(/#+/g, '')
    },
    handleSubmitQuestion (data) {
      data = JSON.parse(data)
      data.topicContent = this.filterContent(this.$refs['editor'].getContent())
      this.visible = true
      this.questionData = data
    },
    handleOk (e) {
      this.visible = false
      this.$axios.post('question/save', this.questionData).then(res => {
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
