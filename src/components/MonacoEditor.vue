<template>
 <div class="monaco-editor">
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :span="12">
        <div>
          <label><img src="/static/images/lang.svg" width="20px"/></label>
          <a-select :defaultValue="langType" style="width: 160px;"  @change="handleChangeLangMode">
            <a-select-option v-for="(item, index) in langModes"
              :key="index"
              :value="index">{{item.modeId}}
            </a-select-option>
          </a-select>
        </div>
      </a-col>
      <a-col :span="12">
        <div>
          <label><img src="/static/images/theme.svg" width="20px"/></label>
          <a-select defaultValue="Visual Studio Dark" style="width: 200px;" @change="handleChangeTheme">
            <a-select-option v-for="(item, index) in themes" :key="index" :value="index">{{item.text}}</a-select-option>
          </a-select>
        </div>
      </a-col>
    </a-row>
    <a-row :span='24' type="flex" justify="start" >
      <div id="editor" ref="editor"></div>
    </a-row>
  </div>
</template>
<script>
/* eslint-disable */
import {mapState} from 'vuex'
export default {
  name: 'monaco-editor',
  data () {
    return {
      langModes: [],
      currentMOde: '',
      currentMOdeIndex: '',
      editor: null,
      themes: [
        {
          text: 'Visual Studio'
        },
        {
          text: 'Visual Studio Dark'
        },
        {
          text: 'High Contrast Dark'
        }
      ],
      code: ''
    }
  },
  computed: {
    ...mapState({
      langType: state => state.assignment.work.langType
    })
  },
  created () {
    this.langModes = (() => {
      var modesIds = monaco.languages.getLanguages().map(function(lang) { return lang.id; })
      modesIds.sort()
      return modesIds.map(function(modeId) {
        return {
          modeId: modeId,
        }
      })
    })()
    // for (let i = 0; i < this.langModes.length; i++){
    //   if (this.langType === this.langModes[i].modeId) {
    //     this.currentMOde = this.langModes[i].modeId
    //     this.currentMOdeIndex = i;
    //     break;
    //   }
    // }
  },
  mounted () {
    console.log('this.langType', this.langType)
    for (let i = 0; i < this.langModes.length; i++){
      if (this.langType === this.langModes[i].modeId) {
        this.currentMOde = this.langModes[i].modeId
        this.currentMOdeIndex = i;
        break;
      }
    }
    this.$refs['editor'].style.height = (window.innerHeight - 265) + 'px'
    this.createEditor()
    this.handleChangeTheme(1)
    this.getData()
  },
  methods: {
    createEditor () {
      if (!this.editor) {
        this.editor = monaco.editor.create(document.getElementById('editor'), {
          model: null
        })
        window.onresize = () => {
          if (this.editor) {
            this.editor.layout()
          }
        }
      }
    },
    getMode () {
      if (this.editor) {
        return this.editor.getModel()
      }
      return 'not found!'
    },
    setMode (data, modeId) {
      this.editor.setModel(monaco.editor.createModel(data, modeId))
    },
    handleChangeLangMode (item) {
      this.currentMOdeIndex = item
      this.setMode(this.code, this.langModes[item].modeId)
    },
    handleChangeTheme (theme) {
      var newTheme = (theme === 1 ? 'vs-dark' : (theme === 0 ? 'vs' : 'hc-black'))
      monaco.editor.setTheme(newTheme)
    },
    getData (mode) {
      this.$axios.get('../../static/lib/monaco/samples/sample.javascript.txt').then(response => {
        if (response) {
          this.code = response.data
          this.setMode(this.code, this.currentMOde)
        }
      })  
    },
  }
}
</script>
<style scoped>

.monaco-editor {
  position: relative;
  padding: 1rem;
}

#editor {
  color: #000;
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 300px;
  text-align: left;
}
</style>
