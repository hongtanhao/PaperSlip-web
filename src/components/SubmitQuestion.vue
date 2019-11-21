<template>
    <div class="submit-question">
        <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="24" style="text-align: right">
              <a-select defaultValue="javascript" style="width: 160px;margin-left: 100px;" @change="handleChangeLang">
                  <a-select-option  v-for="(item, index) in programLangs" :key="item+index" :value="item.value">
                    <span :class="item.icon"></span> {{item.value}}
                  </a-select-option>
              </a-select>
              <a-select defaultValue="基础" style="width: 160px;" @change="handleChangeLevel">
                <a-select-option  v-for="(item, index) in levels" :key="item+index" :value="item.value">
                  <span :class="item.icon"></span> {{item.value}}
                </a-select-option>
              </a-select>
              <a-button type="primary" @click="submitQuestion" style="margin-left: 460px;">
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
    })
  },
  methods: {
    handleChangeLang (item) {
      this.langType = item
    },
    handleChangeLevel (item) {
      this.level = item
    },
    submitQuestion () {
      let data = {
        id: 'ASSIGN' + new Date().format('YYYYMMDDhhmmss') + new Date().getTime(),
        author: this.user.name,
        langType: this.item,
        createTime: new Date().format('YYYY-MM-DD hh:mm:ss'),
        toppicContent: this.editor.content,
        level: this.level
      }
      this.$axios.post('http://localhost:8090/assignment/question/save', data).then(response => {
        if (response) {
          this.$refs['editor'].setEditorH(window.innerHeight - 220)
          this.$refs['editor'].initCode(response.data)
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
