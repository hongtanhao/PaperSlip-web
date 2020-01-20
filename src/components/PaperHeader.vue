
<template>
    <div class="header">
      <a-row type="flex">
        <a-col :span="12">
          <div class="logo">
            <span style="color: seagreen">积跬步，至千里</span>
          </div>
        </a-col>
        <a-col :offset="10" :span="2" style="text-align: right">
          <a-dropdown>
            <p class="avarta ant-dropdown-link" href="#"><img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  width="20px"/> <span style="color: seagreen">{{user.name}}</span><a-icon type="down" /> </p>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <p><span class="iconfont icon-sinaweibo18 pos"></span>设置</p>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3">
                <p @click="handleQuit"><span class="iconfont icon-tuichu2 pos"></span>退出</p>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-col>
      </a-row>
    </div>
</template>
<script>
import Storage from '@/utils/storage.js'
export default {
  data () {
    return {
      user: Storage.get('user')
    }
  },
  methods: {
    handleQuit () {
      this.$router.push({path: '/'})
    }
  }
}
</script>
<style scoped>
.header {
  background-color: rgb(45,45,45);
  height: 60px;
  line-height: 60px;
  padding: 0 2rem;
  text-align: left;
}

.pos {
  margin-right: 1rem;
}

.avarta {
  cursor: pointer;
}

.logo {
  margin-left: 40px;
}
</style>
