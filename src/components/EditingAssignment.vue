<template>
    <div class="editing-assignment">
       <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="12">
          <assignment-topic />
        </a-col>
         <a-col :offset="6" :span="6">
          <a-button type="primary" @click="replaceTopic"><span class="iconfont icon-huan pos"></span>换题</a-button>
          <a-button type="primary" @click="replaceTopic"><span class="iconfont icon-group8 pos"></span>提交</a-button>
        </a-col>
       </a-row>
       <a-row :span='24' justify="start">
        <monaco-editor/>
       </a-row>
    </div>
</template>
<script>
import AssignmentTopic from './AssignmentTopic'
import MonacoEditor from './MonacoEditor'
export default {
  name: 'editing-assignment',
  components: {AssignmentTopic, MonacoEditor},
  data () {
    return {
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // vm.$store.commit({
      //   type: CHANGE_TOPIC,
      //   value: to.query
      // })
    })
  },
  methods: {
    replaceTopic () {
      this.$router.replace({path: '/index/todoAssignment'})
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
