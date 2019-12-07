<template>
  <div class="login-msg">
    <a-row>
      <a-col :span="10">
        <a-menu v-model="current" mode="horizontal">
          <a-menu-item key="mail">
            <a href="https://hongtanhao.github.io/" target="_blank" rel="noopener noreferrer">王小峰的博客</a>
          </a-menu-item>
          <a-menu-item key="app">
            <a href="http://47.104.139.117:8086/" target="_blank" rel="noopener noreferrer">私有云盘</a>
          </a-menu-item>
          <a-menu-item key="login">
            <a @click="handleLogin">登录</a>
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
    <!-- <a-modal
      title="Title"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
    </a-modal> -->
      <div class="fill-login-msg" v-if="visible">
        <a-tabs :defaultActiveKey="mode" @change="handleChangeTab">
          <a-tab-pane key="1">
            <span slot="tab">答题模式</span>
            <login-input />
          </a-tab-pane>
          <a-tab-pane key="2">
            <span slot="tab">出题模式</span>
            <login-input />
          </a-tab-pane>
        </a-tabs>
      </div>
  </div>
</template>
<script>
import LoginInput from './LoginInput'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      userName: '请输入用户名',
      password: '请输入密码',
      current: ['login'],
      visible: false
    }
  },
  components: { LoginInput },
  computed: {
    ...mapState({
      mode: state => state.user.user.mode
    })
  },
  mounted () {
  },
  methods: {
    handleChangeTab (item) {
      this['user/CHANGE_USER_MODE']({ value: String(item) })
    },
    ...mapMutations([
      'user/CHANGE_USER_MODE'
    ]),
    handleLogin () {
      this.visible = true
    },
    handlePersonalCloud () {
      this.visible = false
    }
  }
}
</script>
<style scoped>
.login-msg {
  width: 400px;
  height: 300px;
  position: fixed;
  top: 70px;
  right: 150px;
  padding: 2rem;
  border-radius: 8px;
}

.ant-menu-horizontal {
  background-color: transparent;
  color: #fff;
}

.fill-login-msg {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>
