<template>
  <div class="login-msg">
    <div class="fill-login-msg">
      <a-tabs :defaultActiveKey="mode" @change="handleChangeTab">
        <a-tab-pane key="1">
          <span slot="tab">
            答题模式
          </span>
          <login-input/>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            出题模式
          </span>
         <login-input/>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
import LoginInput from './LoginInput'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      userName: '请输入用户名',
      password: '请输入密码'
    }
  },
  components: {LoginInput},
  computed: {
    ...mapState({
      mode: state => state.user.user.mode
    })
  },
  mounted () {
    console.log(this.mode)
  },
  methods: {
    handleChangeTab (item) {
      this['user/CHANGE_USER_MODE']({value: String(item)})
    },
    ...mapMutations([
      'user/CHANGE_USER_MODE'
    ])
  }
}
</script>
<style scoped>
.login-msg {
  width: 400px;
  height: 300px;
  position: fixed;
  top: 200px;
  right: 200px;
  padding: 2rem;
  border-radius: 8px;
}
</style>
