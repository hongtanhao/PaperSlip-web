<template>
  <div class="question-detail">
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :span="20">
        <h2>作业详情</h2>
      </a-col>
      <a-col :span="4" style="text-align: right">
        <a-button @click="$router.go(-1)">返回</a-button>
        <a-button type="primary" @click="handleAnswer">{{answer.answerContent ? "重答" : '答题'}}</a-button>
      </a-col>
    </a-row>
    <a-row style="margin-top: 25px" type="flex" justify="start" align="middle">
      <!-- <a-steps
        :current="current"
        :status="answer.checkStatus === '0' ? 'wait' : (answer.checkStatus === '1' ? 'finish' : 'error')"
      >
        <a-step title="已提交答题" />
        <a-step v-if="answer.checkStatus === '0'" status="process" title="等待审查中...">
          <a-icon type="loading" slot="icon" />
        </a-step>
        <a-step v-else title="已审查" />
        <a-step :title="answer.checkStatus === '2' ? '被驳回' : '已通过'" />
      </a-steps>-->
      <!-- <a-tooltip title="3 done / 3 in progress / 4 to do">
        <a-progress :percent="60" :successPercent="30" />
      </a-tooltip>-->
      <a-progress :percent="successPercent" :successPercent="successPercent" status="active" />
    </a-row>
    <a-row>
      <a-col :span="8">还未答题</a-col>
      <a-col :span="8">等待审查</a-col>
      <a-col :span="8">
        审查结果：
        <span :class="answer.checkStatus === '2' ? 'finished' : 'error'">{{checkEnd}}</span>
      </a-col>
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
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Storage from '@/utils/storage.js'
export default {
  name: 'submit-question',
  data () {
    return {
      answer: {},
      currentStep: 1,
      answerId: '',
      user: Storage.get('user')
    }
  },
  computed: {
    ...mapState({
      work: state => state.assignment.work
    }),
    checkEnd () {
      if (this.answer.checkStatus === '2') {
        return '已通过'
      } else if (this.answer.checkStatus === '3') {
        return '已驳回'
      } else {
        return ''
      }
    },
    successPercent () {
      if (this.answer.checkStatus === '0' || !this.answer.checkStatus) {
        return 33
      } if (this.answer.checkStatus === '1') {
        return 66
      } else if (this.answer.checkStatus === '2' || this.answer.checkStatus === '3') {
        return 100
      } else {
        return 0
      }
    }
  },
  created () {
    this.$axios.post('answer/partLists', {
      studentId: this.user.id,
      questionId: this.work.id
    }).then(res => {
      if (res && res.code === '000000') {
        if (res.data.length) {
          this.answer = res.data[res.data.length - 1]
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
      this.work.checkStatus = this.answer.checkStatus
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
.error {
  color: red;
  opacity: 0.7;
}
</style>
