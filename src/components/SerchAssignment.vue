<template>
    <div class="serch-work">
      <div class="select-option">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="3">
            <span class="iconfont icon-tiaojian" style="fontSize: 12px"></span>&nbsp;
            <span>请选择查询条件：</span>
          </a-col>
          <a-col :span="3">
            <a-select mode="multiple" placeholder="出题者" style="width: 160px;" @change="handleChangeAuthor">
              <a-select-option  v-for="(item, index) in authors" :key="item+index" :value="item.id">
                <span><img src="" /></span>
                <span>{{item.name}}</span>
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="3">
            <span></span>
            <a-select mode="multiple" placeholder="难度" style="width: 160px;" @change="handleChangeLevel">
              <a-select-option  v-for="(item, index) in levels" :key="item+index" :value="item.level">
                <span :class="item.icon"></span> {{item.value}}
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="3">
            <a-select mode="multiple" placeholder="编程语言" style="width: 160px;" @change="handleChangeLang">
              <a-select-option  v-for="(item, index) in programLangs" :key="item+index" :value="item.value">
                <span :class="item.icon"></span> {{item.value}}
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="10">
            <a-range-picker  @change="handleChangeDate" />
          </a-col>
          <a-col :span="2" style="text-align: right">
            <a-button type="primary"  @click="handleQueryQuestion"><img src="/static/images/search.svg" width="30">&nbsp;&nbsp;查找</a-button>
          </a-col>
        </a-row>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'serch-work',
  data () {
    return {
      langType: [],
      selectDate: [],
      qUserId: [],
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
      authors: [
      ]
    }
  },
  created () {
    // 获取出题者列表
    this.$axios.get('user/allLists').then(res => {
      if (res && res.code === '000000') {
        this.authors = res.data.filter(item => item.role === '2')
      }
    })
    this.getQuestionLists()
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
    handleChangeAuthor (item) {
      this.qUserId = item
    },
    handleChangeLevel (item) {
      this.level = item
    },
    handleQueryQuestion () {
      this.getQuestionLists()
    },
    getQuestionLists () {
      let data = {
        teacherId: this.qUserId.join(''), // 出题者
        startTime: this.selectDate[0],
        endTime: this.selectDate[1],
        langType: this.langType.join(''),
        level: this.level.join(''),
        studentId: this.user.info && this.user.info.id

      }
      this.$axios.post('question/partLists', data).then(res => {
        if (res && res.code === '000000') {
          let data = res.data.map((item, index) => {
            item.key = index
            item.order = index + 1
            return item
          })
          this.$emit('getData', data)
        } else {
          this.$emit('getData', [])
          this.$message.error('题目查询失败')
        }
      }).catch(err => {
        this.$emit('getData', [])
        this.$message.error(`题目查询失败${err}`)
      })
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
    padding: .8rem;
    background-color: seagreen;
}
</style>
