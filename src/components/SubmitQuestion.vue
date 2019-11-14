<template>
    <div class="submit-question">
        <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="24" style="text-align: right">
                <a-select defaultValue="javascript" style="width: 160px;margin-left: 100px;" @change="handleChangeLang">
                <a-select-option  v-for="(item, index) in programLangs" :key="item+index" :value="item.value">
                  <span :class="item.icon"></span> {{item.value}}
                </a-select-option>
            </a-select>
            <a-button style="margin-left: 460px;">提交</a-button>
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
      ]
    }
  }
}
</script>
<style scoped>
</style>
