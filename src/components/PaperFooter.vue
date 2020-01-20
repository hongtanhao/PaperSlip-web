<template>
  <div class="footer">
    <a-row type="flex" justify="center">
      <a-col :span="24" style="text-align: center;">
        <a href="http://www.beian.miit.gov.cn/">京ICP备19057315号</a>
        <!-- <span class="iconfont icon-zan1 self" @click="handleClick" ref="star"></span>
        <span style="color: seagreen; font-size: 20px; vertical-align: bottom">{{count}}</span>次 -->
      </a-col>
    </a-row>
  </div>
</template>
<script>
import Storage from '@/utils/storage.js'
export default {
  name: 'todo-assignment',
  data () {
    return {
      count: '100'
    }
  },
  created () {
    // this.$axios.get('/user/visitCount').then(res => {
    //   if (res.code === '000000') {
    //     this.count = Number(res.data.count) + 1
    //   }
    // })
  },
  mounted () {
    if (Storage.get('isStar')) {
      this.$refs['star'].style.color = 'seagreen'
    }
  },
  methods: {
    handleClick () {
      let isStar = Storage.get('isStar')
      if (!isStar) {
        this.count = Number(this.count) + 1
        Storage.set('isStar', true)
        this.$refs['star'].style.color = 'seagreen'
      } else {
        this.$message.success('您已经赞过了呢')
      }
    }
  }

}
</script>
<style scoped>
.footer {
  height: 40px;
  width: 100%;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  background-color: rgb(51, 51, 51);
  color: #bbbb;
}
.self {
  color: #bbbb;
  cursor: pointer;
}
</style>
