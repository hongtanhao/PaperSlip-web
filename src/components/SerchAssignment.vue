<template>
    <div class="serch-work">
      <div class="select-option">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :span="3">
            <span class="iconfont icon-tiaojian" style="fontSize: 12px"></span>&nbsp;
            <span>请选择查询条件：</span>
          </a-col>
          <a-col :span="3">
            <a-select defaultValue="出题者" style="width: 160px;" @change="handleChangeAuthor">
              <a-select-option  v-for="(item, index) in authors" :key="item+index" :value="item.id">
                <span><img src="" /></span>
                <span>{{item.name}}</span>
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="3">
            <span></span>
            <a-select defaultValue="难度" style="width: 160px;" @change="handleChangeLevel">
              <a-select-option  v-for="(item, index) in levels" :key="item+index" :value="item.level">
                <span :class="item.icon"></span> {{item.value}}
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="3">
            <a-select defaultValue="编程语言" style="width: 160px;" @change="handleChangeLang">
              <a-select-option  v-for="(item, index) in programLangs" :key="item+index" :value="item.value">
                <span :class="item.icon"></span> {{item.value}}
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="10">
            <a-range-picker  @change="handleChangeDate" />
          </a-col>
          <a-col :span="2">
            <a-button type="primary" style="text-align: right" @click="handleQueryQuestion">查找</a-button>
          </a-col>
        </a-row>
      </div>
    </div>
</template>
<script>
export default {
  name: 'serch-work',
  data () {
    return {
      langType: '',
      selectDate: '',
      qUserId: '',
      level: '',
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
  },
  watch: {
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
        teacherId: this.qUserId,// 出题者
        userId: this.qUserId,// 答题者
        createTime: this.selectDate,
        langType: this.langType,
        level: this.level
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
          this.$message.error('题目查询失败')
        }
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
