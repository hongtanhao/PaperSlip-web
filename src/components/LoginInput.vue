<template>
  <div class="login-input">
    <a-input class="gutter-vertical" placeholder="userName" v-model="userName" ref="userNameInput">
        <a-icon slot="prefix" type="user" />
    </a-input>
    <a-input class="gutter-vertical" type="password" placeholder="password" v-model="password" ref="passwordInput">
       <a-icon slot="prefix" type="key" />
    </a-input>
    <a-button type="primary" style="margin-top: 2rem; width: 100%" @click="handleClick">login</a-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      userName: '请输入用户名',
      password: '请输入密码'
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    handleClick () {
      console.log(this.user)
      if (this.user) {
        if (this.user.mode === '1') {
          this.$router.push('/index/todoAssignment')
        } else if (this.user.mode === '2') {
          this.$router.push('/index/setQuestion')
        } else {
          this.$message.info('用户身份不明确，请重新登陆！')
          this.$router.replace('/')
        }
      }
    }
  }
}
</script>
<style scoped>
.login-input {
  width: 240px;
  height: 300px;
}

.gutter-vertical {
  margin-bottom: 1rem;
  opacity: 1;
  color: #bbb;
  background: transparent;
}
</style>
