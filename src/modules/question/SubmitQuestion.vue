<template>
    <div class="submit-question">
        <a-row type="flex" justify="end" align="middle">
            <a-col :span="24" style="text-align: right">
              <label>请设置题目类型</label>
              <a-select defaultValue="" style="width: 160px;" @change="handleChangeLang">
                  <a-select-option  v-for="(item, index) in programLangs" :key="item+index" :value="item.value">
                    <span :class="item.icon"></span> {{item.value}}
                  </a-select-option>
              </a-select>
             <label style="margin-left: 100px;">请设置题目难度</label>
              <a-select defaultValue="" style="width: 160px;" @change="handleChangeLevel">
                <a-select-option  v-for="(item, index) in levels" :key="item+index" :value="item.level">
                  <span :class="item.icon"></span> {{item.value}}
                </a-select-option>
              </a-select>
              <a-button type="primary" @click="handleSubmitQuestion" :disabled="notEnableSub" style="margin-left: 460px;">
                <span style="margin-right: 1rem" class="iconfont icon-submit"></span> 提交
               </a-button>
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
      level: '',
      langType: '',
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
      ]
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      editor: state => state.editor.editor
    }),
    notEnableSub () {
      if (!this.langType || !this.level) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    handleChangeLang (item) {
      this.langType = item
    },
    handleChangeLevel (item) {
      this.level = item
    },
    handleSubmitQuestion () {
      let data = {
        id: 'ASSIGN' + new Date().format('YYYYMMDDhhmmss') + new Date().getTime(),
        userId: this.user.info.id,
        langType: this.langType,
        createTime: new Date().format('YYYY-MM-DD hh:mm:ss'),
        level: this.level
      }
      this.$emit('submitQuestion', JSON.stringify(data))
    }
  }
}
</script>
<style scoped>
</style>
