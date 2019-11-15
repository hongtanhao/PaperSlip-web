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
              <a-button type="primary" style="margin-left: 460px;">
                <span style="margin-right: 1rem" class="iconfont icon-submit"></span> 提交
               </a-button>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
  name: 'submit-question',
  data () {
    return {
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
  methods: {
    handleChangeLang () {},
    handleChangeLevel () {}
  }
}
</script>
<style scoped>
</style>
