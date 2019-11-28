<template>
    <div class="editing-assignment">
      <a-row type="flex" justify="end">
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
      work: state => state.assignment.work
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
      this.$router.replace({path: '/index/list'})
    },
    getData () {
      let data = `/**\n* 开始日期：${new Date().format('YYYY/MM/DD hh:mm:ss')}\n* 功能：${this.work.topic}\n**/`
      this.$refs['editor'].setEditorH(window.innerHeight - 220)
      this.$refs['editor'].initCode(data)
      this['editor/CHANGE_EDITOR_MODE']({value: this.work.langType})
      this.$refs['editor'].setMode(this.work.langType)
      console.log('this.work', this.work)
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
