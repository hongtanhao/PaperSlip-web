<template>
    <div class="set-question">
       <submit-question/>
      <monaco-editor ref="editor"/>
    </div>
</template>
<script>
import MonacoEditor from './MonacoEditor'
import SubmitQuestion from './SubmitQuestion'
export default {
  name: 'set-question',
  components: {MonacoEditor, SubmitQuestion},
  mounted () {
    // this.$refs['editor'].setEditorH(window.innerHeight / 3)
    this.$refs['editor'].setMode('markdown')
    this.$refs['editor'].setTheme(0)
  }
}
</script>
<style scoped>
</style>
