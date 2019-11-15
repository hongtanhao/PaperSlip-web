<template>
    <div class="editing-assignment">
      <a-row type="flex" justify="end">
        <!-- <a-col :span="12" style="text-align: right">
          <assignment-topic />
        </a-col> -->
        <a-col :span="12" style="text-align: right">
          <a-button type="primary" @click="replaceTopic"><span class="iconfont icon-huan pos"></span>换题</a-button>
          <a-button type="primary" @click="replaceTopic"><span class="iconfont icon-group8 pos"></span>提交</a-button>
        </a-col>
       </a-row>
      <a-row :span='24' justify="start">
        <monaco-editor ref="editor"/>
      </a-row>
    </div>
</template>
<script>
import AssignmentTopic from './AssignmentTopic'
import MonacoEditor from './MonacoEditor'
import {mapState} from 'vuex'
export default {
  name: 'editing-assignment',
  components: {AssignmentTopic, MonacoEditor},
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      topic: state => state.assignment.work.topic
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
    replaceTopic () {
      this.$router.replace({path: '/index/todoAssignment'})
    },
    getData () {
      // this.$axios.get('../../static/lib/monaco/samples/sample.javascript.txt').then(response => {
      //   if (response) {
      //     this.$refs['editor'].setEditorH(window.innerHeight - 220)
      //     this.$refs['editor'].initCode(response.data)
      //   }
      // })
      let data = `/**\n* 开始日期：${new Date().format('YYYY/MM/DD hh:mm:ss')}\n* 功能：${this.topic}\n**/`
      this.$refs['editor'].setEditorH(window.innerHeight - 220)
      this.$refs['editor'].initCode(data)
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
