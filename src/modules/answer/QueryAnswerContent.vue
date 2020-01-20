<template>
  <div class="serch-work">
    <div class="select-option">
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="3">
          <span class="iconfont icon-tiaojian" style="fontSize: 12px"></span>&nbsp;
          <span>请选择查询条件：</span>
        </a-col>
        <a-col :span="3">
          <a-select
            mode="multiple"
            placeholder="答题者"
            style="width: 160px;"
            @change="handleChangeStudent"
          >
            <a-select-option v-for="(item, index) in students" :key="item+index" :value="item.id">
              <span>
                <img src />
              </span>
              <span>{{item.name}}</span>
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="10">
          <a-range-picker @change="handleChangeDate" />
        </a-col>
        <a-col :span="8" style="text-align: right">
          <a-button type="primary" @click="handleQueryQuestion">查找</a-button>
        </a-col>
      </a-row>
    </div>
    <div>
      <div class="assignment-list">
        <a-table :columns="columns" :dataSource="answerContents" :scroll="scroll">
          <span slot="tags" slot-scope="tags">
            <a-tag
              v-for="tag in tags"
              :color="tag==='3' ? 'red' : (tag==='2' ? 'seagreen' : (tag==='1' ? 'purple' : 'orange'))"
              :key="tag"
            >
              {{tag == '3' ? '被驳回' : (tag === '2' ? '已审过' : (tag === '1' ? '待审查' : '未答题'))}}
            </a-tag>
          </span>
          <a slot="action" slot-scope="record, index" @click.self="check(record, index)">批改</a>
        </a-table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'serch-work',
  data () {
    return {
      scroll: {
        x: 1500, y: 1800
      },
      langType: [],
      selectDate: [],
      studentId: [],
      level: [],
      programLangs: [
        {
          value: 'html',
          icon: 'iconfont icon-html'
        },
        {
          value: 'css',
          icon: 'iconfont icon-css1'
        },
        {
          value: 'javascript',
          icon: 'iconfont icon-java-script'
        },
        {
          value: 'java',
          icon: 'iconfont icon-java'
        }
      ],
      levels: [
        {
          value: '基础',
          level: '1',
          icon: 'iconfont icon-tong1'
        },
        {
          value: '中级',
          level: '2',
          icon: 'iconfont icon-yin'
        },
        {
          value: '进阶',
          level: '3',
          icon: 'iconfont icon-jin'
        },
        {
          value: '高级',
          level: '4',
          icon: 'iconfont icon-zuanshi'
        }
      ],
      students: [
      ],
      columns: [
        { title: '序号', width: 100, dataIndex: 'order', key: 'order' },
        { title: '答题者', width: 100, dataIndex: 'name', key: 'name' },
        { title: '答案内容', dataIndex: 'answerContent', key: 'answerContent', width: 650 },
        {
          title: '状态',
          key: 'tags',
          dataIndex: 'tags',
          width: 100,
          scopedSlots: { customRender: 'tags' }
        },
        {
          title: '操作',
          key: 'operation',
          width: 100,
          scopedSlots: { customRender: 'action' }
        }
      ],
      answerContents: []
    }
  },
  created () {
    // 获取出题者列表
    this.$axios.get('user/allLists').then(res => {
      if (res && res.code === '000000') {
        this.students = res.data.filter(item => item.role === '1')
      }
    })
    this.getAnsewerLists()
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.scroll.y = window.innerHeight - 300
    }, false)
    this.scroll.y = window.innerHeight - 300
  },
  watch: {
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    handleChangeLang (item) {
      this.langType = item
    },
    handleChangeDate (item) {
      this.selectDate = item
    },
    handleChangeStudent (item) {
      this.studentId = item
    },
    handleChangeLevel (item) {
      this.level = item
    },
    handleQueryQuestion () {
      this.getAnsewerLists()
    },
    getAnsewerLists () {
      let data = {
        studentId: this.studentId.join(''),
        startTime: this.selectDate[0],
        endTime: this.selectDate[1]
      }
      this.$axios.post('answer/partLists', data).then(res => {
        if (res && res.code === '000000') {
          let data = res.data.map((item, index) => {
            item.key = index
            item.order = index + 1
            item.tags = [item.checkStatus]
            return item
          })
          this.answerContents = data
        } else {
          this.$message.error('答案查询失败')
        }
      }).catch(err => {
        this.answerContents = []
        this.$message.error(`答案查询失败${err}`)
      })
    },
    check (...args) {
      this.$store.commit({
        type: 'assignment/CHANGE_TOPIC',
        value: args[0]
      })
      this.$router.push({ path: '/index/checkAnswer' })
    }
  }
}
</script>
<style scoped>
.serch-work {
  height: 60px;
  width: 100%;
}
.select-option {
  border-radius: 8px;
  height: 100%;
  border: 1px solid seagreen;
  text-align: left;
  line-height: 100%;
  padding: 0.8rem;
  background-color: seagreen;
}
</style>
