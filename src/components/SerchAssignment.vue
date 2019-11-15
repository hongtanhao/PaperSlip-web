<template>
    <div class="serch-work">
      <div class="select-option">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :span="3">
            <span class="iconfont icon-tiaojian" style="fontSize: 12px"></span>&nbsp;
            <span>请选择：</span>
          </a-col>
          <a-col :span="3">
            <a-select defaultValue="wind" style="width: 160px;" @change="handleChangeAuthor">
              <a-select-option  v-for="(item, index) in authors" :key="item+index" :value="item.value">
                <span><img src="" /></span>
                <span>{{item.value}}</span>
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="3">
            <a-select defaultValue="基础" style="width: 160px;" @change="handleChangeLang">
              <a-select-option  v-for="(item, index) in levels" :key="item+index" :value="item.value">
                <span :class="item.icon"></span> {{item.value}}
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="3">
            <a-select defaultValue="javascript" style="width: 160px;" @change="handleChangeLevel">
              <a-select-option  v-for="(item, index) in programLangs" :key="item+index" :value="item.value">
                <span :class="item.icon"></span> {{item.value}}
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="10">
            <a-range-picker  @change="handleChangeDate" />
          </a-col>
          <a-col :span="2">
            <a-button type="primary" style="text-align: right">查找</a-button>
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
          icon: 'iconfont icon-tong1'
        },
        {
          value: '中级',
          icon: 'iconfont icon-yin'
        },
        {
          value: '进阶',
          icon: 'iconfont icon-jin'
        },
        {
          value: '高级',
          icon: 'iconfont icon-zuanshi'
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
    handleChangeAuthor () {},
    handleChangeLevel () {}
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
