<template>
    <div class="assignment-list">
      <a-table :columns="columns" :dataSource="topicLists" :scroll="scroll">
        <a slot="action" slot-scope="record, index" @click.self="startDoAssign(record, index)">开始做题</a>
      </a-table>
    </div>
</template>
<script>
export default {
  name: 'assignment-list',
  props: ['taData'],
  data () {
    return {
      scroll: {
        x: 1500, y: 1800
      },
      columns: [
        { title: '序号', width: 100, dataIndex: 'order', key: 'order', fixed: 'left' },
        { title: '作者', width: 100, dataIndex: 'userId', key: 'userId', fixed: 'left' },
        { title: '编程语言', width: 100, dataIndex: 'langType', key: 'langType', fixed: 'left' },
        { title: '创建时间', dataIndex: 'createTime', key: 'createTime', width: 150 },
        { title: '题目', dataIndex: 'topic', key: 'topic', width: 350 },
        { title: '等级', dataIndex: 'level', key: 'level', width: 100 },
        {
          title: '操作',
          key: 'operation',
          fixed: 'right',
          width: 100,
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  },
  mounted () {
    console.log('this.topicLists', this.topicLists)
  },
  computed: {
    topicLists () {
      return this.taData
    }
  },
  methods: {
    startDoAssign (...args) {
      this.$store.commit({
        type: 'assignment/CHANGE_TOPIC',
        value: args[0]
      })
      this.$router.push({path: '/index/answer'})
    }
  }
}
</script>
<style scoped>
.assignment-list {
  margin-top: 1rem;
  border-radius: 4px;
}
</style>
