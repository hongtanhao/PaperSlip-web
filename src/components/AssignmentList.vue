<template>
  <div class="assignment-list">
    <a-row type="flex" justify="center">
      <a-col :span="24">
        <a-table bordered :columns="columns" :dataSource="topicLists" :scroll="scroll">
          <a slot="action" slot-scope="record, index" @click.self="startDoAssign(record, index)">浏览</a>
        </a-table>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: 'assignment-list',
  props: ['taData'],
  data () {
    return {
      scroll: {
        x: 1500, y: 600
      },
      columns: [
        { title: '序号', dataIndex: 'order', key: 'order', width: 150 },
        { title: '作者', dataIndex: 'name', key: 'name', width: 150 },
        { title: '编程语言', dataIndex: 'langType', key: 'langType', width: 150 },
        { title: '创建时间', dataIndex: 'createTime', key: 'createTime', width: 200 },
        { title: '题目', dataIndex: 'topicContent', key: 'topicContent', width: 650 },
        { title: '等级', dataIndex: 'level', key: 'level', width: 150 },
        {
          title: '操作',
          key: 'operation',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.scroll.y = window.innerHeight - 300
    }, false)
    this.scroll.y = window.innerHeight - 300
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
      this.$router.push({ path: '/index/questionDetail' })
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
