<template>
  <div class="login-input">
    <a-input class="gutter-vertical" placeholder="请输入用户名" v-model="userName" ref="userNameInput">
       <a-icon slot="prefix" type="user" />
    </a-input>
    <a-input class="gutter-vertical" type="password" placeholder="请输入密码" v-model="password" ref="passwordInput">
       <a-icon slot="prefix" type="key" />
    </a-input>
    <p class="rgister-btn" @click="handleRegister"><a>没有账号，注册一个？</a></p>
    <a-button type="primary" style="margin-top: 2rem; width: 100%" @click="handleLogin">登录</a-button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import UserRegister from '../register/index'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  components: {UserRegister},
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    ...mapMutations([
      'user/SET_USER'
    ]),
    handleLogin () {
      if (this.user) {
        if (!this.userName) {
          this.$message.warning('请输入用户名！')
          return
        }
        if (!this.password) {
          this.$message.warning('请输入用户密码！')
          return
        }
        this.login()
      }
    },
    handleRegister () {
      this.$router.push({path: '/register'})
    },
    login () {
      this.$axios.post('user/oneList', {name: this.userName}).then(response => {
        if (response && response.code === '000000') {
          if (response.data && response.data.length === 1) {
            let user = response.data[0]
            // 校验密码
            // eslint-disable-next-line
            if ($.md5(this.password) !== user.password) {
              this.$message.warning('用户密码不正确, 请重新输入！')
              return
            }
            // 校验模式
            if (this.user.mode !== user.role) {
              this.$message.warning('你选择的登录模式不对, 请重新选择！')
              return
            }
            // 缓存用户信息
            this['user/SET_USER']({value: user})
            if (this.user.mode === '1') {
              this.$router.push('/index/list')
            } else if (this.user.mode === '2') {
              this.$router.push('/index/question')
            } else {
              this.$message.warning('登录系统的模式不支持！')
              this.$router.replace('/login')
            }
          } else {
            let that = this
            this.$confirm({
              title: '用户不存在，创建一个？',
              content: '点击【确定】， 将跳转到到用户注册页面',
              okText: '确定',
              cancelText: '取消',
              onOk () {
                that.$router.push('/register')
              },
              onCancel () {}
            })
          }
        } else {
          this.$message.error('用户身份验证失败，请联系管理员！')
        }
      })
    }
  }
}
</script>
<style scoped>
.login-input {
  width: 240px;
  height: 300px;
}

.rigister-btn {}

.gutter-vertical {
  margin-bottom: 1rem;
  opacity: 1;
  color: #bbb;
  background: transparent;
}
</style>
