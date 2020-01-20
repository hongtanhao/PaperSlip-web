<template>
    <div class="editing-assignment">
      <a-row type="flex" justify="end">
        <a-col :span="12" style="text-align: right">
          <a-button type="primary" @click="replaceTopic"><span class="iconfont icon-huan pos"></span>换题</a-button>
          <a-button type="primary" @click="handleCheck('3')"><span class="iconfont icon-jujue pos"></span>驳回</a-button>
          <a-button type="primary" @click="handleCheck('2')"><span class="iconfont icon-tongguo1 pos"></span>通过</a-button>
        </a-col>
       </a-row>
      <a-row :span='24' justify="start">
        <monaco-editor ref="editor"/>
      </a-row>
    </div>
</template>
<script>
import AssignmentTopic from '@/components/AssignmentTopic'
import MonacoEditor from '@/components/MonacoEditor'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'editing-assignment',
  components: {AssignmentTopic, MonacoEditor},
  data () {
    return {
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
      this.$router.replace({path: '/index/check'})
    },
    getData () {
      let data = this.work.answerContent
      this.$refs['editor'].setEditorH(window.innerHeight - 220)
      this.$refs['editor'].initCode(data)
      // this['editor/CHANGE_EDITOR_MODE']({value: this.work.langType})
      // this.$refs['editor'].setMode(this.work.langType)
    },
    handleCheck (status) {
      let data = {
        checkStatus: status,
        studentId: this.work.studentId,
        id: this.work.id,
        answerContent: this.work.answerContent
      }
      this.$axios.post('answer/update', data).then(res => {
        if (res && res.code === '000000') {
          this.$message.success('审查提交成功')
        } else {
          this.$message.success('审查提交失败')
        }
      })
    }
  }
}
</script>
<style scoped>
.editing-assignment {
}
.pos {
  margin-right: .5rem;
  font-size: 14px;
}
</style>
