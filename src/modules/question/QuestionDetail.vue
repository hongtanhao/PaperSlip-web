<template>
  <div class="question-detail">
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :span="20">
        <h2>作业详情</h2>
      </a-col>
      <a-col :span="4" style="text-align: right">
        <a-button @click="$router.go(-1)">返回</a-button>
      </a-col>
    </a-row>
    <a-row style="margin-top: 25px" type="flex" justify="start" align="middle">
      <a-steps
        :current="current"
        :status="answer.checkStatus === '0' ? 'wait' : (answer.checkStatus === '1' ? 'finish' : 'error')"
      >
        <a-step title="已提交答题" />
        <a-step v-if="answer.checkStatus === '0'" status="process" title="等待审查中...">
          <a-icon type="loading" slot="icon" />
        </a-step>
        <a-step v-else title="已审查" />
        <a-step :title="answer.checkStatus === '2' ? '被驳回' : '已通过'" />
      </a-steps>
    </a-row>
    <a-row type="flex" justify="start" align="middle" style="margin-top: 25px">
      <a-col :span="4" style="text-align: right">题目：</a-col>
      <a-col :span="18" style="text-align: left">{{work.topicContent}}</a-col>
    </a-row>
    <a-row type="flex" justify="start" align="middle" style="margin-top: 15px">
      <a-col :span="4" style="text-align: right">创建时间：</a-col>
      <a-col :span="18" style="text-align: left">{{work.createTime}}</a-col>
    </a-row>
    <a-row type="flex" justify="start" align="middle" style="margin-top: 15px">
      <a-col :span="4" style="text-align: right">出题者：</a-col>
      <a-col :span="18" style="text-align: left">{{work.name}}</a-col>
    </a-row>
    <a-row type="flex" justify="start" align="middle" style="margin-top: 15px">
      <a-col :span="4" style="text-align: right">所属语言类型：</a-col>
      <a-col :span="18" style="text-align: left">{{work.langType}}</a-col>
    </a-row>
    <a-row type="flex" justify="start" align="middle" style="margin-top: 15px">
      <a-col :span="4" style="text-align: right">此题通过率：</a-col>
      <a-col
        :span="18"
        style="text-align: left"
        :class="answer.answerContent ? 'finished' : ''"
      >{{answer.answerContent ? '50%' : '0%'}}</a-col>
    </a-row>
    <a-row
      v-if="answer.answerContent"
      type="flex"
      justify="start"
      align="top"
      style="margin: 15px 0 50px"
    >
      <a-col :span="4" style="text-align: right">答案内容：</a-col>
      <a-col :span="18" style="text-align: left">
        <a-textarea
          style="background-color: #bbb;"
          v-model="answer.answerContent"
          :autosize="{ minRows: 2, maxRows: 8 }"
        />
      </a-col>
    </a-row>
    <a-row type="flex" justify="start" align="middle" style="margin-top: 15px">
      <a-col :offset="6" :span="18" style="text-align: left">
        <a-button type="primary" @click="handleAnswer">{{answer.answerContent ? "重新答题" : '开始答题'}}</a-button>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'submit-question',
  data () {
    return {
      answer: {},
      currentStep: 1,
      answerId: ''
    }
  },
  computed: {
    ...mapState({
      work: state => state.assignment.work,
      user: state => state.user.user
    }),
    current () {
      if (this.answer.checkStatus === '0') {
        return 1
      } if (this.answer.checkStatus === '1' || this.answer.checkStatus === '2') {
        return 2
      } else {
        return 0
      }
    }
  },
  created () {
    this.$axios.post('answer/partLists', {
      studentId: this.user.info.id,
      questionId: this.work.id
    }).then(res => {
      if (res && res.code === '000000') {
        if (res.data.length === 1) {
          this.answer = res.data[0]
        }
      }
    })
  },
  mounted () {
  },
  methods: {
    handleAnswer () {
      this.work.answerContent = this.answer.answerContent
      this.work.answerId = this.answer.id
      this.$store.commit({
        type: 'assignment/CHANGE_TOPIC',
        value: this.work
      })
      this.$router.push({ path: '/index/answer' })
    }
  }
}
</script>
<style scoped>
.question-detail {
  width: 80%;
  margin: 3rem auto;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  padding: 2rem;
}
.finished {
  color: seagreen;
}
</style>
