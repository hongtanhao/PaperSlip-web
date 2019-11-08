<template>
    <div class="serch-work">
        <div class="select-option">
            <span class="iconfont icon-tiaojian" style="fontSize: 12px"></span>&nbsp;
            <span>请选择：</span>
            <a-select defaultValue="wind" style="width: 160px;" @change="handleChangeAuthor">
              <a-select-option  v-for="(item, index) in authors" :key="item+index" :value="item.value">
                <span><img src="" /></span>
                <span>{{item.value}}</span>
              </a-select-option>
            </a-select>
            <a-select defaultValue="javascript" style="width: 160px;margin-left: 100px;" @change="handleChangeLang">
                <a-select-option  v-for="(item, index) in programLangs" :key="item+index" :value="item.value">
                  <span :class="item.icon"></span> {{item.value}}
                </a-select-option>
            </a-select>
            <a-range-picker  style="margin-left: 100px;" @change="handleChangeDate" />
            <a-button style="margin-left: 460px;">查找</a-button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'serch-work',
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
      authors: [
        {
          value: 'wind',
          icon: 'iconfont icon-css1'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    handleChangeLang (date, dateString) {
      console.log(date, dateString)
    },
    handleChangeDate () {},
    handleChangeAuthor () {}
  }
}
</script>
<style scoped>
.serch-work {
    height: 60px;
    width: 100%;
}
.select-option {
    margin: 4px;
    border-radius: 8px;
    height: 100%;
    border: 1px solid seagreen;
    text-align: left;
    line-height: 100%;
    padding: .8rem;
    background-color: seagreen;
}
</style>
