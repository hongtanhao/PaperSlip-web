<template>
  <div class="editing-assignment">
    <a-row type="flex" justify="end">
      <a-col :span="12" style="text-align: right">
        <a-button type="primary" @click="replaceTopic">
          <span class="iconfont icon-huan pos"></span>换题
        </a-button>
        <a-button type="primary" @click="submitAnswer" :disabled="notEnable">
          <span class="iconfont icon-group8 pos"></span>提交
        </a-button>
      </a-col>
    </a-row>
    <a-row :span="24" justify="start">
      <monaco-editor ref="editor" />
    </a-row>
  </div>
</template>
<script>
import AssignmentTopic from '@/components/AssignmentTopic'
import MonacoEditor from '@/components/MonacoEditor'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'editing-assignment',
  components: { AssignmentTopic, MonacoEditor },
  data () {
    return {
      notEnable: false
    }
  },
  computed: {
    ...mapState({
      work: state => state.assignment.work,
      user: state => state.user.user
    })
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // vm.$store.commit({
      //   type: CHANGE_TOPIC,
      //   value: to.query
      // })
    })
  },
  mounted () {
    this.getData()
  },
  methods: {
    ...mapMutations([
      'editor/CHANGE_EDITOR_MODE'
    ]),
    replaceTopic () {
      this.$router.replace({ path: '/index/list' })
    },
    getData () {
      let data = ''
      this.$refs['editor'].setEditorH(window.innerHeight - 220)
      if (this.work.answerContent) {
        data = this.work.answerContent
      } else {
        data = `/**\n* 开始日期：${new Date().format('YYYY/MM/DD hh:mm:ss')}\n* 功能：${this.work.topicContent}\n**/`
      }
      this.$refs['editor'].initCode(data)
      this['editor/CHANGE_EDITOR_MODE']({ value: this.work.langType })
      this.$refs['editor'].setMode(this.work.langType)
    },
    filterAnswerContent (value) {
      return value.replace(/\d+\n/g, '')
    },
    submitAnswer () {
      this.notEnable = true
      let data = {
        id: 'ASSIGN_ANSWER' + new Date().format('YYYYMMDDhhmmss') + new Date().getTime(),
        studentId: this.user.info.id,
        teacherId: this.work.teacherId,
        questionId: this.work.id,
        answerContent: this.$refs['editor'].getContent(),
        firstCreateTime: new Date().format('YYYY-MM-DD hh:mm:ss'),
        checkStatus: '0'
      }
      if (data.answerContent) {
        if (this.work.answerContent) {
          data.id = this.work.answerId
          data.lastModifyTime = new Date().format('YYYY-MM-DD hh:mm:ss')
          this.$axios.post('answer/update', data).then(res => {
            if (res && res.code === '000000') {
              this.$message.success('答案提交成功')
            } else {
              this.$message.success('答案提交失败')
            }
          })
        } else {
          this.$axios.post('answer/save', data).then(res => {
            if (res && res.code === '000000') {
              this.$message.success('答案提交成功')
            } else {
              this.$message.success('答案提交失败')
            }
          })
        }
      } else {
        this.$message.errror('抱歉，未能正确获取目标文本内容, 请尝试摁下任意键再试')
      }
    }
  }
}
</script>
<style scoped>
.editing-assignment {
}
.pos {
  margin-right: 0.5rem;
  font-size: 14px;
}
</style>
